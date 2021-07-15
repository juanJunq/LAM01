import React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {} from "../pages";

const Drawer = createDrawerNavigator();

export default function App(){
    return (
        <Drawer.Navigator screenOptions={{headerShown: true}}>
            
        </Drawer.Navigator>
    );
}