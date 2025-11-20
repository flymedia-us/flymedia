import { Link, LinkProps } from "react-router-dom";
import { routeImports } from "@/routes";

interface PrefetchLinkProps extends LinkProps {
    to: string;
    prefetch?: keyof typeof routeImports;
}

const PrefetchLink = ({ to, prefetch, onMouseEnter, ...props }: PrefetchLinkProps) => {
    const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (prefetch && routeImports[prefetch]) {
            routeImports[prefetch]();
        }
        if (onMouseEnter) {
            onMouseEnter(e);
        }
    };

    return <Link to={to} onMouseEnter={handleMouseEnter} {...props} />;
};

export default PrefetchLink;
