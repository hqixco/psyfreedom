import { Image, StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../constants/theme';
import { HumorComment } from '../../data/humorData';

type HumorCommentCardProps = {
  comment: HumorComment;
};

export function HumorCommentCard({ comment }: HumorCommentCardProps) {
  return (
    <View style={styles.container}>
      <Image source={comment.avatar} style={styles.avatar} />
      <View style={styles.content}>
        <Text style={styles.author}>{comment.author}</Text>
        <Text style={styles.date}>{comment.date}</Text>
        <Text style={styles.text}>{comment.text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginTop: 18,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    marginRight: 12,
    backgroundColor: colors.cardLight,
  },
  content: {
    flex: 1,
  },
  author: {
    fontSize: 16,
    ...typography.Inter[700],
    color: colors.primaryDark,
  },
  date: {
    marginTop: 2,
    fontSize: 13,
    color: colors.muted,
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    lineHeight: 22,
    color: colors.text,
  },
});

