import React, {useEffect, useState} from 'react';
import {Text, View, Image, Alert} from 'react-native';
import moment from 'moment';
import {styles} from './styles';
import ButtonChevron from '../../components/ButtonChevron';
import Api from '../../services/Api';
import {Buffer} from 'buffer';
import Moment from 'moment';

export default function Details({navigation, route}) {
  const {idUser} = route.params;
  const {nomeUser} = route.params;
  const {dataUser} = route.params;
  const {fotoUser} = route.params;
  const [imageNew, setImage] = useState('');

  useEffect(() => {
    const image1 = Buffer.from(fotoUser).toString('base64');
    const image2 = Buffer.from(image1, 'base64').toString('ascii');
    console.log('emfilesys: ' + image2);
    setImage(image2);
  }, []);

  function deletar(id) {
    Alert.alert(
      '',
      'Deseja Excluir o Usuário?',
      [
        {
          text: 'Sim',
          onPress: () => deleteOk(id),
        },
        {
          text: 'Não',
          onPress: () => {},
          style: 'cancel',
        },
      ],
      {cancelable: true},
    );
  }

  function deleteOk(id) {
    Api.delete('/users/' + id)
      .then(response => {
        if (response.status === 200) {
          //console.log(response.data);
          Alert.alert(
            '',
            'Excluído Com Sucesso!',
            [{text: 'OK', onPress: () => navigation.navigate('Home')}],
            {cancelable: false},
          );
        }
      })
      .catch(err => console.log('api Erorr: ', err.response));
  }

  return (
    <View style={{flex: 1}}>
      <View style={styles.header}></View>
      <Image style={styles.avatar} source={{uri: imageNew}} />
      <View style={{marginTop: 55, alignItems: 'center'}}>
        <Text style={{fontSize: 28, fontWeight: 'bold', letterSpacing: 2}}>
          {nomeUser}
        </Text>
        <Text style={{fontSize: 20, letterSpacing: 2}}> Código: {idUser} </Text>
        <Text style={{fontSize: 20, letterSpacing: 2}}>
          Nascimento: {Moment(dataUser).format('DD/MM/YYYY')}
        </Text>
      </View>
      <View style={styles.containerView}>
        <ButtonChevron
          onPressButton={() =>
            navigation.navigate('Edit', {
              idUser: idUser,
              nomeUser: nomeUser,
              dataUser: dataUser,
              fotoUser: imageNew,
            })
          }
          nameIcon={'edit'}
          textLabel={'Editar'}
        />
        <ButtonChevron
          onPressButton={() => deletar(idUser)}
          nameIcon={'trash'}
          textLabel={'Deletar'}
        />
      </View>
    </View>
  );
}
