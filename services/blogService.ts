
import type { BlogPost } from '../types';

const API_URL = '/api/posts';

export const fetchBlogPosts = async (): Promise<BlogPost[]> => {
    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error('Failed to fetch blog posts');
    }
    return await response.json();
};

export const createBlogPost = async (post: Partial<BlogPost>): Promise<BlogPost> => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
    });
    if (!response.ok) {
        throw new Error('Failed to create blog post');
    }
    return await response.json();
};

export const updateBlogPost = async (id: number, post: Partial<BlogPost>): Promise<BlogPost> => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
    });
    if (!response.ok) {
        throw new Error('Failed to update blog post');
    }
    return await response.json();
};

export const deleteBlogPost = async (id: number): Promise<void> => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
    });
    if (!response.ok) {
        throw new Error('Failed to delete blog post');
    }
};

export const uploadImage = async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append('image', file);
    const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
    });
    if (!response.ok) {
        throw new Error('Failed to upload image');
    }
    const data = await response.json();
    return data.url;
};
