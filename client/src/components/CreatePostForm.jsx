// components/CreatePostForm.jsx

import React, { useState } from 'react';

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
        <form onSubmit={handleSubmit}>
            <label>
                Title:
                <input type="text" value={title} onChange={handleTitleChange} />
            </label>
            <label>
                Content:
                <textarea value={content} onChange={handleContentChange} />
            </label>
            <button type="submit">Create Post</button>
        </form>
    );
}

export default CreatePostForm;
