import { useMemo, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { EmptyPurchasesState } from '../../components/profile-purchases/EmptyPurchasesState';
import { MyPurchasesHeader } from '../../components/profile-purchases/MyPurchasesHeader';
import { PurchaseActionsSheet } from '../../components/profile-purchases/PurchaseActionsSheet';
import { PurchaseCard } from '../../components/profile-purchases/PurchaseCard';
import { PurchaseChips } from '../../components/profile-purchases/PurchaseChips';
import { LeaveReviewSheet } from '../../components/profile-reviews/LeaveReviewSheet';
import { colors } from '../../constants/theme';
import { purchaseChipBase, PurchaseItem, purchasesMock } from '../../data/myPurchasesData';
import { PendingReview } from '../../data/myReviewsData';

type PurchaseChipId = (typeof purchaseChipBase)[number]['id'];

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
  const [isLeaveOpen, setIsLeaveOpen] = useState(false);
  const [draftRating, setDraftRating] = useState(5);
  const [draftText, setDraftText] = useState('');
  const [selectedReviewPurchase, setSelectedReviewPurchase] = useState<PendingReview | null>(null);
  const hasPurchases = purchasesMock.length > 0;
  const purchaseChips = useMemo(
    () =>
      purchaseChipBase.map((chip) => {
        const count =
          chip.id === 'all'
            ? purchasesMock.length
            : purchasesMock.filter((item) => item.category === chip.id).length;

        return {
          id: chip.id,
          title: `${chip.title} (${count})`,
        };
      }),
    []
  );

  const filteredPurchases = useMemo(() => {
    if (activeCategory === 'all') {
      return purchasesMock;
    }
    return purchasesMock.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const closeLeaveSheet = () => {
    setIsLeaveOpen(false);
    setSelectedReviewPurchase(null);
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 + insets.bottom }}>
        <MyPurchasesHeader onBack={onBack} />
        {hasPurchases ? (
          <>
            <PurchaseChips
              chips={purchaseChips}
              activeCategory={activeCategory}
              onSelectCategory={setActiveCategory}
            />
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
          if (!selectedPurchase) {
            setIsActionsOpen(false);
            return;
          }

          const reviewTarget: PendingReview = {
            id: selectedPurchase.id,
            targetTitle: selectedPurchase.title,
            image: selectedPurchase.image,
            type:
              selectedPurchase.type === 'Курс'
                ? 'product'
                : selectedPurchase.type === 'Книга'
                  ? 'product'
                  : 'session',
          };

          setSelectedReviewPurchase(reviewTarget);
          setDraftRating(5);
          setDraftText('');
          setIsLeaveOpen(true);
          setIsActionsOpen(false);
        }}
      />

      <LeaveReviewSheet
        visible={isLeaveOpen}
        item={selectedReviewPurchase}
        rating={draftRating}
        text={draftText}
        onChangeRating={setDraftRating}
        onChangeText={setDraftText}
        onClose={closeLeaveSheet}
        onSubmit={() => {
          console.log('leave purchase review', selectedReviewPurchase?.id, draftRating, draftText);
          closeLeaveSheet();
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
