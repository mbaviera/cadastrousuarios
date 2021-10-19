import React, {useEffect, useState} from 'react';
import {FlatList, Image, StatusBar, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import SearchHeader from '../../components/SearchHeader';
import Api from '../../services/Api';
import Moment from 'moment';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {styles} from './styles';
import {useIsFocused} from '@react-navigation/native';
import {Buffer} from 'buffer';

export default function Home({navigation}) {
  const [data, setUser] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    Api.get('/users')
      .then(response => {
        if (response.status === 200) {
          setUser(response.data);
          setFilteredData(response.data);
          //console.log("foroURL: " + JSON.stringify(data))
        }
      })
      .catch(err => {
        console.error('ocorreu um erro: ' + err);
      });
  }, [isFocused]);

  function filterSearch(text) {
    setFilteredData(data.filter(i => i.nome.includes(text)));
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#ff6c00" />
      <SearchHeader
        onChangeSearch={text => filterSearch(text)}
        valueSearch={text => filterSearch(text)}
        placeholderSearch={'Filtrar Por Nome'}
        keyboardTypeSearch={'default'}
      />

      {filteredData.length > 0 && (
        <View style={{flex: 1}}>
          <FlatList
            data={filteredData}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => (
              <TouchableOpacity
                key={index}
                onPress={() =>
                  navigation.navigate('Details', {
                    idUser: item.id,
                    nomeUser: item.nome,
                    dataUser: item.nascimento,
                    fotoUser: item.foto,
                  })
                }>
                <View style={styles.row}>
                  <Image
                    source={{uri: Buffer.from(item.foto).toString('ascii')}}
                    style={styles.pic}
                  />
                  <View>
                    <View style={styles.nameContainer}>
                      <Text
                        style={styles.nameTxt}
                        numberOfLines={1}
                        ellipsizeMode="tail">
                        {item.nome}
                      </Text>
                    </View>
                    <View style={styles.msgContainer}>
                      <Text style={styles.msgTxt}>
                        {Moment(item.nascimento).format('DD/MM/YYYY')}
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      )}

      {filteredData.length === 0 && (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 50,
          }}>
          <Image
            source={require('../../../assets/notfound.png')}
            style={{
              width: 250,
              height: 250,
            }}
          />
        </View>
      )}

      <View style={styles.viewPrimaria}>
        <View style={styles.viewSecundaria}>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Icon name={'plus'} style={styles.iconStyle} />
            <Text style={styles.textBottom}>Novo Usuário</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
