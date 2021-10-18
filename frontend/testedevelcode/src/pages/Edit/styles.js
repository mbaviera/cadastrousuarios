import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  titleStyle: {
    color: '#3a3a3a',
    fontWeight: 'bold',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  subtitleStyle: {
    color: '#3a3a3a',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  viewPrimaria:{
    position: 'absolute',
    bottom: 10,
    height: 60,
    width: '100%',
  },
  viewSecundaria:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 7,
    marginRight: 7,
    marginTop: 10,
  },
  iconStyle:{
    color: '#ff6c00', 
    fontSize: 28, 
    alignSelf: 'center'
  },
  textBottom:{
    color: '#3a3a3a',
    fontSize: 13.5,
    fontWeight:'bold'
  },
  input: {
    width: '100%',
    margin: 5,
    borderWidth: 1,
    borderColor: 'lightgray',
    height:50,
    fontWeight:'bold'
  },
  labelTextTop:{
    fontSize: 25,
    textAlign: 'center',
    letterSpacing: 1,
    marginTop: 25,
    fontWeight: 'bold',
  },
  textDataUser: {
    fontSize: 20, 
    fontWeight:'bold'
  }
});
