import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../constants/theme';
import { HumorPost } from '../../data/humorData';
import { HumorPostActions } from './HumorPostActions';

type HumorPostCardProps = {
  post: HumorPost;
  isLiked: boolean;
  onToggleLike: () => void;
  onPress: () => void;
};

export function HumorPostCard({
  post,
  isLiked,
  onToggleLike,
  onPress,
}: HumorPostCardProps) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <View style={styles.authorRow}>
        <Image source={post.author.avatar} style={styles.avatar} />
        <View>
          <Text style={styles.authorName}>{post.author.name}</Text>
          <Text style={styles.createdAt}>{post.createdAt}</Text>
        </View>
      </View>

      <Text style={styles.text} numberOfLines={8}>
        {post.text}
      </Text>

      <Pressable style={styles.readMoreWrap} onPress={onPress}>
        <Text style={styles.readMore}>Читать ещё</Text>
      </Pressable>

      {post.image ? <Image source={post.image} style={styles.image} /> : null}

      <HumorPostActions
        likes={post.likes}
        commentsCount={post.commentsCount}
        views={post.views}
        isLiked={isLiked}
        onToggleLike={onToggleLike}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
    marginBottom: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#F0F0F0',
    backgroundColor: colors.white,
    padding: 16,
  },
  authorRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 19,
    marginRight: 10,
    backgroundColor: colors.cardLight,
  },
  authorName: {
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
    marginTop: 14,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 18,
    color: colors.text,
  },
  readMoreWrap: {
    marginTop: 12,
    alignSelf: 'flex-start',
  },
  readMore: {
    fontSize: 14,
    ...typography.Inter[400],
    color: colors.primary,
  },
  image: {
    marginTop: 24,
    width: '100%',
    height: 320,
    borderRadius: 10,
    resizeMode: 'cover',
    backgroundColor: colors.cardLight,
  },
});

