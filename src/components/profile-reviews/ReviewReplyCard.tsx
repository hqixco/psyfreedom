import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/theme';

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
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '700',
    color: colors.primaryDark,
  },
  date: {
    marginTop: 4,
    fontSize: 13,
    color: colors.muted,
  },
  text: {
    marginTop: 10,
    fontSize: 15,
    lineHeight: 21,
    color: colors.text,
  },
});
