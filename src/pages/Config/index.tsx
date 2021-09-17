import React, {useState} from "react";
import { Header } from "../../components";
import { View, StyleSheet, Switch, Text } from 'react-native';
import { Container } from "../../styles/Container";
import { Ionicons, Entypo } from '@expo/vector-icons';


export default function Config(){
    const [on, setOn] = useState(false)
    const toggleOn=()=>setOn(!on)
    return(
        <Container style={{alignItems: "center"}}>
            <View style={styles.ViewStyle}>
                <Switch 
                    style={styles.SwitchStyle}
                    value={on}
                    onValueChange={toggleOn}
                />
                <Text style={styles.DarkTextStyle}>Modo {on ?  "Claro" : "Escuro"}</Text>
            </View>
            <View style={styles.IdiomaStyle}>
                <Ionicons name="language-outline" size={34} color="black" />
                <Text style={styles.IdiomaTextStyle}>Idioma</Text>
            </View>
            <View style={styles.ViewStyle}>
                <Entypo name="pencil" size={34} color="black" />
                <Text style={styles.IdiomaTextStyle}>Sugestões</Text>
            </View>
        </Container>
    );
}

const styles = StyleSheet.create({
    ViewStyle: {
        flexDirection: 'row',
        paddingVertical: 12,
        paddingHorizontal: 20,
        
    },
    DarkTextStyle: {
        fontSize: 20,
        marginLeft: 30,
        marginTop: 5
    },
    SwitchStyle: {
        marginTop: 7,
        transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] 
    },
    IdiomaStyle: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 12,
    },
    IdiomaTextStyle: {
        fontSize: 20,
        marginLeft: 45,
        marginTop: 3
    },
})