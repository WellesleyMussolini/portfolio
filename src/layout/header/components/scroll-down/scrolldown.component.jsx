import React from "react";

export const useScrollHandler = () => {
    const [scrolled, setScrolled] = React.useState(false);

    const handleScroll = () => window.scrollY > 80 ? setScrolled(true) : setScrolled(false);

    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return scrolled;
};