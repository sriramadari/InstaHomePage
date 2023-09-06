import React,{useState} from 'react';
import { View, Text, Image, StyleSheet,TouchableOpacity,TextInput,FlatList} from 'react-native';
import Dots from "react-native-vector-icons/MaterialCommunityIcons"
import Icon from 'react-native-vector-icons/AntDesign';
import Mark from 'react-native-vector-icons/FontAwesome';
import SendIcon from 'react-native-vector-icons/Feather';

const Post = ({ post }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved,setSaved] = useState(false);
  const [likes,setlikes]=useState(post.likes);
  const [comments, setComments] = useState(post.comments);
  const [newComment, setNewComment] = useState('');
  const [showAllComments, setShowAllComments] = useState(false);
  const handleSave=()=>{
    setSaved(!isSaved);
  } 
  const handleLikeToggle = () => {
    if(isLiked){
      setIsLiked(!isLiked);
      setlikes(likes-1);
    }else{
      setIsLiked(!isLiked);
      setlikes(likes+1);
    }
  };
  const addComment = (newComment) => {
    setComments([...comments, newComment]);
  };
  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      addComment(newComment);
      setNewComment('');
    }
  };
  const handleDoubleTap = () => {
    const now = new Date().getTime();
    const DOUBLE_PRESS_DELAY = 300; 
    if (lastPress && now - lastPress < DOUBLE_PRESS_DELAY) {
      if(isLiked){
        setIsLiked(!isLiked);
        setlikes(likes-1);
      }else{
        setIsLiked(!isLiked);
        setlikes(likes+1);
      }
    } else {
      lastPress = now;
      console.log(now);

    }
  };

  let lastPress = 0;

  return (
    <View style={styles.container}>
  <View style={styles.userInfo}>
  <View style={styles.userInfoText}>
    <Image source={{ uri: post.userImage }} style={styles.userImage} />
    <Text style={styles.name}>{post.name}</Text>
    {post.isVerifiedUser && (
      <Image
        source={require('../../assets/verified.png')}
        style={styles.verifiedIcon}
      />
    )}
  </View>
  <View style={styles.dotsContainer}>
    <Dots style={styles.dotsIcon} name="dots-vertical" />
  </View>
</View>

<TouchableOpacity onPress={handleDoubleTap}>
        <Image source={{ uri: post.postImage }} style={styles.postImage} />
      </TouchableOpacity>
      <View style={styles.iconsContainer}>
  <View style={styles.iconsLeft}>
  <TouchableOpacity onPress={handleLikeToggle}>
        <Icon
          name={isLiked ? 'heart' : 'hearto'}
          style={[styles.icon, isLiked && styles.likedIcon]}
        />
      </TouchableOpacity>
    <Image
      source={require('../../assets/chat.png')}
      style={{ height: 22, width: 22, resizeMode: "contain", marginRight: 9 }}
    />
    <SendIcon name="send" style={styles.icon} />
  </View>
  <TouchableOpacity onPress={handleSave}>
  <Mark name={isSaved ?"bookmark":"bookmark-o"} style={styles.icon} />
  </TouchableOpacity>
  
</View>
      <View style={styles.likesAndComments}>
        <Text style={styles.likes}>{likes} likes</Text>
        <View style={{flexDirection:'row'}}>
        <Text style={styles.name}>{post.name}</Text>
        <Text style={styles.caption}>{post.caption}</Text>
        </View>
        <View >
        {comments.length > 0 && (
          <TouchableOpacity onPress={() => setShowAllComments(!showAllComments)}>
            <Text style={styles.comments}>
              View all {comments.length} comments
            </Text>
          </TouchableOpacity>
        )}
        {showAllComments && (
          <FlatList
            data={showAllComments ? comments : comments.slice(0, 1)}
            renderItem={({ item }) => (
              <Text style={styles.comments} >{item}</Text>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        )}  
      </View>
      <View style={styles.commentsSection}>
      <Image source={{ uri: post.userImage }} style={styles.userImageAtComment} />
      <TextInput
      style={styles.commentInput}
        placeholder="Add a comment..."
        value={newComment}
        onChangeText={(text) => setNewComment(text)}
        onSubmitEditing={handleAddComment}
      />
      </View>
      <Text style={styles.timestamp}>{post.timestamp} 
      </Text>
      
      </View>
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    elevation: 3,
  },
  userInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 13
  },
  userInfoText: {
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color:'black'
  },
  verifiedIcon: {
    width: 19,
    height: 19,
    marginLeft: 5,
  },
  postImage: {
    width: '100%',
    height: 300,
  },
  dotsContainer: {
    flex: 1,
    alignItems: 'flex-end', 
  },
  dotsIcon: {
    fontSize: 30,
  },
  iconsContainer: {
    marginLeft: 10,
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center',
    marginTop:12
  },
  userImageAtComment:{
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
    marginTop:10
  },
  likedIcon: {
    color: 'red', 
  },
  postImage: {
    width: '100%',
    height: 300,
  },
  iconsLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    color:"black",
    fontSize: 24,
    marginRight:18,
    marginHorizontal: 10, 
  },
  likesAndComments: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginLeft:10,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  likes: {
    color:"black",
    fontWeight: '700',
    fontSize:17
  },
  comments: {
    color: 'black',
    marginTop:4,
    marginBottom:2
  },
  commentsSection:{
    flexDirection:"row"
  },
  timestamp: {
    color: 'gray',
    fontSize:13,
    paddingHorizontal:5,
    paddingBottom: 5,
    marginBottom:3
  },
  caption: {
    marginLeft:8,
    color: 'black',
  },
});

export default Post;
