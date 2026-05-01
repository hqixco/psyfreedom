import { useMemo, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Pressable, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { ProductCard } from '../../components/products/ProductCard';
import { colors } from '../../constants/theme';
import { SpecialistProduct } from '../../data/specialistDetailsData';
import { Product } from '../../data/productsData';

type SpecialistProductsScreenProps = {
  products: SpecialistProduct[];
  onBack: () => void;
  onSearch: () => void;
  onOpenProduct: (id: string) => void;
};

type ChipKey = 'all' | 'course' | 'game' | 'video';

export function SpecialistProductsScreen({
  products,
  onBack,
  onSearch,
  onOpenProduct,
}: SpecialistProductsScreenProps) {
  const { width } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const [activeChip, setActiveChip] = useState<ChipKey>('all');
  const cardWidth = (width - 16 * 2 - 10) / 2;

  const chips = useMemo(
    () => [
      { key: 'all' as const, label: `Все (${products.length})` },
      { key: 'course' as const, label: `Курсы (${products.filter((item) => item.type === 'Курс').length})` },
      { key: 'game' as const, label: `Игры (${products.filter((item) => item.type === 'Игра').length})` },
      { key: 'video' as const, label: `Видеоурок (${products.filter((item) => item.type === 'Видеоурок').length})` },
    ],
    [products],
  );

  const visibleProducts = products.filter((item) => {
    if (activeChip === 'all') {
      return true;
    }
    if (activeChip === 'course') {
      return item.type === 'Курс';
    }
    if (activeChip === 'game') {
      return item.type === 'Игра';
    }
    if (activeChip === 'video') {
      return item.type === 'Видеоурок';
    }
    return true;
  });

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.content, { paddingBottom: 100 + insets.bottom }]}
      >
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Pressable style={styles.iconButton} onPress={onBack}>
              <Ionicons name="chevron-back" size={24} color={colors.primaryDark} />
            </Pressable>
            <Text style={styles.title}>Товары специалиста</Text>
          </View>
          <Pressable style={styles.iconButton} onPress={onSearch}>
            <Ionicons name="search-outline" size={25} color={colors.primaryDark} />
          </Pressable>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.chipsList}>
          {chips.map((chip) => {
            const active = chip.key === activeChip;
            return (
              <Pressable
                key={chip.key}
                style={[styles.chip, active ? styles.activeChip : styles.inactiveChip]}
                onPress={() => setActiveChip(chip.key)}
              >
                <Text style={[styles.chipText, active ? styles.activeChipText : styles.inactiveChipText]}>
                  {chip.label}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>

        <View style={styles.grid}>
          {visibleProducts.map((item) => (
            <View key={item.id} style={styles.cardWrap}>
              <ProductCard
                item={item as Product}
                width={cardWidth}
                imageHeight={cardWidth * 0.75}
                onPress={() => onOpenProduct(item.id)}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    paddingTop: 0,
  },
  header: {
    height: 52,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginRight: 12,
  },
  iconButton: {
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginLeft: 6,
    fontSize: 24,
    fontWeight: '700',
    color: colors.primaryDark,
    flexShrink: 1,
  },
  chipsList: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 8,
  },
  chip: {
    height: 42,
    borderRadius: 22,
    paddingHorizontal: 22,
    marginRight: 8,
    borderWidth: 1,
    borderColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeChip: {
    backgroundColor: colors.primary,
  },
  inactiveChip: {
    backgroundColor: colors.white,
  },
  chipText: {
    fontSize: 16,
    fontWeight: '700',
  },
  activeChipText: {
    color: colors.white,
  },
  inactiveChipText: {
    color: colors.primaryDark,
  },
  grid: {
    marginTop: 10,
    marginHorizontal: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  cardWrap: {
    marginBottom: 22,
  },
});
