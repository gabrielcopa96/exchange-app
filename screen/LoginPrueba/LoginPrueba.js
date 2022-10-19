import { useState } from "react"
import { Button } from "react-native";
import { View, Text, StyleSheet, TextInput } from "react-native"

const LoginPrueba = (props) => {

    const [inputUsername, setInputUsername] = useState("");
    const [inputPassword, setInputPassword] = useState("")
    
    const [valueUsername, setValueUsername] = useState(null)



    return (
        <View style={styles.container}>
            <Text style={styles.text}>Login</Text>
            <TextInput value={inputUsername} style={styles.input} placeholder="Escribe tu username" onChangeText={setInputUsername} />
            <TextInput value={inputPassword} style={styles.input} placeholder="Escribe tu password" onChangeText={setInputPassword} />
            <Button title="Iniciar sesion" color="orange" />
            <View style={styles.container_register}>
                <Text style={styles.text_register}>Si no estas registrado</Text>
                <Text style={styles.text_register}>clickea el siguiente boton</Text>
                <Button title="Registrarse" onPress={() => props.navigation.navigate("Register")}/>
            </View>
            {/* <Text>{valueUsername}</Text> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#171c2d",
    },
    text: {
        color: "#fff",
        fontSize: 32,
        letterSpacing: 3,
        fontWeight: "700"
    },
    input: {
        width: "70%",
        borderColor: "orange",
        borderRadius: 15,
        height: 40,
        color: "#fff",
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    btn: {
        width: "60%",
        borderRadius: 12
    },
    container_register: {
        marginTop: 50,
    },
    text_register: {
        color: "#fff",
        fontSize: 14,
        letterSpacing: 1,
        marginBottom: 2,
    }
})


export default LoginPrueba