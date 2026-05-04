import { StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../constants/theme';

export function ReviewReplyCard({
  author,
  date,
  text,
}: {
  author: string;
  date: string;
  text: string;
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.author}>{author}</Text>
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.text}>{text}</Text>
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
  author: {
    fontSize: 14,
    lineHeight: 18,
    ...typography.Inter[600],
    color: colors.primaryDark,
  },
  date: {
    marginTop: 4,
    fontSize: 12,
    color: colors.muted,
  },
  text: {
    marginTop: 10,
    fontSize: 14,
    lineHeight: 21,
    color: colors.text,
  },
});
