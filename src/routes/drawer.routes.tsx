import React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {Home, Config} from "../pages";
import colors from "../styles/colors";
import { HeaderImage } from "../components/Header/styles";


const Drawer = createDrawerNavigator();

export default function App(){
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: true,
                headerStyle: { backgroundColor: `${colors.orange}`},
                headerTintColor: "white",
                headerTitle: "AllCourtMap"
            }}
        >
            <Drawer.Screen 
            name="Home" component={Home}
            options={{drawerLabel:"Home"}}
        />
           <Drawer.Screen 
            name="Config" component={Config}
            options={{drawerLabel:"Configurações"}}
        />
        </Drawer.Navigator>
    );
}