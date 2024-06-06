const express = require('express');
const router = express.Router();
const Comment = require('../models').Comment;

// Busca todos os comentários de um determinado post (GET)
router.get('/:postId/comments', async (req, res) => {
    const postId = req.params.postId;
    try {
        const comments = await Comment.findAll({
            where: {
                postsId: postId 
            }
        });
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar os comentários', error });
    }
});

// Cadastra um novo comentário para um post específico (POST)
router.post('/:postId/comments', async (req, res) => {
    const postId = req.params.postId;
    const { content, author } = req.body;
    try {
        const newComment = await Comment.create({
            postsId: postId, // Utilizando o postId fornecido na URL
            content,
            author
        });
        res.status(201).json({ message: 'Comentário cadastrado com sucesso' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao cadastrar o comentário', error });
    }
});

// Busca um comentário por ID (GET)
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const comment = await Comment.findByPk(id);
        if (!comment) {
            return res.status(404).json({ message: 'Comentário não encontrado' });
        }
        res.status(200).json(comment);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar o comentário', error });
    }
});

// Deleta um comentário por ID (DELETE)
router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const deletedCommentCount = await Comment.destroy({
            where: {
                id: id,
            },
        });
        if (deletedCommentCount === 0) {
            return res.status(404).json({ message: 'Comentário não encontrado' });
        }
        res.status(200).json({ message: 'Comentário excluído com sucesso' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao excluir o comentário', error });
    }
});

// Atualiza um comentário por ID (PUT)
router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const { content, author } = req.body;
    try {
        const [updatedRowCount] = await Comment.update(
            { content, author },
            {
                where: { id: id },
            }
        );
        if (updatedRowCount === 0) {
            return res.status(404).json({ message: 'Comentário não encontrado' });
        }
        res.status(200).json({ message: 'Comentário atualizado com sucesso' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar o comentário', error });
    }
});

module.exports = router;
