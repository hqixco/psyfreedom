import { Ionicons } from '@expo/vector-icons';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/theme';
import { PurchaseItem } from '../../data/myPurchasesData';

export function PurchaseCard({
  item,
  onPress,
  onOpenActions,
}: {
  item: PurchaseItem;
  onPress: (item: PurchaseItem) => void;
  onOpenActions: (item: PurchaseItem) => void;
}) {
  return (
    <Pressable style={styles.card} onPress={() => onPress(item)}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
        <Text style={styles.price}>{item.price}</Text>
        <Text style={styles.type}>{item.type}</Text>
        <Text style={styles.author}>{item.author}</Text>
      </View>
      <Pressable
        style={styles.menuButton}
        onPress={(event) => {
          event.stopPropagation();
          onOpenActions(item);
        }}
      >
        <Ionicons name="ellipsis-horizontal" size={22} color={colors.primaryDark} />
      </Pressable>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
    marginBottom: 10,
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
    paddingRight: 28,
  },
  title: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '700',
    color: colors.primaryDark,
  },
  price: {
    marginTop: 8,
    fontSize: 20,
    fontWeight: '700',
    color: colors.primary,
  },
  type: {
    marginTop: 4,
    fontSize: 14,
    color: colors.muted,
  },
  author: {
    marginTop: 2,
    fontSize: 14,
    color: colors.muted,
  },
  menuButton: {
    position: 'absolute',
    top: 14,
    right: 14,
  },
});
