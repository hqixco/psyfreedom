import { Ionicons } from '@expo/vector-icons';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/theme';

const likeIcon = require('../../../assets/humor-like-icon.svg');
const commentIcon = require('../../../assets/humor-comment-icon.svg');
const viewsIcon = require('../../../assets/humor-views-icon.svg');

type HumorPostActionsProps = {
  likes: number;
  commentsCount: number;
  views: number;
  isLiked: boolean;
  onToggleLike: () => void;
};

export function HumorPostActions({
  likes,
  commentsCount,
  views,
  isLiked,
  onToggleLike,
}: HumorPostActionsProps) {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Pressable style={styles.actionRow} onPress={onToggleLike}>
          <Image source={likeIcon} style={styles.likeIcon} resizeMode="contain" />
          <Text style={styles.actionText}>Нравится</Text>
        </Pressable>
        <View style={[styles.actionRow, styles.commentsRow]}>
          <Image source={commentIcon} style={styles.commentIcon} resizeMode="contain" />
          <Text style={styles.actionText}>{commentsCount}</Text>
        </View>
      </View>
      <View style={styles.actionRow}>
        <Image source={viewsIcon} style={styles.viewsIcon} resizeMode="contain" />
        <Text style={styles.actionText}>{views}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likeIcon: {
    width: 17,
    height: 16,
  },
  commentIcon: {
    width: 12,
    height: 12,
  },
  viewsIcon: {
    width: 16,
    height: 16,
  },
  commentsRow: {
    marginLeft: 20,
  },
  actionText: {
    marginLeft: 6,
    fontSize: 12,
    color: colors.primary,
  },
});
