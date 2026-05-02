import { Ionicons } from '@expo/vector-icons';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../constants/theme';
import { PendingReview } from '../../data/myReviewsData';

export function PendingReviewCard({
  item,
  onLeaveReview,
}: {
  item: PendingReview;
  onLeaveReview: (item: PendingReview) => void;
}) {
  return (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.content}>
        <View style={styles.starsRow}>
          {Array.from({ length: 5 }).map((_, index) => (
            <Ionicons key={index} name="star" size={22} color="#F0F5F7" />
          ))}
        </View>
        <Text style={styles.title}>{item.targetTitle}</Text>
        <Pressable onPress={() => onLeaveReview(item)}>
          <Text style={styles.link}>Оставить отзыв</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
    marginBottom: 10,
    minHeight: 128,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#F0F0F0',
    backgroundColor: colors.white,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 96,
    height: 96,
    borderRadius: 8,
    resizeMode: 'cover',
    backgroundColor: colors.cardLight,
    marginRight: 14,
  },
  content: {
    flex: 1,
  },
  starsRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    lineHeight: 20,
    ...typography.Inter[700],
    color: colors.primaryDark,
  },
  link: {
    marginTop: 6,
    fontSize: 14,
    color: colors.primary,
    textDecorationLine: 'underline',
  },
});
