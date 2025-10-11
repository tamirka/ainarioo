
// This allows TypeScript to recognize the gtag function on the window object.
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

/**
 * Tracks a page view in Google Analytics.
 * This function should be called whenever a route changes in a Single Page Application.
 * 
 * @param path The path of the page to track (e.g., '/contact').
 * @param title The title of the page.
 */
export const trackPageView = (path: string, title: string) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'page_view', {
      page_path: path,
      page_title: title,
      page_location: window.location.origin + path
    });
    console.log(`Analytics: Tracked page view for ${path}`);
  } else {
    console.warn('Google Analytics gtag function not found.');
  }
};
