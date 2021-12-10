import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import LoginRoutes from "./login.routes";
import HomeStack from "./login.routes";
import { useAuth } from "../hook/auth";

export default function Routes(){
    const {access_token} = useAuth();
    return(
        <NavigationContainer>
            {access_token ? <HomeStack /> : <LoginRoutes />}
        </NavigationContainer>
    );
}