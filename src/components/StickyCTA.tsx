import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { DISCOVERY_CALL_URL } from "@/config/constants";
import { useEffect, useState } from "react";

const StickyCTA = () => {
    const [isVisible, setIsVisible] = useState(false);

    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Show if scrolling down AND past threshold (100px)
            // Hide if scrolling up
            // Check if at bottom of page
            const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;

            // Show if scrolling down AND past threshold (100px) OR if at bottom
            // Hide if scrolling up AND not at bottom
            if (isAtBottom) {
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(true);
            } else if (currentScrollY < lastScrollY) {
                setIsVisible(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <div
            className={`fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/90 to-transparent z-[100] md:hidden transition-transform duration-500 ease-in-out pointer-events-none ${isVisible ? 'translate-y-0' : 'translate-y-full'
                }`}
        >
            <div className="pointer-events-auto">
                <Button
                    className="w-full bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-900/20 text-lg py-6 rounded-xl animate-pulse-glow"
                    onClick={() => window.open(DISCOVERY_CALL_URL, '_blank')}
                >
                    <Calendar className="mr-2 h-5 w-5" />
                    Book a Discovery Call
                </Button>
            </div>
        </div>
    );
};

export default StickyCTA;
