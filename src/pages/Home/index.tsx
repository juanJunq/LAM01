import React from "react";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/core";
import {
  Container, Body, 
} from "./styles";
import { Header } from "../../components";
import data from "../../services/data";
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

// const BackImage = '../../../assets/img/mapa.png'

export default function Home() {
  const navigation = useNavigation();
  function handleMap() {
    navigation.navigate("Cadastrar");
  }
  return (
    <Container>
        <Header
            title = "AllCourtMap"
            image={require("../../../assets/img/user1.png")}
        />
        <Body>
          <data></data>
        </Body>
    </Container>
  );
}