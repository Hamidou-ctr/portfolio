declare module 'aos' {
    const aos: {
        init(config?: {
            duration?: number;
            easing?: string;
            once?: boolean;
            mirror?: boolean;
        }): void;
        refresh(): void;
        //refreshHard(): void;
    };
    export = aos;
}
