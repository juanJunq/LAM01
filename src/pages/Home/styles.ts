import styled from "styled-components/native";
import { StatusBar } from "react-native";


export const Container = styled.SafeAreaView`
    margin-top: ${StatusBar.currentHeight}px;
`

export const Body = styled.View`
    
`

export const BackGround = styled.ImageBackground`
    flex: 1;
    width:100%;
`