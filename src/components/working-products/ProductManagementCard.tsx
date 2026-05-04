import { Ionicons } from '@expo/vector-icons';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../constants/theme';
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
        <Ionicons name="ellipsis-horizontal" size={13} color={colors.primaryDark} />
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
    borderColor: '#EEEFEF',
    backgroundColor: colors.white,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  image: {
    width: 92,
    height: 92,
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
    fontSize: 14,
    lineHeight: 18,
    ...typography.Inter[600],
    color: colors.primaryDark,
  },
  type: {
    marginTop: 8,
    fontSize: 12,
    color: colors.muted,
  },
  price: {
    marginTop: 6,
    fontSize: 16,
    ...typography.Inter[600],
    color: colors.primary,
  },
  menuButton: {
    position: 'absolute',
    top: 14,
    right: 14,
    width: 32,
    height: 32,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});
