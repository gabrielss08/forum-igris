const express = require('express');
const router = express.Router();
const Post = require('../models').Post;



// Busca todos os posts
router.get('/', async (req, res) => {
    try {
        const posts = await Post.findAll();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Cria um novo post
router.post('/', async (req, res) => {
    try {
        const { title, content, author } = req.body;
        const newPost = await Post.create({ title, content, author });
        res.status(201).json({ message: 'Post criado com sucesso', post: newPost });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Busca um post por ID
router.get('/:id', async (req, res) => {
    try {
        const postId = req.params.id;
        const post = await Post.findByPk(postId);
        if (!post) {
            res.status(404).json({ message: 'Post não encontrado' });
        } else {
            res.status(200).json(post);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Deleta um post por ID
router.delete('/:id', async (req, res) => {
    try {
        const postId = req.params.id;
        await Post.destroy({ where: { id: postId } });
        res.status(200).json({ message: 'Post excluído com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Atualiza um post por ID
router.put('/:id', async (req, res) => {
    try {
        const postId = req.params.id;
        const { title, content, author } = req.body;
        await Post.update({ title, content, author }, { where: { id: postId } });
        res.status(200).json({ message: 'Post atualizado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
