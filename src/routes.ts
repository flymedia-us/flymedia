import { lazy } from "react";

// Define import functions for prefetching
export const routeImports = {
    index: () => import("./pages/Index"),
    pricing: () => import("./pages/Pricing"),
    contact: () => import("./pages/Contact"),
    clients: () => import("./pages/Clients"),
    socialMediaGuide: () => import("./pages/SocialMediaGuide"),
    youtubeSetup: () => import("./pages/YouTubeSetup"),
    notFound: () => import("./pages/NotFound"),
};

// Export lazy components for App.tsx
export const routes = {
    Index: lazy(routeImports.index),
    Pricing: lazy(routeImports.pricing),
    Contact: lazy(routeImports.contact),
    Clients: lazy(routeImports.clients),
    SocialMediaGuide: lazy(routeImports.socialMediaGuide),
    YouTubeSetup: lazy(routeImports.youtubeSetup),
    NotFound: lazy(routeImports.notFound),
};
