
import React from 'react';

export interface Service {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export interface HowItWorksStep {
    step: number;
    title: string;
    description: string;
}

export interface PortfolioItem {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    tags: string[];
    modifiedDate: string;
}

export interface BlogPost {
    id: number;
    title: string;
    slug: string;
    excerpt: string;
    imageUrl: string;
    category: string;
    author: string;
    authorImageUrl: string;
    publishedDate: string;
    readingTime: string;
    content: string;
}
