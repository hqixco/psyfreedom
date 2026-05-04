import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../constants/theme';
import { WorkingReview } from '../../data/workingReviewsData';
import { WorkingReviewReply } from './WorkingReviewReply';

export function WorkingReviewCard({
  review,
  onOpenClientActions,
  onOpenReplyActions,
}: {
  review: WorkingReview;
  onOpenClientActions: (review: WorkingReview) => void;
  onOpenReplyActions: (review: WorkingReview) => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const shouldClamp = review.text.length > 180;

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <View style={styles.avatarColumn}>
          <Image source={review.avatar} style={styles.avatar} />
        </View>
        <View style={styles.contentColumn}>
          <Text style={styles.clientName}>{review.clientName}</Text>
          <View style={styles.metaRow}>
            <Ionicons name="star" size={16} color="#FFC93C" />
            <Text style={styles.rating}>{review.rating.toFixed(1)}</Text>
            <Text style={styles.date}>{review.date}</Text>
          </View>
        </View>
        <Pressable style={styles.menuButton} onPress={() => onOpenClientActions(review)}>
          <Ionicons name="ellipsis-horizontal" size={13} color={colors.primaryDark} />
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
        <WorkingReviewReply reply={review.reply} onOpenActions={() => onOpenReplyActions(review)} />
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
    width: 56,
    height: 56,
    borderRadius: 360,
    backgroundColor: colors.cardLight,
    resizeMode: 'cover',
  },
  clientName: {
    fontSize: 14,
    lineHeight: 18,
    marginTop: 6,
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
    ...typography.Inter[600],
    color: colors.primary,
  },
});
