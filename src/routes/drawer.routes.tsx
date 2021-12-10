import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Home, Config, Perfil, Sair } from "../pages";
import colors from "../styles/colors";
import { EvilIcons, Feather, Ionicons } from '@expo/vector-icons';


const DrawerNavigation = createDrawerNavigator();

export default function App() {
    return (
        <DrawerNavigation.Navigator
            screenOptions={{
                headerShown: true,
                headerStyle: { backgroundColor: colors.orange },
                headerTintColor: "white",
                headerTitle: "AllCourtMap",
                drawerStyle: {

                }
            }}
        >
            <DrawerNavigation.Screen
                name="Home"
                component={Home}
                options={{
                    drawerLabel: "Home",

                }}
            />
            <DrawerNavigation.Screen
                name="Config"
                component={Config}
                options={{
                    drawerLabel: "Configurações",
                    drawerIcon: () => (
                        <EvilIcons name="gear" size={24} color="black" />
                    ),
                    drawerStyle: {
                        marginBottom: 15,
                        borderTopColor: '#f4f4f4',
                        borderTopWidth: 1,

                    }
                }}
            />
            <DrawerNavigation.Screen
                name="user"
                component={Perfil}
                options={{
                    drawerLabel: "Editar Perfil",
                    drawerIcon: () => (
                        <Feather name="user" size={24} color="black" />
                    ),
                }}
            />
            <DrawerNavigation.Screen
                name="sair"
                component={Sair}
                options={{
                    drawerLabel: "Sair",
                    drawerIcon: () => (
                        <Ionicons name="exit-outline" size={24} color="black" />
                    ),
                }}
            />
        </DrawerNavigation.Navigator>
    );
}