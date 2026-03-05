
// This allows TypeScript to recognize the gtag function on the window object.
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    fbq: (...args: any[]) => void;
    _fbq: any;
  }
}

/**
 * Initializes the Facebook Pixel.
 */
export const initFacebookPixel = () => {
  const pixelId = import.meta.env.VITE_FACEBOOK_PIXEL_ID;
  if (!pixelId) {
    console.warn('Facebook Pixel ID not found in environment variables.');
    return;
  }

  if (window.fbq) return; // Already initialized

  // Standard Facebook Pixel initialization code
  (function(f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
    if (f.fbq) return;
    n = f.fbq = function() {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = true;
    n.version = '2.0';
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

  window.fbq('init', pixelId);
  window.fbq('track', 'PageView');
  console.log('Facebook Pixel initialized');
};

/**
 * Tracks a page view in Google Analytics and Facebook Pixel.
 * This function should be called whenever a route changes in a Single Page Application.
 * 
 * @param path The path of the page to track (e.g., '/contact').
 * @param title The title of the page.
 */
export const trackPageView = (path: string, title: string) => {
  // Google Analytics
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

  // Facebook Pixel
  if (typeof window.fbq === 'function') {
    window.fbq('track', 'PageView');
  }
};

/**
 * Tracks a conversion event (e.g., Lead).
 * 
 * @param eventName The name of the event to track (e.g., 'Lead', 'Purchase').
 * @param data Optional data to send with the event.
 */
export const trackConversion = (eventName: string, data?: any) => {
  if (typeof window.fbq === 'function') {
    window.fbq('track', eventName, data);
    console.log(`Facebook Pixel: Tracked ${eventName}`, data);
  }
};
