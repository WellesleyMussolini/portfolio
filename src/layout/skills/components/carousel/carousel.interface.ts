export interface CarouselProps {
    card: React.ReactNode[];
    responsiveness: {
        [key: number]: {
            items: number;
        };
    };
};