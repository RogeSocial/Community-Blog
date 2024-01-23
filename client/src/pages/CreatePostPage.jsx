// pages/CreatePostPage.jsx

import React from 'react';
import CreatePostForm from '../components/CreatePostForm';

function CreatePostPage({ history }) {
    const handleCreatePost = async (postData) => {
        console.log('Create post data:', postData);
        // Skicka POST-förfrågan till din backend med postData
        try {
            const response = await fetch('http://localhost:8080/api/blog', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(postData),
            });

            if (response.ok) {
                // Om inlägget skapas framgångsrikt, navigera till startsidan
                window.location.href = "/"
            } else {
                // Hantera fel här om du vill
                console.error('Error creating post');
            }
        } catch (error) {
            console.error('Error creating post', error);
        }
    };

    return (
        <div className="create-post-page">
            <h1>Create a New Post</h1>
            <CreatePostForm onCreatePost={handleCreatePost} />
        </div>
    );
}

export default CreatePostPage;
