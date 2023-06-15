import { Character } from "./character";

export type RootStackParamList = {
    Home: undefined;
    DrawerMenu:undefined;
    HomeStack:undefined;
    CharacterStack: undefined;
    Characters: undefined;
    AddCharacter:undefined;
    DetailCharacter: {
        characterId?: string,
        item?: Character
    };
    EditCharacter:{
        characterId?: string,
        item: Character | undefined,
    };

    Settings:undefined,
};