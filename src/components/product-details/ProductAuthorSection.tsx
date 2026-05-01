import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/theme';
import { ProductDetails } from '../../data/productDetailsData';

type ProductAuthorSectionProps = {
  author?: ProductDetails['author'];
  onPressAuthor?: (specialistId: string) => void;
};

export function ProductAuthorSection({ author, onPressAuthor }: ProductAuthorSectionProps) {
  if (!author) {
    return null;
  }

  const isPressable = Boolean(author.specialistId && onPressAuthor);
  const Wrapper = isPressable ? Pressable : View;

  return (
    <View style={styles.section}>
      <Text style={styles.title}>Автор</Text>
      <Wrapper
        style={styles.card}
        {...(isPressable
          ? {
              onPress: () => onPressAuthor?.(author.specialistId!),
            }
          : {})}
      >
        {author.image ? <Image source={author.image} style={styles.image} /> : null}
        <View style={styles.content}>
          <Text style={styles.name}>{author.name}</Text>
          <Text style={styles.role}>{author.role}</Text>
          {author.rating && typeof author.reviewsCount === 'number' ? (
            <Text style={styles.meta}>{`${author.rating} ${author.reviewsCount} отзывов`}</Text>
          ) : null}
        </View>
      </Wrapper>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginTop: 24,
  },
  title: {
    marginHorizontal: 16,
    fontSize: 20,
    fontWeight: '700',
    color: colors.primaryDark,
  },
  card: {
    marginHorizontal: 16,
    marginTop: 12,
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#F0F0F0',
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 56,
    height: 56,
    borderRadius: 28,
    marginRight: 12,
    backgroundColor: colors.cardLight,
  },
  content: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.primaryDark,
  },
  role: {
    marginTop: 2,
    fontSize: 14,
    color: colors.muted,
  },
  meta: {
    marginTop: 4,
    fontSize: 13,
    color: colors.primaryDark,
  },
});
