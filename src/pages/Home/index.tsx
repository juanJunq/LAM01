import React from "react";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/core";
import {
  Container, ImageBg 
} from "./styles";
import { Header } from "../../components";


export default function Home() {
  const navigation = useNavigation();
  // function handleCadastrar() {
  //   navigation.navigate("Cadastrar");
  // }
  return (
    <Container>
        <ImageBg
            source={require("../../../assets/img/mapa.png")}
        />
    </Container>
  );
}