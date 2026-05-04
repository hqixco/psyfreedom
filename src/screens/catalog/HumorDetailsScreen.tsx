import { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { HumorCommentCard } from '../../components/humor/HumorCommentCard';
import { HumorDetailsHeader } from '../../components/humor/HumorDetailsHeader';
import { HumorPostActions } from '../../components/humor/HumorPostActions';
import { colors, typography } from '../../constants/theme';
import { HumorPost } from '../../data/humorData';

type HumorDetailsScreenProps = {
  post: HumorPost;
  onBack: () => void;
};

export function HumorDetailsScreen({ post, onBack }: HumorDetailsScreenProps) {
  const insets = useSafeAreaInsets();
  const [isLiked, setIsLiked] = useState(Boolean(post.isLiked));
  const [likes, setLikes] = useState(post.likes + (post.isLiked ? 1 : 0));

  const paragraphs = post.text.split('\n\n');

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.content, { paddingBottom: 90 + insets.bottom }]}
      >
        <HumorDetailsHeader onBack={onBack} />

        <View style={styles.postWrap}>
          <View style={styles.authorRow}>
            <Image source={post.author.avatar} style={styles.avatar} />
            <View>
              <Text style={styles.author}>{post.author.name}</Text>
              <Text style={styles.createdAt}>{post.createdAt}</Text>
            </View>
          </View>

          {paragraphs.map((paragraph, index) => (
            <Text key={index} style={styles.text}>
              {paragraph}
            </Text>
          ))}

          {post.image ? <Image source={post.image} style={styles.image} /> : null}

          <HumorPostActions
            likes={likes}
            commentsCount={post.commentsCount}
            views={post.views}
            isLiked={isLiked}
            onToggleLike={() => {
              setIsLiked((value) => {
                const next = !value;
                setLikes((currentLikes) => Math.max(0, currentLikes + (next ? 1 : -1)));
                return next;
              });
            }}
          />
        </View>

        <Text style={styles.commentsTitle}>{`${post.comments.length} комментария`}</Text>
        {post.comments.map((comment) => (
          <HumorCommentCard key={comment.id} comment={comment} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    paddingTop: 0,
  },
  postWrap: {
    marginHorizontal: 16,
    marginTop: 7,
  },
  authorRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 20,
    marginRight: 10,
    backgroundColor: colors.cardLight,
  },
  author: {
    fontSize: 14,
    ...typography.Inter[600],
    color: colors.primaryDark,
  },
  createdAt: {
    marginTop: 2,
    fontSize: 12,
    color: colors.muted,
  },
  text: {
    marginTop: 18,
    fontSize: 14,
    lineHeight: 18,
    color: colors.text,
  },
  image: {
    marginTop: 22,
    width: '100%',
    height: 330,
    borderRadius: 10,
    resizeMode: 'cover',
    backgroundColor: colors.cardLight,
  },
  commentsTitle: {
    marginHorizontal: 16,
    marginTop: 24,
    fontSize: 14,
    ...typography.Inter[600],
    color: colors.primary,
  },
});
