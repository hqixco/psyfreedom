import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/theme';

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
          <Ionicons name={isLiked ? 'heart' : 'heart-outline'} size={16} color={colors.primary} />
          <Text style={styles.actionText}>Нравится</Text>
          <Text style={styles.countText}>{likes}</Text>
        </Pressable>
        <View style={[styles.actionRow, styles.commentsRow]}>
          <Ionicons name="chatbubble-outline" size={14} color={colors.primary} />
          <Text style={styles.countText}>{commentsCount}</Text>
        </View>
      </View>
      <View style={styles.actionRow}>
        <Ionicons name="eye-outline" size={15} color={colors.primary} />
        <Text style={styles.countText}>{views}</Text>
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
  commentsRow: {
    marginLeft: 20,
  },
  actionText: {
    marginLeft: 6,
    fontSize: 12,
    color: colors.primary,
  },
  countText: {
    marginLeft: 6,
    fontSize: 12,
    color: colors.primary,
  },
});
