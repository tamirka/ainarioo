
/**
 * Updates the document's meta tags for SEO purposes.
 * @param title The new title of the page.
 * @param description The new meta description.
 * @param imageUrl The URL for the social sharing image (og:image, twitter:image).
 * @param pagePath The path of the current page (e.g., 'blog/my-article').
 */
export const updateMetaTags = (title: string, description: string, imageUrl?: string, pagePath?: string) => {
    // --- Update Title ---
    document.title = title;

    // --- Helper to update or create a meta tag ---
    const setMetaTag = (nameOrProperty: string, content: string) => {
        const isProperty = nameOrProperty.startsWith('og:') || nameOrProperty.startsWith('twitter:');
        const selector = isProperty ? `meta[property='${nameOrProperty}']` : `meta[name='${nameOrProperty}']`;
        
        let element = document.querySelector<HTMLMetaElement>(selector);
        if (!element) {
            element = document.createElement('meta');
            if (isProperty) {
                element.setAttribute('property', nameOrProperty);
            } else {
                element.setAttribute('name', nameOrProperty);
            }
            document.head.appendChild(element);
        }
        element.setAttribute('content', content);
    };

    // --- Helper to update or create a link tag ---
    const setLinkTag = (rel: string, href: string) => {
        let element = document.querySelector<HTMLLinkElement>(`link[rel='${rel}']`);
        if (!element) {
            element = document.createElement('link');
            element.setAttribute('rel', rel);
            document.head.appendChild(element);
        }
        element.setAttribute('href', href);
    };

    // --- Define URLs ---
    const baseUrl = window.location.origin;
    const canonicalUrl = pagePath ? `${baseUrl}/${pagePath}` : baseUrl;
    const defaultImageUrl = 'https://picsum.photos/seed/ainario/1200/630';
    const finalImageUrl = imageUrl || defaultImageUrl;

    // --- Update Canonical URL and OG:URL ---
    setLinkTag('canonical', canonicalUrl);
    setMetaTag('og:url', canonicalUrl);

    // --- Update Standard Meta Tags ---
    setMetaTag('title', title);
    setMetaTag('description', description);

    // --- Update Open Graph (Facebook, LinkedIn, etc.) Tags ---
    setMetaTag('og:title', title);
    setMetaTag('og:description', description);
    setMetaTag('og:image', finalImageUrl);
    setMetaTag('og:type', pagePath && pagePath.startsWith('blog/') ? 'article' : 'website');

    // --- Update Twitter Card Tags ---
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', finalImageUrl);
};
