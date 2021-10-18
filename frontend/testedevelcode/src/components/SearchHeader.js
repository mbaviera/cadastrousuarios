import React from 'react';
import {SearchBar} from 'react-native-elements';

const SearchHeader = ({onChangeSearch, valueSearch, placeholderSearch, keyboardTypeSearch}) => {
  return (
    <SearchBar
        placeholder={placeholderSearch}
        onChangeText={onChangeSearch}  
        value={valueSearch}  
        keyboardType={keyboardTypeSearch}
        containerStyle={{
          backgroundColor:"#ff6c00",
          borderBottomColor: '#ff6c00',
          borderTopColor: '#ff6c00',
          elevation:2
        }}
        inputContainerStyle={{
          backgroundColor: '#fff',
          borderRadius:15,
          height:45,
        }}
      />
  );
};

export default SearchHeader;