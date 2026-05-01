import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/theme';
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
        <Text style={styles.date}>{reply.date}</Text>
        <Pressable style={styles.menuButton} onPress={onOpenActions}>
          <Ionicons name="ellipsis-horizontal" size={22} color={colors.primaryDark} />
        </Pressable>
      </View>
      <Text style={styles.text}>{reply.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  date: {
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
    fontSize: 15,
    lineHeight: 22,
    color: colors.text,
  },
});
