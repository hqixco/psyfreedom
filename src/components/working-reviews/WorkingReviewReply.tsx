import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../constants/theme';
import { WorkingReviewReply as WorkingReply } from '../../data/workingReviewsData';

export function WorkingReviewReply({
  reply,
  onOpenActions,
}: {
  reply: WorkingReply;
  onOpenActions: () => void;
}) {
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.author}>Ответ специалиста</Text>
        <Pressable style={styles.menuButton} onPress={onOpenActions}>
          <Ionicons name="ellipsis-horizontal" size={12} color={colors.primaryDark} />
        </Pressable>
      </View>
      <Text style={styles.date}>{reply.date}</Text>
      <Text style={styles.text}>{reply.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 18,
    padding: 14,
    borderRadius: 12,
    backgroundColor: colors.cardLight,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  author: {
    fontSize: 14,
    lineHeight: 18,
    ...typography.Inter[600],
    color: colors.primaryDark,
  },
  date: {
    marginTop: 4,
    fontSize: 14,
    color: colors.muted,
  },
  menuButton: {
    width: 32,
    height: 32,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  text: {
    marginTop: 8,
    fontSize: 14,
    lineHeight: 21,
    color: colors.text,
  },
});
