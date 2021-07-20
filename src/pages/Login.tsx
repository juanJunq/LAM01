import React from "react";
import { useNavigation } from "@react-navigation/core";
import {
  Container,
  FormRow,
  Label,
  TextInput,
  Title,
  Form,
} from "../styles/Login";
import {Button, ButtonText} from "../components";
import { ButtonStyleTextDiv } from "../components/ButtonText/styles";

export default function Login() {
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
          <Label>E-mail</Label>
          <TextInput placeholder="e-mail"></TextInput>
        </FormRow>
        <FormRow>
          <Label>Senha</Label>
          <TextInput placeholder="senha"></TextInput>
        </FormRow>
      </Form>
      <Button title="Login" onPress={handleHome}/>
      <ButtonStyleTextDiv>
        <ButtonText title="Cadastrar" onPress={handleCadastrar} />
        <ButtonText title="Esqueceu sua senha?" onPress={handleCadastrar} />
      </ButtonStyleTextDiv>
    </Container>
  );
}