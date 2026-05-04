import { Ionicons } from '@expo/vector-icons';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../constants/theme';
import { FavoriteItem } from '../../data/favoritesData';

type FavoriteCardProps = {
  item: FavoriteItem;
  width: number;
  onPress: (item: FavoriteItem) => void;
  isHeartMuted?: boolean;
  onToggleHeart: (id: string) => void;
};

export function FavoriteCard({ item, width, onPress, isHeartMuted = false, onToggleHeart }: FavoriteCardProps) {
  const isDeleted = item.status === 'deletedByAuthor';
  const textMuted = isDeleted;
  const rating = item.rating ?? '0.0';

  return (
    <View style={[styles.card, { width }]}>
      <Pressable style={styles.cardPressable} onPress={() => onPress(item)}>
        <View style={[styles.imageWrap, { width, height: width }]}>
          <Image source={item.image} style={styles.image} />

          <View style={styles.ratingBadge}>
            <Ionicons name="star" size={13} color={colors.white} />
            <Text style={styles.ratingText}>{rating}</Text>
          </View>

          {isDeleted ? <View style={styles.deletedOverlay} /> : null}
          {isDeleted ? (
            <View style={styles.statusBadge}>
              <Text style={styles.statusText}>Удалено автором</Text>
            </View>
          ) : null}
        </View>

        <Text style={[styles.title, textMuted ? styles.textMuted : null]} numberOfLines={2}>
          {item.title}
        </Text>
        <Text style={[styles.type, textMuted ? styles.textMuted : null]} numberOfLines={1}>
          {item.type}
        </Text>
        {item.price ? (
          <Text style={[styles.price, textMuted ? styles.priceMuted : null]} numberOfLines={1}>
            {item.price}
          </Text>
        ) : null}
      </Pressable>

      <Pressable style={styles.heartButton} onPress={() => onToggleHeart(item.id)} hitSlop={10}>
        <Ionicons name="heart" size={22} color={isHeartMuted ? colors.white : '#FF2F72'} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    position: 'relative',
    marginBottom: 18,
    backgroundColor: colors.white,
  },
  cardPressable: {
    flex: 1,
  },
  imageWrap: {
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: colors.cardLight,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  heartButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 3,
    elevation: 3,
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
  },
  ratingBadge: {
    position: 'absolute',
    right: 6,
    bottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 3,
    fontSize: 14,
    ...typography.Inter[400],
    color: colors.white,
  },
  deletedOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.35)',
  },
  statusBadge: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingVertical: 8,
    backgroundColor: 'rgba(0,0,0,0.35)',
    alignItems: 'center',
  },
  statusText: {
    fontSize: 13,
    ...typography.Inter[500],
    color: colors.white,
  },
  title: {
    marginTop: 12,
    fontSize: 14,
    lineHeight: 18,
    ...typography.Inter[600],
    color: colors.primaryDark,
  },
  type: {
    marginTop: 6,
    fontSize: 14,
    lineHeight: 18,
    color: colors.muted,
  },
  price: {
    marginTop: 5,
    fontSize: 16,
    lineHeight: 20,
    ...typography.Inter[600],
    color: colors.primary,
  },
  textMuted: {
    color: '#6F6F6F',
  },
  priceMuted: {
    color: '#6F6F6F',
  },
});
