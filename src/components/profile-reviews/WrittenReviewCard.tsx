import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/theme';
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
        <Text style={styles.title}>{review.targetTitle}</Text>
        <Pressable style={styles.menuButton} onPress={() => onOpenActions(review)}>
          <Ionicons name="ellipsis-horizontal" size={22} color={colors.primaryDark} />
        </Pressable>
      </View>

      <View style={styles.metaRow}>
        <Ionicons name="star" size={16} color="#FFC93C" />
        <Text style={styles.rating}>{review.rating.toFixed(1)}</Text>
        <Text style={styles.date}>{review.date}</Text>
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
    marginBottom: 18,
    paddingBottom: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  title: {
    flex: 1,
    fontSize: 17,
    lineHeight: 22,
    fontWeight: '700',
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
  },
  rating: {
    marginLeft: 4,
    fontSize: 14,
    fontWeight: '700',
    color: colors.primaryDark,
  },
  date: {
    marginLeft: 10,
    fontSize: 14,
    color: colors.muted,
  },
  text: {
    marginTop: 12,
    fontSize: 15,
    lineHeight: 22,
    color: colors.text,
  },
  moreLink: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '600',
    color: colors.primary,
  },
});
