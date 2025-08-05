import { useEffect, useState } from "react";
import { useLocation } from "react-router";

export default function ScrollRestorationWrapper({ children }: { children: React.ReactNode }) {
    const { pathname } = useLocation();
    const [showChildren, setShowChildren] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        const timeout = setTimeout(() => {
            setShowChildren(true);
        }, 50);

        return () => {
            clearTimeout(timeout);
            setShowChildren(false);
        };
    }, [pathname]);

    return showChildren ? <>{children}</> : null;
}
