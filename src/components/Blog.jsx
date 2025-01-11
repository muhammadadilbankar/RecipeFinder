import React, { useEffect, useState } from 'react';
import { fetchFoodBlogs } from '../apiService';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const loadBlogs = async () => {
            const data = await fetchFoodBlogs();
            setBlogs(data);
        };
        loadBlogs();
    }, []);

    return (
        <div className="blog-container">
            <h2>Food Blogs</h2>
            <div className="blog-list">
                {blogs.map(blog => (
                    <div key={blog.id} className="blog-card">
                        <h3>{blog.title}</h3>
                        <p>{blog.description}</p>
                        <a href={blog.url} target="_blank" rel="noopener noreferrer">Read More</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;
