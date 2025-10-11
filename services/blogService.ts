
import { blogPosts } from '../constants';
import type { BlogPost } from '../types';

/**
 * Fetches blog posts.
 * 
 * This is a mock function that simulates fetching data from a remote server.
 * When you are ready to connect to your Google Sheets backend, you will
 * replace the logic in this function with a real API call.
 * 
 * @example
 * // Replace the current function with something like this:
 * export const fetchBlogPosts = async (): Promise<BlogPost[]> => {
 *   const response = await fetch('https://your-api-endpoint/articles');
 *   if (!response.ok) {
 *     throw new Error('Failed to fetch blog posts');
 *   }
 *   const data = await response.json();
 *   return data.posts; // Assuming the API returns { posts: [...] }
 * };
 */
export const fetchBlogPosts = (): Promise<BlogPost[]> => {
    return new Promise((resolve) => {
        // Simulate a network delay of 500ms to show loading states
        setTimeout(() => {
            // In a real app, this data would come from your API
            resolve(blogPosts);
        }, 500);
    });
};
