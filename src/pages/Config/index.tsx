import React, {useState} from "react";
import { Header } from "../../components";
import { View, StyleSheet, Switch, Text } from 'react-native';
import { Container } from "../../styles/Container";


export default function Config(){
    const [on, setOn] = useState(false)
    const toggleOn=()=>setOn(!on)
    return(
        <Container>
            <View style={styles.DarkMode}>
                <Text style={styles.DarkText}>Modo {on ?  "Claro" : "Escuro"}</Text>
                <Switch 
                    style={styles.SwitchStyle}
                    value={on}
                    onValueChange={toggleOn}
                />
            </View>
        </Container>
    );
}

const styles = StyleSheet.create({
    DarkMode: {
        alignItems: "flex-start",
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
        
    },
    DarkText: {
        fontSize:20, 
        fontWeight:"bold"
    },
    SwitchStyle: {
        marginTop: 5,
        transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] 
    }
})