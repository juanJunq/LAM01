import styled from "styled-components/native";
import colors from "../../styles/colors";

export const ButtonStyle = styled.TouchableOpacity`
    background-color: ${colors.orange};
    border-radius: 10px;
    margin-top: 10px;
    font-size: 10px;
    margin-left: 45px;
    margin-right: 20px;
`
export const ButtonStyleText = styled.Text`
    color: ${colors.white};
    font-weight: bold;
    text-align: center;
    padding: 10px;
    margin-left: 5px;
    margin-right: 5px;
`
