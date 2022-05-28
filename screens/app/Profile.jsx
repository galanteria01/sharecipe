import { getAuth, signOut } from 'firebase/auth'
import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { Avatar, Button, Icon, Image, ListItem } from 'react-native-elements'
import AuthContext from '../../context/AuthContext'

const options = [
  {
    title: 'Edit Profile',
    icon: 'av-timer',
    route: 'EditProfile',
  },
  {
    title: 'Trips',
    icon: 'flight-takeoff',
    route: 'Trips',
  },
  {
    title: 'Passwords',
    icon: 'fingerprint',
    route: 'Passwords',
  },
  {
    title: 'About',
    icon: 'lightbulb-outline',
    route: 'About',
  },
  {
    title: 'Updates',
    icon: 'track-changes',
    route: 'Updates',
  },
];

const Profile = () => {

  const auth = getAuth()
  const user = auth.currentUser
  const { signout } = React.useContext(AuthContext)
  const onSignOut = () => {
    signOut(auth).then(() => {
      signout()
    })
  }

  return (
    <View style={styles.root}>
      <ListOfOptions user={user} />
      <Button title="Sign Out" onPress={onSignOut} />
    </View>
  )
}

const ListOfOptions = ({ user }) => {
  const renderRow = ({ item }) => {
    return (
      <ListItem
        // onPress={log}
        bottomDivider
      >
        <Icon name={item.icon} />
        <ListItem.Content>
          <ListItem.Title>{item.title}</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    );
  };

  return (
    <>
      <FlatList
        ListHeaderComponent={
          <>
            <View style={styles.list}>
              <ListItem>
                <Avatar
                  rounded
                  source={{ uri: 'https://randomuser.me/api/portraits/men/57.jpg' }}
                  size={64}
                />
                <ListItem.Content>
                  <ListItem.Title>
                    Shoury Sharma
                  </ListItem.Title>
                  <View style={styles.subtitleView}>
                    <Text style={styles.ratingText}>132 Recipes</Text>
                  </View>
                </ListItem.Content>
                <Icon
                  name='chevron-right'
                  type='font-awesome'
                  color='#ccc'
                />
              </ListItem>
            </View>
          </>
        }
        data={options}
        keyExtractor={(a, index) => index.toString()}
        renderItem={renderRow}
      />
    </>
  );
};

export default Profile

const styles = StyleSheet.create({

})