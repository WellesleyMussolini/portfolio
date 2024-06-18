import React from "react";

interface ITextSlideUp { styles: string, labelGap: string, labels: Array<{ label: string, styles: string }>, transitionDelay: number, animationDelay: number };

export const TextSlideUp = ({ styles, labelGap, labels, transitionDelay, animationDelay }: ITextSlideUp) => {
    const [loaded, setLoaded] = React.useState<boolean>(false);

    React.useEffect(() => {
        setTimeout(() => {
            setLoaded(true);
        }, animationDelay);
    }, [animationDelay]);

    return (
        <div className="flex justify-center items-center overflow-hidden">
            <label className={`flex ${labelGap} text-lg`}>
                {labels.map((text, index) => (
                    <span
                        key={index}
                        className={`${text.styles} ${styles} inline-block transition-transform duration-500 ease-out ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
                        style={{ transitionDelay: `${index * transitionDelay}ms` }}>
                        {text.label}
                    </span>
                ))}
            </label>
        </div>
    )
}