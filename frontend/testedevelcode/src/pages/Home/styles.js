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
    bottom: 2,
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
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#DCDCDC',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    padding: 10,
  },
  pic: {
    borderRadius: 30,
    width: 60,
    height: 60,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 280,
  },
  nameTxt: {
    marginLeft: 15,
    fontWeight: '600',
    color: '#222',
    fontSize: 18,
    width:200,
  },
  mblTxt: {
    fontWeight: '200',
    color: '#777',
    fontSize: 13,
  },
  msgContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  msgTxt: {
    fontWeight: '400',
    color: '#008B8B',
    fontSize: 15,
    marginLeft: 15,
  },
});
