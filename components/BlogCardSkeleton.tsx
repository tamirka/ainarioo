
import React from 'react';

const BlogCardSkeleton: React.FC = () => (
    <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700/80 animate-pulse">
        <div className="bg-gray-700 w-full h-48"></div>
        <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
            <div className="bg-gray-700 h-4 w-1/4 rounded-full mb-4"></div>
            <header>
                <div className="bg-gray-700 h-6 w-3/4 rounded mb-2"></div>
                <div className="bg-gray-700 h-6 w-1/2 rounded"></div>
            </header>
            <div className="space-y-2 mt-4 mb-4 flex-grow">
                 <div className="bg-gray-700 h-4 w-full rounded"></div>
                 <div className="bg-gray-700 h-4 w-5/6 rounded"></div>
            </div>
            <footer className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-700/50">
                <div className="w-10 h-10 rounded-full bg-gray-700 shrink-0"></div>
                <div className="flex-grow space-y-2">
                    <div className="h-4 bg-gray-700 w-1/3 rounded"></div>
                    <div className="h-3 bg-gray-700 w-1/2 rounded"></div>
                </div>
            </footer>
        </div>
    </div>
);

export default BlogCardSkeleton;
