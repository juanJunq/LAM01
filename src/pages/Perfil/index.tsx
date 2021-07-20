import React from "react";
import { useNavigation } from "@react-navigation/core";
import {
  Container
} from "../../styles/Container";
import { TextInput, Text} from "../Perfil/styles";
import { Header } from "../../components";


export default function Home() {
  const navigation = useNavigation();
  function handleCadastrar() {
    navigation.navigate("Cadastrar");
  }
  return (
    <Container>
        <Header
            title = "Editar Perfil"
        />
        <Text> Trocar de foto </Text> 
        <TextInput placeholder="Nome"></TextInput>

    </Container>
  );
}