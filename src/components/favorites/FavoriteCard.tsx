import { Ionicons } from '@expo/vector-icons';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/theme';
import { FavoriteItem } from '../../data/favoritesData';

type FavoriteCardProps = {
  item: FavoriteItem;
  width: number;
  onPress: (item: FavoriteItem) => void;
  onRemove: (id: string) => void;
};

export function FavoriteCard({ item, width, onPress, onRemove }: FavoriteCardProps) {
  const isDeleted = item.status === 'deletedByAuthor';
  const isViewed = item.status === 'viewed';
  const textMuted = isDeleted;
  const rating = item.rating ?? '0.0';

  return (
    <Pressable style={[styles.card, { width }]} onPress={() => onPress(item)}>
      <View style={[styles.imageWrap, { width, height: width }]}>
        <Image source={item.image} style={styles.image} />
        <Pressable
          style={styles.heartButton}
          onPress={(event) => {
            event.stopPropagation();
            onRemove(item.id);
          }}
          hitSlop={10}
        >
          <Ionicons name="heart" size={26} color="#FF2F72" />
        </Pressable>

        <View style={styles.ratingBadge}>
          <Ionicons name="star" size={13} color={colors.white} />
          <Text style={styles.ratingText}>{rating}</Text>
        </View>

        {isDeleted ? <View style={styles.deletedOverlay} /> : null}
        {isDeleted || isViewed ? (
          <View style={styles.statusBadge}>
            <Text style={styles.statusText}>{isDeleted ? 'Удалено автором' : 'Просмотрено'}</Text>
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
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 26,
    backgroundColor: colors.white,
  },
  imageWrap: {
    borderRadius: 10,
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
    top: 8,
    right: 8,
  },
  ratingBadge: {
    position: 'absolute',
    right: 8,
    bottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 4,
    fontSize: 13,
    fontWeight: '700',
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
    fontWeight: '500',
    color: colors.white,
  },
  title: {
    marginTop: 10,
    fontSize: 15,
    lineHeight: 18,
    fontWeight: '700',
    color: colors.primaryDark,
  },
  type: {
    marginTop: 4,
    fontSize: 14,
    color: colors.muted,
  },
  price: {
    marginTop: 6,
    fontSize: 18,
    lineHeight: 22,
    fontWeight: '700',
    color: colors.primary,
  },
  textMuted: {
    color: '#6F6F6F',
  },
  priceMuted: {
    color: '#6F6F6F',
  },
});
