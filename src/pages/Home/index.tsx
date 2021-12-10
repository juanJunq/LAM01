import React, {
  useState,
  useEffect
} from "react";
import {  
  Text, 
  View, 
  StyleSheet,
  Dimensions 
} from 'react-native';
import MapView, {Region, Marker,} from "react-native-maps";
import * as Location from 'expo-location';
import { useAuth } from "../../hook/auth";




export default function Home() {
  const {user} = useAuth();
  // function handleCadastrar() {
  //   navigation.navigate("Cadastrar");
  // }

  const [location, setLocation] = useState<null | Location.LocationObject>(null);
  const [errorMsg, setErrorMsg] = useState<null | string>(null);
  const [region, setRegion] = useState<Region>();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({accuracy:1});
      setLocation(location);
      setRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      })
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
      {!region && <Text style={styles.paragraph}>{text}</Text>}
      {region && <MapView style={styles.map} region={region}>
          <Marker coordinate={region}></Marker>
        </MapView>}
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
  map:{
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});