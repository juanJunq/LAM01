import React, {
  useState,
  useEffect
} from "react";
import { useNavigation } from "@react-navigation/core";
import { 
  Platform, 
  Text, 
  View, 
  StyleSheet 
} from 'react-native';
import * as Location from 'expo-location';
import {
  Container, ImageBg 
} from "./styles";



export default function Home() {
  const navigation = useNavigation();
  // function handleCadastrar() {
  //   navigation.navigate("Cadastrar");
  // }

  const [location, setLocation] = useState<null | Location.LocationObject>(null);
  const [errorMsg, setErrorMsg] = useState<null | string>(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({accuracy:1});
      setLocation(location);
    })();
  }, []);
  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
  },
});