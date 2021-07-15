import styled from "styled-components/native";
import colors from "../../styles/colors";

export const HeaderStyle = styled.View`
    flex-direction: row;
    background-color: ${colors.orange};
`

export const HeaderTitle = styled.View`
    margin-left: 75px;
    justify-content: center;
`

export const HeaderImage = styled.View`
    margin-left: 30px;
    margin-top: 10px;
    margin-bottom: 10px;
    align-items: center;
`

export const HeaderHello = styled.Text`
    font-size: 38px;
    font-weight: bold;
    color: ${colors.white};
`