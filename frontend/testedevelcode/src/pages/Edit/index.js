import React, {useState, useCallback} from 'react';
import {Text, View, TextInput, Alert, ScrollView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Api from '../../services/Api';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {styles} from './styles';
import {ImagePickerModal} from '../../components/image-picker-modal';
import {ImagePickerAvatar} from '../../components/image-picker-avatar';
import * as ImagePicker from 'react-native-image-picker';
import {MaskedTextInput} from 'react-native-mask-text';
import Moment from 'moment';

export default function Edit({navigation, route}) {
  const {idUser} = route.params;
  const {nomeUser} = route.params;
  const {dataUser} = route.params;
  const {fotoUser} = route.params;
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

  const uri = pickerResponse?.assets && pickerResponse.assets[0].uri;

  function edit(nome, nascimento, foto) {
    if (nome === '' || nascimento === '') {
      Alert.alert('','Preencha Os Campos!');
    } else {      

      Api.put('/users/' + idUser, {nome, nascimento, foto})
        .then(response => {
          if (response.status === 200) {
            //console.log(response.data);
            Alert.alert(
              '',
              'Atualizado Com Sucesso!',
              [{text: 'OK', onPress: () => navigation.navigate('Home')}],
              {cancelable: false},
            );
          }          
        })
        .catch(err => console.log('api Erorr: ', err.response));
    }    
  }

  return (
    <ScrollView style={{flex: 1, backgroundColor: '#ffffff'}}>
      <Text style={styles.labelTextTop}>Editar Usuário</Text>

      <ImagePickerAvatar uri={uri} onPress={() => setVisible(true)} />
      <ImagePickerModal
        isVisible={visible}
        onClose={() => setVisible(false)}
        onImageLibraryPress={onImageLibraryPress}
      />

      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text style={styles.textDataUser}>Nome: {nomeUser} </Text>
        <Text style={styles.textDataUser}>
          Nascimento: {Moment(dataUser, 'YYYY-MM-DD').format('DD-MM-YYYY')}{' '}
        </Text>
      </View>

      <View style={{paddingHorizontal: 25, marginTop: 50}}>
        <Text style={{fontSize: 20, textAlign: 'center'}}>
          {' '}
          Insira os Novos Dados{' '}
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Nome Completo"
          onChangeText={text => setNome(text)}
          maxLength={100}></TextInput>
        <MaskedTextInput
          mask="99-99-9999"
          onChangeText={text =>
            setData(Moment(text, 'DD-MM-YYYY').format('YYYY-MM-DD'))
          }
          style={styles.input}
          keyboardType="number-pad"
          placeholder="DD-MM-AAAA"
        />
      </View>
      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 25}}>
        <TouchableOpacity onPress={() => edit(nome, nascimento, uri)}>
          <Icon name={'check'} style={styles.iconStyle} />
          <Text style={styles.textBottom}>SALVAR</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
