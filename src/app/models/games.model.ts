export interface GamesModel {
    categories: [];
    features: [];
    themes: [];
    icons: [];
    backgrounds: [];
    id: string;
    server_game_id: string;
    extearnal_game_id: string;
    front_game_id: string;
    name: string;
    title: string;
    ratio: string;
    status: string;
    provider: string;
    show_as_provider: string;
    provider_title: string;
    game_options: [];
    blocked_countries: [];
    has_age_restriction: boolean;
    icon_2: string;
    background: string;
    types: {
        realMode: boolean;
        funMode: boolean;
    };
    game_skin_id: number;
    cats: [
        {
            id: string;
            title: string;
            type: string;
        }
    ];
    feats: [];
    thms: [];
    active: string;
}