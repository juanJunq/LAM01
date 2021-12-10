import React, { useEffect, useState } from "react";
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
import { AxiosError } from "axios";
import { Alert } from "react-native";
import { useAuth } from "../hook/auth";
import { IRegister, IUser } from "../interfaces/User.interface";
import { LoginTypes } from "../types/LoginTypes";




export default function Cadastrar({ navigation }: LoginTypes) {
  const { register } = useAuth();
  const [data, setData] = useState<IRegister>();
  const [isLoading, setIsLoading] = useState(true);
  function handleChange(item: IRegister) {
    setData({ ...data, ...item });
  }
  function handleLogin() {
    navigation.navigate("Login");
  }
  async function handleRegister() {
    try {
      setIsLoading(true);
      if (data?.email && data.name && data.password) {
        await register(data);
      } else {
        Alert.alert("Preencha todos os campos!!!");
      }
    } catch (error) {
      const err = error as AxiosError;
      const data = err.response?.data as IUser;
      let message = "";
      if (data.data) {
        for (const [key, value] of Object.entries(data.data)) {
          message = `${message} ${value}`;
        }
      }
      Alert.alert(`${data.message} ${message}`);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    // setTimeout(() => {
    setIsLoading(false);
    // }, 500);
  }, []);
  return (
    <Container>
      <Form>
        <Title>AllCourtMap</Title>
        <FormRow>
          <Label>Nome</Label>
          <TextInput 
              placeholder="nome"
              onChangeText={(i) => handleChange({ name: i })}
          ></TextInput>
        </FormRow>
        <FormRow>
          <Label>E-mail</Label>
          <TextInput 
            placeholder="e-mail"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={(i) => handleChange({ email: i })}
          ></TextInput>
        </FormRow>
        <FormRow>
          <Label>Senha</Label>
          <TextInput 
            placeholder="senha"
            secureTextEntry={true}
            onChangeText={(i) => handleChange({ password: i })}
          ></TextInput>
        </FormRow>
      </Form>
      <Side>
        <ButtonCadastrar title="Salvar" onPress={handleLogin}/>
        <ButtonCadastrar title="Voltar" onPress={handleLogin}/>
      </Side>
    </Container>
  );
}