import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    header:{
      backgroundColor: "#ff6c00",
      height:120,
    },
    avatar: {
      width: 130,
      height: 130,
      borderRadius: 63,
      borderWidth: 4,
      borderColor: "white",
      marginBottom:10,
      alignSelf:'center',
      position: 'absolute',
      marginTop:30
    },
    name:{
      fontSize:22,
      color:"#FFFFFF",
      fontWeight:'600',
    },
    body:{
      marginTop:40,
    },
    bodyContent: {
      flex: 1,
      alignItems: 'center',
      padding:30,
    },
    name:{
      fontSize:28,
      color: "black",
      fontWeight: "600"
    },
    info:{
      fontSize:16,
      color: "#00BFFF",
      marginTop:10
    },
    description:{
      fontSize:16,
      color: "#696969",
      marginTop:10,
      textAlign: 'center'
    },
    buttonContainer: {
      marginTop:10,
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:250,
      borderRadius:30,
      backgroundColor: "#00BFFF",
    },
    containerView: {
      alignItems: 'center',
      alignContent:'center',
      justifyContent:'space-between',
      marginTop: 100,
      flexDirection:'row',
      margin:55
    },
    buttonText: {
      //textos dos botoes
      fontSize:18,
      fontWeight: 'bold',
      color: "#000000",
      textAlign:'center'
    },
    pedidosBtn: {
      //botao de pedido
      width: 100,
      backgroundColor: '#dbdbdb',
      borderRadius: 25,
      height: 50,
      justifyContent: 'center',      
    },
    iconTouchable: {
      //icone cheveron
      position: 'absolute',
      color: '#636363',
      alignSelf:'center',
      fontSize:25
    },
  });