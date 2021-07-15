import React from "react";
import { Image } from "react-native";
import { HeaderProps } from "../../interfaces/Header.interface";
import {
  HeaderStyle,
  HeaderTitle,
  HeaderImage,
  HeaderHello,
} from "./styles";

export default function Header({image, title }: HeaderProps) {
  return (
    <HeaderStyle>
      <HeaderTitle>
        {title && <HeaderHello>{title}</HeaderHello>}
      </HeaderTitle>
      <HeaderImage>
        <Image source={image} />
      </HeaderImage>
    </HeaderStyle>
  );
}