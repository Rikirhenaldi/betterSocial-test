import React from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import IconBlock from '../../assets/block.png';
import IconComment from '../../assets/comment.png';
import IconDownvoteActive from '../../assets/downvote_active.png';
import IconDownvoteInactive from '../../assets/downvote_inactive.png';
import IconShare from '../../assets/share.png';
import IconUpvoteActive from '../../assets/upvote_active.png';
import IconUpvoteInactive from '../../assets/upvote_inactive.png';
import { TruncatedText } from '../components/TruncatedText';
import { useDispatch, useSelector } from 'react-redux';
import { addDownvote, addUpvote } from '../redux/action/content';

function FeedScreen() {
  const navigation = useNavigation();
  const content = useSelector((state) => state.content);

  const dispatch = useDispatch();

  const handleUpvote = (id) => {
    dispatch(addUpvote(id));
  };

  const handleDownvote = (id) => {
    dispatch(addDownvote(id));
  };
  return (
    <SafeAreaView>
      <ScrollView>
        {content?.dataContent.map((item, index) => {
          return (
            <Pressable onPress={() => navigation.navigate('post-detail', { postId: item.id })} key={index}>
              <View style={{ maxHeight: 547 }}>
                <View
                  style={{
                    height: 64,
                    alignItems: 'center',
                    flexDirection: 'row',
                  }}>
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
                     {item.user_name}
                    </Text>
                    <Text style={{ fontWeight: '400', fontSize: 12, lineHeight: 18 }}>
                      Mar 27, 2023
                    </Text>
                  </View>
                </View>
                <View style={{ height: 0.5, backgroundColor: '#C4C4C4' }} />
                <View>
                  <TruncatedText key={item.id} text={item.caption} maxLines={3} posted_picture={item.posted_pict} />
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
                      {item.comment?.length}
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
                    <Pressable onPress={() => handleDownvote(item.id)}>
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
                      {item.votes}
                    </Text>
                    <Pressable onPress={() => handleUpvote(item.id)}>
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
              <View style={{ height: 4, backgroundColor: '#C4C4C4' }} />
            </Pressable>
          )
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

export default FeedScreen;
