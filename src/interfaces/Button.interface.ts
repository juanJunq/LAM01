import { ImageSourcePropType } from "react-native"

export interface ButtonProps{
    onPress: () => void;
    title?: string;
    image?: ImageSourcePropType;
}