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
            likes={post.likes}
            commentsCount={post.commentsCount}
            views={post.views}
            isLiked={isLiked}
            onToggleLike={() => setIsLiked((value) => !value)}
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
    marginTop: 12,
  },
  authorRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    backgroundColor: colors.cardLight,
  },
  author: {
    fontSize: 16,
    ...typography.Inter[700],
    color: colors.primaryDark,
  },
  createdAt: {
    marginTop: 2,
    fontSize: 14,
    color: colors.muted,
  },
  text: {
    marginTop: 18,
    fontSize: 16,
    lineHeight: 22,
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
    fontSize: 20,
    ...typography.Inter[700],
    color: colors.primary,
  },
});

