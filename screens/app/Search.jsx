import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { SearchBar } from 'react-native-elements';

export default function Search() {

  const [search, setSearch] = useState("");

  const updateSearch = (search) => {
    setSearch(search);
  };

  return (
    <View style={styles.root}>
      <SearchBar
        placeholder="Search Recipes..."
        onChangeText={updateSearch}
        value={search}
        lightTheme={true}
        containerStyle={styles.searchBar}
        inputContainerStyle={styles.searchBarInput}
      />
      <View style={styles.result}>
        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignContent: 'center'
  },
  result: {
    flex: 1
  },
  searchBar: {
    backgroundColor: '#fff',
    padding: 0,
    margin: 8
  },
  searchBarInput: {
    backgroundColor: '#fafafa',
  }
})