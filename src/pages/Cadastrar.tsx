import React from "react";
import { useNavigation } from "@react-navigation/core";
import {
  Container,
  FormRow,
  Label,
  TextInput,
  Title,
  Form,
  Side,
} from "../styles/Login";
import {ButtonCadastrar} from "../components/";

export default function Cadastrar() {
  const navigation = useNavigation();
  function handleLogin() {
    navigation.navigate("Login");
  }
  function handleHome() {
    navigation.navigate("Home");
  }
  return (
    <Container>
      <Form>
        <Title>AllCourtMap</Title>
        <FormRow>
          <Label>Nome</Label>
          <TextInput placeholder="nome"></TextInput>
        </FormRow>
        <FormRow>
          <Label>E-mail</Label>
          <TextInput placeholder="e-mail"></TextInput>
        </FormRow>
        <FormRow>
          <Label>Senha</Label>
          <TextInput placeholder="senha"></TextInput>
        </FormRow>
      </Form>
      <Side>
        <ButtonCadastrar title="Salvar" onPress={handleLogin}/>
        <ButtonCadastrar title="Voltar" onPress={handleLogin}/>
      </Side>
    </Container>
  );
}