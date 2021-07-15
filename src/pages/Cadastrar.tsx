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
  function handleCadastrar() {
    navigation.navigate("Cadastrar");
  }
  function handleHome() {
    navigation.navigate("HomeStack");
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
        <ButtonCadastrar title="Cadastrar" onPress={handleCadastrar} />
        <ButtonCadastrar title="Login" onPress={handleCadastrar}/>
      </Side>
    </Container>
  );
}