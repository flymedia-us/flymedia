import { Gift } from "lucide-react";

const PromoBanner = () => {
    return (
        <div className="bg-gradient-to-r from-red-900 via-red-700 to-red-900 text-white py-2 px-4 text-center relative z-50 animate-in slide-in-from-top duration-500">
            <div className="container mx-auto flex items-center justify-center gap-2 text-sm md:text-base font-medium">
                <Gift className="h-6 w-6 md:h-5 md:w-5 animate-bounce flex-shrink-0" />
                <p>
                    <span className="font-bold text-red-200">Christmas came early!</span> Take $100 off Basic, $200 off other plans.
                    <span className="hidden sm:inline"> For new & existing clients through Dec 31.</span>
                </p>
            </div>
        </div>
    );
};

export default PromoBanner;
