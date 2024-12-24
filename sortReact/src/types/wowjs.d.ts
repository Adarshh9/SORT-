declare module 'wowjs' {
    export default class WOW {
        constructor(options?: WOWOptions);
        init(): void;
    }

    interface WOWOptions {
        boxClass?: string;
        animateClass?: string;
        offset?: number;
        mobile?: boolean;
        live?: boolean;
    }
}
