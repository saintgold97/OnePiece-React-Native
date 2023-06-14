import { Character } from "./character";

export type RootStackParamList = {
    Home: undefined;
    DrawerMenu:undefined;
    HomeStack:undefined;
    Characters: undefined;
    CharacterStack: undefined;
    DetailCharacter: {
        characterId?: string,
        item?: Character
    };
    Settings:undefined,
};