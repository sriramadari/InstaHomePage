import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Header from '../components/Header';
import StoriesBar from '../components/Storiesbar';
import Post from '../components/Post'; 
// import { postData } from '../Data/Posts'; 
import axios from 'axios';

const Home = () => {
  const [postData,setPostsData]=useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/posts');
        setPostsData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  const renderPost = ({ item }) => (
    <Post post={item} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={[{ key: 'header' }, { key: 'stories' }, ...postData]}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => {
          if (item.key === 'header') {
            return <Header />;
          } else if (item.key === 'stories') {
            return <StoriesBar />;
          } else {
            return renderPost({ item });
          }
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
