import { Image, ImageSourcePropType, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../constants/theme';
import { RatingStarIcon } from '../icons/RatingStarIcon';

const instituteAuthorAvatar = require('../../../assets/institute-author-avatar.svg');
const defaultAuthorAvatar = require('../../../assets/avatar-person-default.png');

export type AuthorCardData = {
  name: string;
  role: string;
  rating?: string;
  reviewsCount?: number;
  image?: ImageSourcePropType;
  kind?: 'person' | 'institute';
};

type AuthorSectionProps = {
  author?: AuthorCardData | null;
  title?: string;
  onPress?: () => void;
};

export function AuthorSection({ author, title = 'Автор', onPress }: AuthorSectionProps) {
  if (!author) {
    return null;
  }

  const card = (
    <>
      <Image
        source={author.kind === 'institute' ? instituteAuthorAvatar : author.image ?? defaultAuthorAvatar}
        style={styles.avatar}
      />
      <View style={styles.content}>
        <Text style={styles.name}>{author.name}</Text>
        <Text style={styles.role}>{author.role}</Text>
        {author.rating && typeof author.reviewsCount === 'number' ? (
          <View style={styles.ratingRow}>
            <RatingStarIcon />
            <Text style={styles.ratingValue}>{author.rating}</Text>
            <Text style={styles.reviewsText}>{`${author.reviewsCount} отзывов`}</Text>
          </View>
        ) : null}
      </View>
    </>
  );

  return (
    <View style={styles.section}>
      <Text style={styles.title}>{title}</Text>
      {onPress ? (
        <Pressable style={styles.card} onPress={onPress} hitSlop={8}>
          {card}
        </Pressable>
      ) : (
        <View style={styles.card}>{card}</View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginHorizontal: 16,
    marginTop: 24,
  },
  title: {
    marginBottom: 22,
    fontSize: 24,
    lineHeight: 29,
    ...typography.Inter[600],
    color: colors.primaryDark,
  },
  card: {
    padding: 20,
    borderRadius: 12,
    backgroundColor: '#F5F9FD',
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 12,
    backgroundColor: colors.cardLight,
  },
  content: {
    flex: 1,
  },
  name: {
    fontSize: 14,
    ...typography.Inter[600],
    color: colors.primaryDark,
  },
  role: {
    marginTop: 3,
    fontSize: 14,
    color: colors.muted,
  },
  ratingRow: {
    marginTop: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingValue: {
    marginLeft: 3,
    fontSize: 14,
    fontWeight: '600',
    color: colors.primaryDark,
  },
  reviewsText: {
    marginLeft: 7,
    fontSize: 14,
    fontWeight: '400',
    color: colors.primaryDark,
  },
});
