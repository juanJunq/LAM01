import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Login, Cadastrar, Home} from "../pages";

const Stack = createStackNavigator();

export default function LoginRoutes() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastrar" component={Cadastrar} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}