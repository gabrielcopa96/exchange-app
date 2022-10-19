import { View, Text, StyleSheet } from 'react-native';
import FontAwesome5Brands from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicos from 'react-native-vector-icons/Ionicons';


export default function LginUser() {
  return (
    <View style={styles.container}>
      <FontAwesome5Brands name='mobile-alt' style={{ color: "#747474", fontSize: 90, position: "absolute", top: 1 }} />
      <FontAwesome5Brands name='camera' style={{ color: "#747474", fontSize: 90, position: "absolute", right: 1}} />
      <FontAwesome5Brands name='car' style={{ color: "#26A8D1", fontSize: 90, position: "absolute", bottom: 2, left: 2}}/>
      <Ionicos name='ios-game-controller-sharp' style={{ color: "#0F760F", fontSize: 200, position: "absolute", left: 1}} />
      <Fontisto name='bicycle' style={{ color: "#FF5C00", fontSize: 100, position: "absolute", bottom: 1, right: 2}}/>

      <View style={styles.containerElements}>
        <Text style={styles.incono}>Exchange</Text>
        <View style={styles.containerBtn}>
          <Text style={{ color: "#CF2424", fontSize: 16, fontWeight: "600" }}>Inicia sesion con Google</Text>
          <FontAwesome5Brands style={{fontSize: 30, marginRight:15,color:"#CF2424"}} name='google'/>
        </View>
        <View style={styles.containerBtn}>
          <Text style={{ color: "#166FE5", fontSize: 16, fontWeight: "600" }}>Inicia sesion con Facebook</Text>
          <FontAwesome5Brands style={{fontSize: 30, marginRight:15,color:"#166FE5"}} name='facebook-square'/>
        </View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    fontFamily: "Roboto",
    height: '100%',
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
    position: "relative"
  },
  incono: {
    fontSize: 35,
    lineHeight: 120,
    fontWeight: "700",
    color: '#FFFFFF',
    // fontFamily:"Righteous",
  },
  containerBtn: {
    backgroundColor: "#FFFFFF",
    zIndex: 1,
    marginBottom: 80,
    width: "90%",
    height: 39,
    borderRadius: 18,
    flexDirection: "row-reverse",
    justifyContent: "center",
    alignItems: "center"

  },
  containerElements: {
    width: "100%",
    height: "70%",
    alignItems: "center",

  }

})