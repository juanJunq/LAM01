import styled from "styled-components/native";
import { StatusBar } from "react-native";


export const Container = styled.SafeAreaView`
    margin-top: ${StatusBar.currentHeight}px;
`