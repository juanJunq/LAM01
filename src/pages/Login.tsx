import React, {useState, useEffect} from "react";
import { AxiosError } from "axios";
import { Alert, KeyboardAvoidingView } from "react-native";
import { useAuth } from "../../src/hook/auth";
import { IAuthenticate, IUser } from "../interfaces/User.interface";
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
import { LoginTypes } from "../types/LoginTypes";



export default function Login({ navigation }: LoginTypes) {
  const { signIn } = useAuth();
  const [data, setData] = useState<IAuthenticate>();
  const [isLoading, setIsLoading] = useState(true);

  function handleCadastrar() {
    navigation.navigate("Cadastrar");
  }
  // function handleHome() {
  //   navigation.navigate("HomeStack");
  // }
  function handleChange(item: IAuthenticate) {
    setData({ ...data, ...item });
  }
  async function handleSignIn() {
    try {
      setIsLoading(true);
      if (data?.email && data.password) {
        await signIn(data);
      } else {
        Alert.alert("Preencha todos os campos!!!");
        setIsLoading(false);
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
      setIsLoading(false);
    }
  }

  useEffect(() => {
    setIsLoading(false);
  }, []);
  return (
    <Container>
       <KeyboardAvoidingView>
          <Form>
            <Title>AllCourtMap</Title>
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
              <Button title="Login" onPress={handleSignIn}/>
              <ButtonStyleTextDiv>
                <ButtonText title="Cadastrar" onPress={handleCadastrar} />
                <ButtonText title="Esqueceu sua senha?" onPress={handleCadastrar} />
              </ButtonStyleTextDiv>
        </KeyboardAvoidingView>
    </Container>
  );
}