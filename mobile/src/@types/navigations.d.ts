export interface GameRouteParams {
    id: string;
    title: string;
    bannerUrl: string;
}

export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            home: undefined;
            game: {
                id: string;
                title: string;
                bannerUrl: string;
            };
        }
    }
}