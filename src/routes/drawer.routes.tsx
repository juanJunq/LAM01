import React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {Home, Config} from "../pages";
import colors from "../styles/colors";
import { EvilIcons } from '@expo/vector-icons';


const Drawer = createDrawerNavigator();

export default function App(){
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: true,
                headerStyle: { backgroundColor: colors.orange },
                headerTintColor: "white",
                headerTitle: "AllCourtMap",
                // drawerStyle:
            }}
        >
            <Drawer.Screen 
            name="Home" 
            component={Home}
            options={{drawerLabel:"Home",
    
        }}
        />
           <Drawer.Screen 
            name="Config" component={Config}
            options={{
                drawerLabel:"Configurações",
                drawerIcon: ()=> (
                    <EvilIcons name="gear" size={24} color="black" />
                )
            }}
        />
        </Drawer.Navigator>
    );
}