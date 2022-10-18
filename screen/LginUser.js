import {View,Text,Button,StyleSheet} from 'react-native';
import FontAwesome5Brands from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicos from 'react-native-vector-icons/Ionicons';



export default function LginUser() {
  return (
    <View style={styles.container}>
      <FontAwesome5Brands name='mobile-alt'style={{color:"#747474",fontSize:90,position:"absolute",top:1}}/>
      <FontAwesome5Brands name='camera'style={{color:"#8000FF",fontSize:60,position:"absolute",top:80,right:6}}/>
      <FontAwesome5Brands name='car'style={{color:"#26A8D1",fontSize:90,position:"absolute",right:10,top:400}}/>
      <Ionicos name='ios-game-controller-sharp'style={{color:"#0F760F",fontSize:200, position:"absolute",left:1}}/>
      <Fontisto name='bicycle'style={{color:"#FF5C00",fontSize:100,position:"absolute",left:10,bottom:15}}/>

      <View style={styles.containerElements}>
        <Text style={styles.incono}>Exchange</Text>
        <View style={styles.containerBtn}>
            <Text style={{color:"#CF2424",fontSize:"16px",fontWeight:"600"}}>Inicia sesion con Google</Text>
           <FontAwesome5Brands style={{fontSize: 30, marginRight:15,color:"#CF2424"}} name='google'/>
        </View>
        <View style={styles.containerBtn}>
            <Text style={{color:"#166FE5",fontSize:"16px",fontWeight:"600"}}>Inicia sesion con Facebook</Text>
           <FontAwesome5Brands style={{fontSize: 30, marginRight:15,color:"#166FE5"}} name='facebook-square'/>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    fontFamily:"Roboto",
    height: '100%',
    backgroundColor:"#000000",
    alignItems:"center",
    justifyContent:"center",
    position:"relative"
  },
  incono:{
    fontSize:"35px",
    lineHeight:"8rem",
    fontWeight:700,
    color:'#FFFFFF',
    fontFamily:"Righteous",
  },
  containerBtn:{
    backgroundColor:"#FFFFFF",
    zIndex:1,
    marginBottom:80,
    width:"268px",
    height:"39px",
    borderRadius:"15px",
    flexDirection:"row-reverse",
    justifyContent:"center",
    alignItems:"center"
    
  },
  containerElements:{
    // backgroundColor:"red",
    width:"100%",
    height:"70%",
    alignItems:"center",

  }

})