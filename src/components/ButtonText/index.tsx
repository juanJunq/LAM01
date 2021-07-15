import React from "react";
import { ButtonProps } from "../../interfaces/Button.interface";
import { ButtonStyle, ButtonStyleText } from "./styles";

export default function ButtonText({title, onPress, ...rest}:ButtonProps){
    return(
        <ButtonStyle onPress={onPress} {...rest}>
            <ButtonStyleText>{title}</ButtonStyleText>
        </ButtonStyle>
    );
}