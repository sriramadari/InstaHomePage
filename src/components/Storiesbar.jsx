import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import { myStory, othersStories } from '../Data/Stories';
// import LinearGradient from 'react-native-linear-gradient';

const Storiesbar = () => {
  const renderItem = ({ item }) => (
    <View style={styles.statusContainer}>
    {item.isMyStory ? (
        <View style={styles.myStoryContainer}>
          <Image source={{ uri: item.userImage }} style={styles.myStoryImage} />
          <View style={styles.plusSymbol}>
            <Text style={styles.plusText}>+</Text>
          </View>
        </View>): <View
        style={[
          styles.statusRing,
          { borderColor: item.isCloseFriend ? 'green' : '#ED4956' },
        ]}
      >
        <Image source={{ uri: item.userImage }} style={styles.userImage} />
      </View>}
      <Text style={styles.userName}>{item.userName}</Text>
    </View>
  );

  return (
    <FlatList
      data={[myStory, ...othersStories]}
      renderItem={renderItem}
      keyExtractor={(item) => item.userId.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 8,
    marginLeft: 16,
  },
  statusContainer: {
    alignItems: 'center',
    marginRight: 16,
    marginLeft: 10,
  },
  statusRing: {
    width: 90,
    height: 90,
    borderRadius: 50,
    borderWidth: 3, // Add a border
    alignItems: 'center',
    justifyContent: 'center',
  },
  userImage: {
    width: 75,
    height: 75, 
    borderRadius: 37.5, 
  },
  userName: {
    marginTop: 4,
    fontSize: 12,
    color:"black",
    fontWeight: "500",
  },
  // myStoryContainer: {
  //   position: 'relative',
  // },
  myStoryImage: {
    width: 85,
    height: 85,
    borderRadius: 44,
    marginBottom:4
  },
  plusSymbol: {
    position: 'absolute',
    bottom: 5,
    right:5,
    backgroundColor: 'blue',
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default Storiesbar;
