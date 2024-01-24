// pages/CreatePostPage.jsx
import React from 'react';
import { useAuth } from '../GlobalContext.jsx';
import CreatePostForm from '../components/CreatePostForm';

function CreatePostPage() {
    const { token } = useAuth();

    const handleCreatePost = async (postData) => {
        console.log('Create post data:', postData);

        if (!token) {
            // If the user is not logged in, handle it accordingly
            console.error('User not logged in');
            // You might want to redirect the user to the login page or show a message
            return;
        }

        try {
            const response = await fetch('http://localhost:8080/api/blog', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization:{token}, // Include the token in the headers
                },
                body: JSON.stringify(postData),
            });

            if (response.ok) {
                // If the post is created successfully, navigate to the homepage
                window.location.href = "/";
            } else {
                // Handle errors here if needed
                console.error('Error creating post');
            }
        } catch (error) {
            console.error('Error creating post', error);
        }
    };

    return (
        <div className="create-post-page">
            <CreatePostForm onCreatePost={handleCreatePost} />
        </div>
    );
}

export default CreatePostPage;