import React, {useState, useCallback} from 'react';
import {
  Text,
  View,
  TextInput,
  Alert,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Api from '../../services/Api';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {styles} from './styles';
import {ImagePickerModal} from '../../components/image-picker-modal';
import {ImagePickerAvatar} from '../../components/image-picker-avatar';
import * as ImagePicker from 'react-native-image-picker';
import {MaskedTextInput} from 'react-native-mask-text';
import Moment from 'moment';

export default function Register({navigation}) {
  const [pickerResponse, setPickerResponse] = useState(null);
  const [visible, setVisible] = useState(false);
  const [nome, setNome] = useState('');
  const [nascimento, setData] = useState('');

  const onImageLibraryPress = useCallback(() => {
    const options = {
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false,
    };
    ImagePicker.launchImageLibrary(options, setPickerResponse);
  }, []);

  const onCameraPress = React.useCallback(() => {
    const options = {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
    };
    ImagePicker.launchCamera(options, setPickerResponse);
  }, []);

  const uri = pickerResponse?.assets && pickerResponse.assets[0].uri;

  function saveData(nome, nascimento, foto) {
    if (nome === '' || nascimento === '' || foto === undefined) {
      Alert.alert('','Verifique os campos FOTO, NOME e DATA!');
    } else { 
      Api.post('/users', {nome, nascimento, foto})
        .then(response => {
          console.log(response.data);
          Alert.alert(
            "", "Cadastrado Com Sucesso!",
            [{ text: "OK", onPress: () => navigation.navigate('Home') }],
            { cancelable: false }
          );
        })
        .catch(err => console.log('api Erorr: ', err.response));
    }
  }

  return (
    <View style={{flex: 1, backgroundColor: '#ffffff'}}>
      <Text
        style={styles.labelTextTop}>
        Cadastrar Novo Usuário
      </Text>
      <ImagePickerAvatar uri={uri} onPress={() => setVisible(true)} />
      <ImagePickerModal
        isVisible={visible}
        onClose={() => setVisible(false)}
        onImageLibraryPress={onImageLibraryPress}
        onCameraPress={onCameraPress}
      />
      <View style={{paddingHorizontal: 25}}>
        <TextInput
          style={styles.input}
          placeholder="Nome Completo"
          onChangeText={text => setNome(text)}
          maxLength={100}></TextInput>        
        <MaskedTextInput
          mask="99-99-9999"
          onChangeText={text => setData( Moment(text, 'DD-MM-YYYY').format('YYYY-MM-DD') )}
          style={styles.input}
          keyboardType="number-pad"
          placeholder="DD-MM-AAAA"
        />
      </View>
      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 25}}>
        <TouchableOpacity onPress={() => saveData(nome, nascimento, uri)}>
          <Icon name={'check'} style={styles.iconStyle} />
          <Text style={styles.textBottom}>SALVAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
