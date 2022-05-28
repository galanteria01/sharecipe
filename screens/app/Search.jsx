import React from 'react'
import { View, StyleSheet } from 'react-native'
import { SearchBar } from 'react-native-elements';

const Search = () => {

  const [search, setSearch] = React.useState("");

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

export default Search

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