import {useState} from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'Lorem ipsum dolar...', author: 'James', id: 1},
        {title: 'Welcome party!', body: 'Lorem ipsum dolar...', author: 'Debs', id: 2},
        {title: 'Web dev top tips', body: 'Lorem ipsum dolar...', author: 'James', id: 3}
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    return (
        <div className="home">
            <BlogList blogs = {blogs} title="All Blogs" />
            <BlogList blogs = {blogs.filter((blog) => blog.author === 'James')} title="James' Blogs" />
        </div>
    );
}

export default Home;