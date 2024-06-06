import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const AtualizarPost = () => {
    const { id } = useParams();
    const [post, setPost] = useState({
        title: '',
        content: '',
        author: ''
    });

    const navigate = useNavigate();

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(`http://localhost:8081/post/${id}`);
                setPost(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchPost();
    }, [id]);

    const handleChange = (e) => {
        setPost((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8081/post/${id}`, post);
            navigate('/post');
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="container">
            <h2 className="w-100 d-flex justify-content-center p-3">Atualizando Post</h2>
            <div className="row">
                <div className="col-md-12">
                    <form onSubmit={handleClick}>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Título</label>
                            <input type="text" className="form-control" id="title" name="title" value={post.title} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="content" className="form-label">Conteúdo</label>
                            <textarea className="form-control" id="content" name="content" value={post.content} onChange={handleChange}></textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="author" className="form-label">Autor</label>
                            <input type="text" className="form-control" id="author" name="author" value={post.author} onChange={handleChange} />
                        </div>
                        <button type="button" className="btn btn-primary">
                            <Link to="/post" className="text-white">Cadastrar</Link>
                        </button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AtualizarPost;
