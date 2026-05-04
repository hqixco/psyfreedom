import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../constants/theme';
import { WrittenReview } from '../../data/myReviewsData';
import { ReviewReplyCard } from './ReviewReplyCard';

export function WrittenReviewCard({
  review,
  onOpenActions,
}: {
  review: WrittenReview;
  onOpenActions: (review: WrittenReview) => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const shouldClamp = review.text.length > 180;

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <View style={styles.avatarColumn}>
          {review.avatar ? <Image source={review.avatar} style={styles.avatar} /> : null}
        </View>
        <View style={styles.contentColumn}>
          <Text style={styles.title}>{review.targetTitle}</Text>
          <View style={styles.metaRow}>
            <Ionicons name="star" size={16} color="#FFC93C" />
            <Text style={styles.rating}>{review.rating.toFixed(1)}</Text>
            <Text style={styles.date}>{review.date}</Text>
          </View>
        </View>
        <Pressable style={styles.menuButton} onPress={() => onOpenActions(review)}>
          <Ionicons name="ellipsis-horizontal" size={12} color={colors.primaryDark} />
        </Pressable>
      </View>

      <Text style={styles.text} numberOfLines={!expanded && shouldClamp ? 5 : undefined}>
        {review.text}
      </Text>

      {shouldClamp ? (
        <Pressable onPress={() => setExpanded((prev) => !prev)}>
          <Text style={styles.moreLink}>{expanded ? 'Свернуть' : 'Читать еще'}</Text>
        </Pressable>
      ) : null}

      {review.reply ? (
        <ReviewReplyCard author={review.reply.author} date={review.reply.date} text={review.reply.text} />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginBottom: 10,
    padding: 18,
    borderWidth: 1,
    borderColor: '#EEEFEF',
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  avatarColumn: {
    marginRight: 10,
  },
  contentColumn: {
    flex: 1,
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 360,
  },
  title: {
    fontSize: 14,
    lineHeight: 18,
    ...typography.Inter[600],
    color: colors.primaryDark,
  },
  menuButton: {
    width: 32,
    height: 32,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  metaRow: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  rating: {
    marginLeft: 4,
    fontSize: 14,
    ...typography.Inter[400],
    color: colors.primaryDark,
  },
  date: {
    marginLeft: 10,
    fontSize: 12,
    color: colors.muted,
  },
  text: {
    marginTop: 22,
    fontSize: 14,
    lineHeight: 18,
    color: colors.text,
  },
  moreLink: {
    marginTop: 8,
    fontSize: 12,
    ...typography.Inter[400],
    color: colors.primary,
  },
});
