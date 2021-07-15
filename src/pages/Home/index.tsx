import React from "react";
import { useNavigation } from "@react-navigation/core";
import {
  Container,
} from "./styles";
import { Header } from "../../components";


export default function Home() {
  const navigation = useNavigation();
  function handleCadastrar() {
    navigation.navigate("Cadastrar");
  }
  return (
    <Container>
        <Header
            title = "AllCourtMap"
            image={require("../../../assets/img/user1.png")}
        />
    </Container>
  );
}