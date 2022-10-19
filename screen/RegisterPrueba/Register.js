import { useRef, useState } from "react"
import { View, Text, Button, StyleSheet, TextInput } from "react-native"

import axios from "axios"

const Register = ({ navigation }) => {

    const [input, setInput] = useState({
        name: "",
        // surname: "",
        // email: "",
        // username: "",
        // password: "",
        // typeUser: ""
    })

    const inputName = useRef()

    // const inputSurname = useRef()

    // const inputEmail = useRef()

    // const inputUsername = useRef()

    // const inputPassword = useRef()

    // const inputType = useRef()

    const handleChange = () => {

        let valueName = inputName.current.value
        // let valueSurname = inputSurname.current.value
        // let valueEmail = inputEmail.current.value
        // let valueUsername = inputUsername.current.value
        // let valuePassword = inputPassword.current.value
        // let valueType = inputType.current.value

        // setInput({
            // name: valueName,
            // surname: valueSurname,
            // email: valueEmail,
            // username: valueUsername,
            // password: valuePassword,
            // typeUser: valueType
        // })

        // console.log(input)

    }

    const handleRegister = () => {

        axios.post(`http://localhost:3002/auth/register`, input).then(data => {
            console.log(data)
        }).catch(err => console.log(err))


        navigation.push('Login')

    }



    return (
        <View style={styles.container}>
            <Text style={styles.text}>Mi registro</Text>
            <TextInput
                style={styles.input}
                value=""
                ref={inputName}
                placeholder="escriba su nombre"
                onChangeText={handleChange}
            />
            {/* <TextInput
                style={styles.input}
                value={inputSurname.current}
                ref={inputSurname}
                placeholder="escriba su apellido"
                onChangeText={handleChange}
            />
            <TextInput
                style={styles.input}
                value={inputEmail.current}
                ref={inputEmail}
                placeholder="escriba su email"
                onChangeText={handleChange}
            />
            <TextInput
                style={styles.input}
                value={inputUsername.current}
                ref={inputUsername}
                placeholder="escriba su usuario"
                onChangeText={handleChange}
            />
            <TextInput
                style={styles.input}
                value={inputPassword.current}
                ref={inputPassword}
                placeholder="escriba su password"
                onChangeText={handleChange}
            />
            <TextInput
                style={styles.input}
                value={inputType.current}
                ref={inputType}
                placeholder="escriba su type"
                onChangeText={handleChange}
            /> */}
            <Button title="Registrarse" onPress={handleRegister} />
            <Text style={{ color: "#fff" }}>{inputName}</Text>
            <Text style={{ color: "#fff" }}>{inputSurname}</Text>
            <Text style={{ color: "#fff" }}>{inputEmail}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#171c2d",
        height: "100%",
        flex: 1,
        alignItems: "center"
    },
    text: {
        color: "#fff",
        fontSize: 20,
        marginTop: 20
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
    }
})


export default Register