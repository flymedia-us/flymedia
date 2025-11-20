import { Zap, Star, Crown } from 'lucide-react';

export const DISCOVERY_CALL_URL = 'https://calendar.app.google/g4QPngx4tnHEkFZi7';

export const SOCIAL_LINKS = {
    INSTAGRAM: 'https://instagram.com/flymedia.us',
    TIKTOK: 'https://tiktok.com/@flymedia.us',
    FACEBOOK: 'https://facebook.com/flymedia.us',
    SNAPCHAT: 'https://snapchat.com/@flymedia.us',
    YOUTUBE: 'https://youtube.com/@TryFlyMedia',
    X: 'https://x.com/TryFlyMedia',
};

export const COMPANY_INFO = {
    ADDRESS: '7901 4th Street N Suite 300 St. Petersburg, FL 33702',
    COPYRIGHT: '© 2025 Fly Media LLC. All rights reserved.',
};

export const PRICING_PLANS = [
    {
        name: "Basic",
        // Note: Icons are components and cannot be directly stored in a pure JSON-like constant file if we want to keep it simple, 
        // but since this is a TS file, we can export a function or object that returns the plan structure including components.
        // However, to keep constants clean, let's store data here and map icons in the component, OR import lucide-react here.
        // I'll import lucide-react here as it's a .ts file (not .json) so it supports JSX/Components if configured, 
        // but usually constants are better as pure data. 
        // Let's try to keep it pure data and map icons in the component if possible, 
        // BUT the current implementation has different icons for each plan.
        // Let's store the icon NAME or TYPE and map it in the component to avoid JSX in constants if we want strict separation,
        // but for simplicity in this refactor, I will include the icon component here as it's a .ts file in a React project.
        // Wait, .ts files don't support JSX unless it's .tsx. The file is .ts.
        // So I cannot put <Zap /> in .ts.
        // I will change the file extension to .tsx OR just store the string 'Zap' and map it.
        // Changing to .tsx is cleaner for this specific usage.
        // Actually, I'll just store the data and handle icons in the components to keep this file pure TS.
        iconName: "Zap",
        price: "$749",
        period: "/month",
        description: "Perfect for performers starting their social media journey",
        features: [
            "3x edited videos/week",
            "0% booking commission",
            "Unlimited cloud storage",
            "Monthly analytics report",
            "Core platforms:",
            "• YouTube",
            "• Instagram",
            "• TikTok",
            "Platform rewards split 50-50"
        ],
        popular: false,
        value: false,
        gradient: "from-blue-600/20 to-purple-600/20"
    },
    {
        name: "Growth",
        iconName: "Star",
        price: "$1,499",
        period: "/month",
        description: "For the rising star and regular performer ready to dominate social media",
        features: [
            "5x edited videos/week",
            "0% booking commission",
            "Unlimited cloud storage",
            "Monthly analytics report",
            "Expanded platforms:",
            "• YouTube",
            "• Instagram",
            "• TikTok",
            "• Facebook",
            "• Snapchat",
            "You earn 70% platform rewards",
            "Custom thumbnails for videos"
        ],
        popular: true,
        value: false,
        gradient: "from-red-600/20 to-orange-600/20"
    },
    {
        name: "Pro",
        iconName: "Crown",
        price: "$2,999",
        period: "/month",
        description: "Everything, everywhere. All done for you for maximum viral potential",
        features: [
            "7x edited videos/week",
            "0% booking commission",
            "Unlimited cloud storage",
            "Monthly analytics report",
            "Unlimited platforms:",
            "• YouTube",
            "• Instagram",
            "• TikTok",
            "• Facebook",
            "• Snapchat",
            "• Add LinkedIn, X, Threads, Bluesky, Reddit",
            "You earn 100% platform rewards",
            "Custom thumbnails for videos",
            "Profile optimization for conversions",
            "• Includes blue-check verification badge",
            "Full-service community engagement",
            "• Automatic comments",
            "• We respond to comments and messages for you",
            "Weekly strategy calls"
        ],
        popular: false,
        value: true,
        gradient: "from-yellow-600/20 to-amber-600/20"
    }
];
