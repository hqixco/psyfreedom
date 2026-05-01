import { useMemo, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { EmptyPurchasesState } from '../../components/profile-purchases/EmptyPurchasesState';
import { MyPurchasesHeader } from '../../components/profile-purchases/MyPurchasesHeader';
import { PurchaseActionsSheet } from '../../components/profile-purchases/PurchaseActionsSheet';
import { PurchaseCard } from '../../components/profile-purchases/PurchaseCard';
import { PurchaseChips } from '../../components/profile-purchases/PurchaseChips';
import { colors } from '../../constants/theme';
import { purchaseChips, PurchaseItem, purchasesMock } from '../../data/myPurchasesData';

type PurchaseChipId = (typeof purchaseChips)[number]['id'];

export function MyPurchasesScreen({
  onBack,
  onOpenPurchase,
  onGoToCatalog,
}: {
  onBack: () => void;
  onOpenPurchase: (purchaseId: string) => void;
  onGoToCatalog: () => void;
}) {
  const insets = useSafeAreaInsets();
  const [activeCategory, setActiveCategory] = useState<PurchaseChipId>('all');
  const [selectedPurchase, setSelectedPurchase] = useState<PurchaseItem | null>(null);
  const [isActionsOpen, setIsActionsOpen] = useState(false);
  const hasPurchases = purchasesMock.length > 0;

  const filteredPurchases = useMemo(() => {
    if (activeCategory === 'all') {
      return purchasesMock;
    }
    return purchasesMock.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 + insets.bottom }}>
        <MyPurchasesHeader onBack={onBack} />
        {hasPurchases ? (
          <>
            <PurchaseChips activeCategory={activeCategory} onSelectCategory={setActiveCategory} />
            {filteredPurchases.map((item) => (
              <PurchaseCard
                key={item.id}
                item={item}
                onPress={() => onOpenPurchase(item.id)}
                onOpenActions={(purchase) => {
                  setSelectedPurchase(purchase);
                  setIsActionsOpen(true);
                }}
              />
            ))}
          </>
        ) : (
          <EmptyPurchasesState onGoToCatalog={onGoToCatalog} />
        )}
      </ScrollView>

      <PurchaseActionsSheet
        visible={hasPurchases && isActionsOpen}
        onClose={() => setIsActionsOpen(false)}
        onDownload={() => {
          console.log('download purchase', selectedPurchase?.id);
          setIsActionsOpen(false);
        }}
        onReview={() => {
          console.log('review purchase', selectedPurchase?.id);
          setIsActionsOpen(false);
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
