// components/CreatePostForm.jsx

import { useState } from 'react';
import '../styling/createpost.css';

function CreatePostForm({ onCreatePost }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleTitleChange = (e) => setTitle(e.target.value);
    const handleContentChange = (e) => setContent(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        onCreatePost({ title, content });
        // Återställ formuläret efter att inlägget skickats
        setTitle('');
        setContent('');
    };

    return (
        <div className="create-post-container">
            <form onSubmit={handleSubmit}>
                <h1>Create a New Post</h1>
                <label>
                    Title:
                    <input type="text" value={title} onChange={handleTitleChange} />
                </label>
                <label>
                    Content:
                    <textarea className='content-form' value={content} onChange={handleContentChange} />
                </label>
                <button type="submit">Create Post</button>
            </form>
        </div>
    );
}

export default CreatePostForm;
