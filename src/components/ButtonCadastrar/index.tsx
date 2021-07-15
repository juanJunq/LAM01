import React from "react";
import { ButtonProps } from "../../interfaces/Button.interface";
import { ButtonStyle, ButtonStyleText} from "./stylesCadastrar";

export default function ButtonCadastrar({title, onPress, ...rest}:ButtonProps){
    return(
        <ButtonStyle onPress={onPress} {...rest}>
            <ButtonStyleText>{title}</ButtonStyleText>
        </ButtonStyle>
    );
}