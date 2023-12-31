import React, { useState } from 'react';
import {
  Button,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
  Keyboard
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import IconBack from '../../assets/back.png';
import IconBlock from '../../assets/block.png';
import IconComment from '../../assets/comment.png';
import IconDownvoteActive from '../../assets/downvote_active.png';
import IconDownvoteInactive from '../../assets/downvote_inactive.png';
import IconShare from '../../assets/share.png';
import IconUpvoteActive from '../../assets/upvote_active.png';
import IconUpvoteInactive from '../../assets/upvote_inactive.png';
import { useDispatch, useSelector } from 'react-redux';
import { addComment, addDownvote, addUpvote } from '../redux/action/content';

function PostDetailScreen({ route }) {
  const navigation = useNavigation();
  const [commentText, setCommentText] = useState('')
  const dispatch = useDispatch();
  const postId = route?.params?.postId;
  const content = useSelector((state) => state.content);
  console.log('data', content);
  console.log("postId", postId);
  
  

  // Contoh penggunaan untuk menambahkan komentar ke content dengan ID tertentu
  const handleAddComment = () => {
    const contentId = postId;
    console.log(commentText)
    const newComment = {
      id: 10,
      user_name: 'John Doe',
      comment: commentText,
    };

    dispatch(addComment(contentId, newComment));
    // Menutup keyboard
    Keyboard.dismiss();
    // Mengatur nilai comment ke string kosong setelah komentar ditambahkan
    setCommentText('');
  };

  const handleUpvote = () => {
    dispatch(addUpvote(postId));
  };

  const handleDownvote = () => {
    dispatch(addDownvote(postId));
  };

  const handleCommentChange = (value) => {
    setCommentText(value);
  };


  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{flexGrow: 1}} style={{ marginBottom: 48}}>
        <View>
          <View
            style={{
              height: 64,
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Pressable onPress={() => navigation.goBack()}>
              <Image
                source={IconBack}
                height={18}
                width={18}
                style={{ marginLeft: 22 }}
              />
            </Pressable>
            <Image
              source={{
                uri: 'https://picsum.photos/200',
              }}
              width={48}
              height={48}
              style={{ borderRadius: 24, marginLeft: 24 }}
            />
            <View style={{ marginLeft: 16 }}>
              <Text
                style={{ fontWeight: '600', fontSize: 14, lineHeight: 16.94 }}>
                Usup Suparma
              </Text>
              <Text style={{ fontWeight: '400', fontSize: 12, lineHeight: 18 }}>
                Mar 27, 2023
              </Text>
            </View>
          </View>
          <View style={{ height: 0.5, backgroundColor: '#C4C4C4' }} />
          <View>
            <Text style={{ margin: 24 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              luctus in ipsum ac dictum. Integer et nunc ut tellus tinci,
              consectetur adipiscing elit. Nulla luctus in ipsum ac dictum.
              Integer et nunc ut tellus tinci, consectetur adipiscing elit.
              Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci
              Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci,
              consectetur adipiscing elit. Nulla luctus in ipsum ac dictum.
            </Text>
            <Image
              source={{
                uri: 'https://picsum.photos/200',
              }}
              height={200}
            />
          </View>
          <View
            style={{
              height: 52,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                flex: 1,
              }}>
              <Image
                source={IconShare}
                height={18}
                width={18}
                style={{ marginLeft: 22 }}
              />
              <Image
                source={IconComment}
                height={18}
                width={18}
                style={{ marginLeft: 24 }}
              />
              <Text
                style={{
                  width: 24,
                  marginHorizontal: 4,
                  textAlign: 'center',
                }}>
                {content.dataContent.map((item, index) => {
                  return(
                    item.id === postId && item.comment.length
                  )
                })}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={IconBlock}
                height={18}
                width={18}
                style={{ marginLeft: 22 }}
              />
              <Pressable onPress={handleDownvote}>
                <Image
                  source={IconDownvoteInactive}
                  height={18}
                  width={18}
                  style={{ marginLeft: 24 }}
                />
              </Pressable>
              <Text
                style={{
                  width: 24,
                  marginHorizontal: 11,
                  textAlign: 'center',
                }}>
                {content.dataContent.map((item, index) => {
                  return(
                    item.id === postId && item.votes
                  )
                })}
              </Text>
              <Pressable onPress={handleUpvote}>
                <Image
                  source={IconUpvoteInactive}
                  height={18}
                  width={18}
                  style={{ marginRight: 22 }}
                />
              </Pressable>
            </View>
          </View>
        </View>
        {content.dataContent.map((item, index) => {
          return(
            item.id === postId &&
            item.comment.map((item, index) => {
            return (
              <View key={index} style={{width: '100%'}}><View style={{ height: 4, backgroundColor: '#C4C4C4' }} /><View
                style={{
                  flexDirection: 'row',
                  minHeight: 72,
                  paddingVertical: 16,
                  paddingHorizontal: 24,
                }}>
                <Image
                  source={{
                    uri: 'https://picsum.photos/200',
                  }}
                  width={36}
                  height={36}
                  style={{ borderRadius: 24, marginRight: 16 }} />
                <View style={{ width: '90%' }}>
                  <Text
                    style={{
                      fontWeight: '600',
                      fontSize: 12,
                      lineHeight: 14.52,
                      color: '#828282',
                    }}>
                    {item.user_name}
                  </Text>
                  <Text style={{ fontWeight: '400', fontSize: 16, lineHeight: 19.36 }}>
                    {item.comment}
                  </Text>
                </View>
              </View><View style={{ height: 0.5, backgroundColor: '#C4C4C4' }} /></View>
            )
          })
          )
        })}
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          bottom: 20,
          height: 60,
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',
          paddingHorizontal: 24,
          zIndex: 10,
        }}>
        <View style={{ height: 0.5, backgroundColor: '#C4C4C4' }} />
        <TextInput placeholder="Enter Comment" style={{ flex: 1 }} value={commentText} onChangeText={handleCommentChange} />
        <Button title="Comment" onPress={handleAddComment} />
      </View>
    </SafeAreaView>
  );
}

export default PostDetailScreen;
