import styled from "styled-components/native";
import { StatusBar } from "react-native";

export const Container = styled.SafeAreaView`
    margin-top: ${StatusBar.currentHeight}px;
    flex: 1;
`

export const ImageBg = styled.ImageBackground`
    flex: 1;
    justify-content: center;
`