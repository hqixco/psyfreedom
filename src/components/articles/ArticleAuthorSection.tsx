import { Ionicons } from '@expo/vector-icons';
import { Image, StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../constants/theme';
import { ArticleDetails } from '../../data/articlesData';

type ArticleAuthorSectionProps = {
  author: ArticleDetails['author'];
};

export function ArticleAuthorSection({ author }: ArticleAuthorSectionProps) {
  return (
    <View style={styles.section}>
      <Text style={styles.title}>Автор</Text>
      <View style={styles.card}>
        <Image source={author.image} style={styles.avatar} />
        <View style={styles.content}>
          <Text style={styles.name}>{author.name}</Text>
          <Text style={styles.role}>{author.role}</Text>
          <View style={styles.ratingRow}>
            <Ionicons name="star" size={16} color="#FFC93C" />
            <Text style={styles.ratingText}>{`${author.rating} ${author.reviewsCount} отзывов`}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginHorizontal: 16,
    marginTop: 42,
  },
  title: {
    marginBottom: 18,
    fontSize: 28,
    lineHeight: 34,
    ...typography.Inter[700],
    color: colors.primaryDark,
  },
  card: {
    backgroundColor: colors.cardLight,
    borderRadius: 12,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 58,
    height: 58,
    borderRadius: 29,
    marginRight: 14,
    backgroundColor: colors.white,
  },
  content: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    ...typography.Inter[700],
    color: colors.primaryDark,
  },
  role: {
    marginTop: 2,
    fontSize: 14,
    color: colors.muted,
  },
  ratingRow: {
    marginTop: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 6,
    fontSize: 14,
    color: colors.primaryDark,
  },
});

