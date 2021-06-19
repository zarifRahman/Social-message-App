import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  InteractionWrapper,
  UserInfo,
  PostTime, Card, UserImg,
  UserName, UserInfoText, PostText,
  Interaction, Divider, InteractionText, PostImg
} from '../styles/FeedStyles';

const PostCard = ({ item }) => {
  likeIcon = item.liked ? 'heart' : 'heart-outline';
  likeIconColor = item.liked ? '"#2e64e5"' : '#333';
  if (item.likes === 1) {
    commentText = '1 Like'
  } else if (item.likes > 1) {
    commentText = item.likes + ' Likes'
  } else {
    commentText = " Like"
  }

  if (item.comments === 1) {
    likeText = '1 comment'
  } else if (item.comments > 1) {
    likeText = item.comments + ' comments'
  } else {
    likeText = " comment"
  }
  return (
    <Card>
      <UserInfo>
        <UserImg source={item.userImg} />
        <UserInfoText>
          <UserName>{item.userName}</UserName>
          <PostTime>{item.postTime}</PostTime>
        </UserInfoText>
      </UserInfo>
      <PostText>{item.post}</PostText>
      {
        item.postImg === 'none' ? <Divider />
          : <PostImg source={item.postImg} />
      }
      {/* <PostImg source={require('../assets/users/user-5.jpg')} /> */}
      <Divider />
      <InteractionWrapper>
        <Interaction active={item.liked}>
          <Ionicons name={likeIcon} size={25} color={likeIconColor} />
          <InteractionText active={item.liked}>{likeText}</InteractionText>
        </Interaction>
        <Interaction>
          <Ionicons name="md-chatbubble-outline" size={25} />
          <InteractionText>{commentText}</InteractionText>
        </Interaction>
      </InteractionWrapper>
    </Card>
  );
};

export default PostCard;