export type GamePlatform = 'XBOX' | 'PC' | 'Playstation';

export type Game = {
    id: number;
    title: string;
    platform: GamePlatform;
    label: string;
    value: number;
}