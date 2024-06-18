import { useInView } from 'react-intersection-observer';

export const useInViewHook = (viewPercentage: number) => {
    const [ref, inView] = useInView({
        triggerOnce: true, // Trigger the animation only once
        threshold: viewPercentage, // Triggers when the percentage value entered of the element is viewed
    });
    
    return { ref, inView };
};