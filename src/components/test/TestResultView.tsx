import { Ionicons } from '@expo/vector-icons';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, typography } from '../../constants/theme';
import { ProductDetails, Review } from '../../data/productDetailsData';

type Metric = {
  label: string;
  value: number;
};

type Description = {
  title: string;
  text: string;
};

type TestResultViewProps = {
  title: string;
  resultTitle: string;
  metrics: Metric[];
  summary: string;
  descriptions: Description[];
  author: NonNullable<ProductDetails['author']>;
  reviews: Review[];
  onRetry: () => void;
  onOpenReview: () => void;
};

export function TestResultView({
  title,
  resultTitle,
  metrics,
  summary,
  descriptions,
  author,
  reviews,
  onRetry,
  onOpenReview,
}: TestResultViewProps) {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={[styles.content, { paddingBottom: 110 + insets.bottom }]}
    >
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.resultTitle}>{resultTitle}</Text>

      {metrics.map((metric) => (
        <View key={metric.label} style={styles.metricBlock}>
          <View style={styles.metricRow}>
            <Text style={styles.metricLabel}>{metric.label}</Text>
            <Text style={styles.metricValue}>{`${metric.value}%`}</Text>
          </View>
          <View style={styles.progressTrack}>
            <View style={[styles.progressFill, { width: `${metric.value}%` }]} />
          </View>
        </View>
      ))}

      <Text style={styles.summary}>{summary}</Text>

      {descriptions.map((item) => (
        <View key={item.title} style={styles.descriptionBlock}>
          <Text style={styles.descriptionTitle}>{item.title}</Text>
          <Text style={styles.descriptionText}>{item.text}</Text>
        </View>
      ))}

      <Pressable style={styles.retryButton} onPress={onRetry}>
        <Text style={styles.retryButtonText}>Пройти тест еще раз</Text>
      </Pressable>

      <View style={styles.authorSection}>
        <Text style={styles.sectionTitle}>Автор</Text>
        <View style={styles.authorCard}>
          {author.image ? <Image source={author.image} style={styles.authorAvatar} /> : null}
          <View style={styles.authorContent}>
            <Text style={styles.authorName}>{author.name}</Text>
            <Text style={styles.authorRole}>{author.role}</Text>
            {author.rating && typeof author.reviewsCount === 'number' ? (
              <View style={styles.authorMetaRow}>
                <Ionicons name="star" size={16} color="#FFC93C" />
                <Text style={styles.authorMetaText}>
                  {`${author.rating} ${author.reviewsCount} отзывов`}
                </Text>
              </View>
            ) : null}
          </View>
        </View>
      </View>

      <View style={styles.reviewsSection}>
        <View style={styles.reviewsHeader}>
          <Text style={styles.sectionTitle}>Отзывы</Text>
          <View style={styles.reviewsHeaderMeta}>
            <Ionicons name="star" size={16} color="#FFC93C" />
            <Text style={styles.reviewsHeaderText}>5.0 120 отзывов</Text>
          </View>
        </View>

        {reviews.map((review) => (
          <View key={review.id} style={styles.reviewCard}>
            <View style={styles.reviewTopRow}>
              {review.avatar ? <Image source={review.avatar} style={styles.reviewAvatar} /> : null}
              <View style={styles.reviewMeta}>
                <Text style={styles.reviewDate}>{review.date}</Text>
                <Text style={styles.reviewAuthor}>{review.author}</Text>
                <View style={styles.reviewStars}>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Ionicons key={index} name="star" size={14} color="#FFC93C" />
                  ))}
                </View>
              </View>
            </View>
            <Text style={styles.reviewText}>{review.text}</Text>
          </View>
        ))}

        <Pressable style={styles.reviewButton} onPress={onOpenReview}>
          <Text style={styles.reviewButtonText}>Оставить отзыв</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  title: {
    fontSize: 22,
    ...typography.Inter[700],
    color: colors.primaryDark,
  },
  resultTitle: {
    marginTop: 28,
    fontSize: 22,
    ...typography.Inter[700],
    color: colors.primaryDark,
  },
  metricBlock: {
    marginTop: 14,
  },
  metricRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  metricLabel: {
    fontSize: 15,
    ...typography.Inter[700],
    color: colors.primaryDark,
  },
  metricValue: {
    fontSize: 15,
    ...typography.Inter[700],
    color: colors.primary,
  },
  progressTrack: {
    height: 8,
    marginTop: 8,
    borderRadius: 4,
    overflow: 'hidden',
    backgroundColor: '#EAF8FA',
  },
  progressFill: {
    height: '100%',
    borderRadius: 4,
    backgroundColor: colors.primary,
  },
  summary: {
    marginTop: 24,
    fontSize: 15,
    lineHeight: 22,
    color: colors.primaryDark,
  },
  descriptionBlock: {
    marginTop: 20,
  },
  descriptionTitle: {
    fontSize: 15,
    ...typography.Inter[700],
    color: colors.primaryDark,
  },
  descriptionText: {
    marginTop: 4,
    fontSize: 15,
    lineHeight: 22,
    color: colors.primaryDark,
  },
  retryButton: {
    marginTop: 28,
    height: 48,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  retryButtonText: {
    fontSize: 15,
    ...typography.Inter[700],
    color: colors.primary,
  },
  authorSection: {
    marginTop: 36,
  },
  sectionTitle: {
    fontSize: 24,
    ...typography.Inter[700],
    color: colors.primaryDark,
  },
  authorCard: {
    marginTop: 14,
    padding: 14,
    borderRadius: 12,
    backgroundColor: colors.cardLight,
    flexDirection: 'row',
    alignItems: 'center',
  },
  authorAvatar: {
    width: 58,
    height: 58,
    borderRadius: 29,
    marginRight: 14,
    backgroundColor: colors.white,
  },
  authorContent: {
    flex: 1,
  },
  authorName: {
    fontSize: 16,
    ...typography.Inter[700],
    color: colors.primaryDark,
  },
  authorRole: {
    marginTop: 2,
    fontSize: 14,
    color: colors.muted,
  },
  authorMetaRow: {
    marginTop: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  authorMetaText: {
    marginLeft: 6,
    fontSize: 14,
    color: colors.primaryDark,
  },
  reviewsSection: {
    marginTop: 34,
  },
  reviewsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  reviewsHeaderMeta: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reviewsHeaderText: {
    marginLeft: 6,
    fontSize: 14,
    color: colors.muted,
  },
  reviewCard: {
    marginTop: 12,
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#F0F0F0',
    backgroundColor: colors.white,
  },
  reviewTopRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  reviewAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
    backgroundColor: colors.cardLight,
  },
  reviewMeta: {
    flex: 1,
  },
  reviewDate: {
    fontSize: 12,
    color: colors.muted,
  },
  reviewAuthor: {
    marginTop: 2,
    fontSize: 15,
    ...typography.Inter[700],
    color: colors.primaryDark,
  },
  reviewStars: {
    marginTop: 6,
    flexDirection: 'row',
    gap: 2,
  },
  reviewText: {
    marginTop: 8,
    fontSize: 14,
    lineHeight: 20,
    color: colors.text,
  },
  reviewButton: {
    marginTop: 14,
    marginBottom: 24,
    height: 42,
    borderRadius: 21,
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  reviewButtonText: {
    fontSize: 15,
    ...typography.Inter[700],
    color: colors.primary,
  },
});
