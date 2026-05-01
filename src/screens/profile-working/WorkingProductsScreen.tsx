import { useMemo, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { CreateProductButton } from '../../components/working-products/CreateProductButton';
import { ProductActionsSheet } from '../../components/working-products/ProductActionsSheet';
import { ProductManagementCard } from '../../components/working-products/ProductManagementCard';
import { WorkingProductsHeader } from '../../components/working-products/WorkingProductsHeader';
import {
  WorkingProductsTabKey,
  WorkingProductsTabs,
} from '../../components/working-products/WorkingProductsTabs';
import { colors } from '../../constants/theme';
import { WorkingProduct } from '../../data/workingProductsData';

export function WorkingProductsScreen({
  products,
  onBack,
  onOpenCreate,
  onOpenEdit,
  onUpdateStatus,
}: {
  products: WorkingProduct[];
  onBack: () => void;
  onOpenCreate: () => void;
  onOpenEdit: (product: WorkingProduct) => void;
  onUpdateStatus: (productId: string, status: 'published' | 'archived') => void;
}) {
  const insets = useSafeAreaInsets();
  const [activeTab, setActiveTab] = useState<WorkingProductsTabKey>('published');
  const [selectedProduct, setSelectedProduct] = useState<WorkingProduct | null>(null);
  const [isActionsOpen, setIsActionsOpen] = useState(false);

  const visibleProducts = useMemo(
    () => products.filter((item) => item.status === activeTab),
    [activeTab, products]
  );

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 110 + insets.bottom }}>
          <WorkingProductsHeader onBack={onBack} />
          <WorkingProductsTabs activeTab={activeTab} onChangeTab={setActiveTab} />

          {visibleProducts.length === 0 ? (
            <View style={styles.emptyState}>
              <Text style={styles.emptyText}>У вас пока нет товаров в этом разделе</Text>
            </View>
          ) : (
            visibleProducts.map((product) => (
              <ProductManagementCard
                key={product.id}
                product={product}
                onOpenPreview={(item) => console.log('open product preview', item.id)}
                onOpenActions={(item) => {
                  setSelectedProduct(item);
                  setIsActionsOpen(true);
                }}
              />
            ))
          )}
        </ScrollView>

        <CreateProductButton label="Добавить товар" onPress={onOpenCreate} />

        <ProductActionsSheet
          visible={isActionsOpen}
          archived={selectedProduct?.status === 'archived'}
          onClose={() => setIsActionsOpen(false)}
          onEdit={() => {
            if (selectedProduct) {
              setIsActionsOpen(false);
              onOpenEdit(selectedProduct);
            }
          }}
          onArchiveToggle={() => {
            if (selectedProduct) {
              onUpdateStatus(
                selectedProduct.id,
                selectedProduct.status === 'archived' ? 'published' : 'archived'
              );
            }
            setIsActionsOpen(false);
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  emptyState: {
    minHeight: 360,
    paddingHorizontal: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    fontSize: 20,
    lineHeight: 26,
    fontWeight: '700',
    color: colors.primaryDark,
    textAlign: 'center',
  },
});
