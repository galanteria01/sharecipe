import { getAuth, signOut } from 'firebase/auth'
import React, { useContext } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { Avatar, Button, Icon, Image, ListItem } from 'react-native-elements'
import AuthContext from '../../context/AuthContext'

const options = [
  {
    title: 'Appointments',
    icon: 'av-timer',
  },
  {
    title: 'Trips',
    icon: 'flight-takeoff',
  },
  {
    title: 'Passwords',
    icon: 'fingerprint',
  },
  {
    title: 'About',
    icon: 'lightbulb-outline',
  },
  {
    title: 'Updates',
    icon: 'track-changes',
  },
];

export default function Profile() {

  const auth = getAuth()
  const { signout } = useContext(AuthContext)
  const onSignOut = () => {
    signOut(auth).then(() => {
      signout()
    })
  }

  return (
    <View style={styles.root}>
      <ListOfOptions />
      <Button title="Sign Out" onPress={onSignOut} />
    </View>
  )
}

const ListOfOptions = () => {
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
                <Avatar source={'https://randomuser.me/api/portraits/women/57.jpg'} />
                <ListItem.Content>
                  <ListItem.Title>
                    Limited supply! Its like digital gold!
                  </ListItem.Title>
                  <View style={styles.subtitleView}>
                    <Image
                      source={"https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553__340.jpg"}
                      style={styles.ratingImage}
                    />
                    <Text style={styles.ratingText}>5 months ago</Text>
                  </View>
                </ListItem.Content>
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

const styles = StyleSheet.create({

})