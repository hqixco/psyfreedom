import { Ionicons } from '@expo/vector-icons';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/theme';
import { WorkingProduct } from '../../data/workingProductsData';

export function ProductManagementCard({
  product,
  onOpenActions,
  onOpenPreview,
}: {
  product: WorkingProduct;
  onOpenActions: (product: WorkingProduct) => void;
  onOpenPreview: (product: WorkingProduct) => void;
}) {
  return (
    <Pressable style={styles.card} onPress={() => onOpenPreview(product)}>
      <Image source={product.image} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2}>
          {product.title}
        </Text>
        <Text style={styles.type}>{product.typeLabel}</Text>
        <Text style={styles.price}>{product.price}</Text>
      </View>

      <Pressable style={styles.menuButton} onPress={() => onOpenActions(product)}>
        <Ionicons name="ellipsis-horizontal" size={22} color={colors.primaryDark} />
      </Pressable>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
    marginTop: 14,
    minHeight: 112,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#F0F0F0',
    backgroundColor: colors.white,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 92,
    height: 92,
    borderRadius: 8,
    resizeMode: 'cover',
    backgroundColor: colors.cardLight,
    marginRight: 12,
  },
  content: {
    flex: 1,
    paddingRight: 32,
  },
  title: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '700',
    color: colors.primaryDark,
  },
  type: {
    marginTop: 6,
    fontSize: 14,
    color: colors.muted,
  },
  price: {
    marginTop: 6,
    fontSize: 20,
    lineHeight: 24,
    fontWeight: '700',
    color: colors.primary,
  },
  menuButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    width: 32,
    height: 32,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});
