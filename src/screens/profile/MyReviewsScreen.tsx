import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { EditReviewSheet } from '../../components/profile-reviews/EditReviewSheet';
import { LeaveReviewSheet } from '../../components/profile-reviews/LeaveReviewSheet';
import { MyReviewsHeader } from '../../components/profile-reviews/MyReviewsHeader';
import { PendingReviewCard } from '../../components/profile-reviews/PendingReviewCard';
import { ReviewActionsSheet } from '../../components/profile-reviews/ReviewActionsSheet';
import { ReviewsTabKey, ReviewsTabs } from '../../components/profile-reviews/ReviewsTabs';
import { WrittenReviewCard } from '../../components/profile-reviews/WrittenReviewCard';
import { colors, typography } from '../../constants/theme';
import {
  PendingReview,
  pendingReviewsMock,
  WrittenReview,
  writtenReviewsMock,
} from '../../data/myReviewsData';

export function MyReviewsScreen({ onBack }: { onBack: () => void }) {
  const insets = useSafeAreaInsets();
  const [activeTab, setActiveTab] = useState<ReviewsTabKey>('written');
  const [writtenReviews, setWrittenReviews] = useState<WrittenReview[]>(writtenReviewsMock);
  const [pendingReviews, setPendingReviews] = useState<PendingReview[]>(pendingReviewsMock);
  const [selectedWrittenReview, setSelectedWrittenReview] = useState<WrittenReview | null>(null);
  const [selectedPendingReview, setSelectedPendingReview] = useState<PendingReview | null>(null);
  const [isActionsOpen, setIsActionsOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isLeaveOpen, setIsLeaveOpen] = useState(false);
  const [draftRating, setDraftRating] = useState(5);
  const [draftText, setDraftText] = useState('');

  const openEditSheet = (review: WrittenReview) => {
    setSelectedWrittenReview(review);
    setDraftRating(review.rating);
    setDraftText(review.text);
    setIsEditOpen(true);
  };

  const openLeaveSheet = (item: PendingReview) => {
    setSelectedPendingReview(item);
    setDraftRating(5);
    setDraftText('');
    setIsLeaveOpen(true);
  };

  const closeEditSheet = () => {
    setIsEditOpen(false);
    setSelectedWrittenReview(null);
  };

  const closeLeaveSheet = () => {
    setIsLeaveOpen(false);
    setSelectedPendingReview(null);
  };

  const renderWrittenEmpty = () => (
    <View style={styles.emptyState}>
      <Text style={styles.emptyText}>У вас пока нет оставленных отзывов</Text>
    </View>
  );

  const renderPendingEmpty = () => (
    <View style={styles.emptyState}>
      <Text style={styles.emptyText}>Нет товаров и услуг, ожидающих отзыва</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 + insets.bottom }}>
        <MyReviewsHeader onBack={onBack} />
        <ReviewsTabs activeTab={activeTab} onChangeTab={setActiveTab} />

        {activeTab === 'written' ? (
          <View style={styles.listSection}>
            {writtenReviews.length === 0
              ? renderWrittenEmpty()
              : writtenReviews.map((review) => (
                  <WrittenReviewCard
                    key={review.id}
                    review={review}
                    onOpenActions={(item) => {
                      setSelectedWrittenReview(item);
                      setIsActionsOpen(true);
                    }}
                  />
                ))}
          </View>
        ) : (
          <View style={styles.listSection}>
            {pendingReviews.length === 0
              ? renderPendingEmpty()
              : pendingReviews.map((item) => (
                  <PendingReviewCard key={item.id} item={item} onLeaveReview={openLeaveSheet} />
                ))}
          </View>
        )}
      </ScrollView>

      <ReviewActionsSheet
        visible={isActionsOpen}
        onClose={() => setIsActionsOpen(false)}
        onEdit={() => {
          const review = selectedWrittenReview;
          setIsActionsOpen(false);
          if (review) {
            openEditSheet(review);
          }
        }}
        onDelete={() => {
          if (selectedWrittenReview) {
            setWrittenReviews((prev) => prev.filter((item) => item.id !== selectedWrittenReview.id));
          }
          setIsActionsOpen(false);
          setSelectedWrittenReview(null);
        }}
      />

      <EditReviewSheet
        visible={isEditOpen}
        title="Редактировать отзыв"
        objectTitle={selectedWrittenReview?.targetTitle ?? ''}
        rating={draftRating}
        text={draftText}
        submitLabel="Сохранить изменения"
        onChangeRating={setDraftRating}
        onChangeText={setDraftText}
        onClose={closeEditSheet}
        onSubmit={() => {
          if (!selectedWrittenReview) {
            return;
          }

          setWrittenReviews((prev) =>
            prev.map((item) =>
              item.id === selectedWrittenReview.id
                ? { ...item, rating: draftRating, text: draftText }
                : item
            )
          );
          closeEditSheet();
        }}
      />

      <LeaveReviewSheet
        visible={isLeaveOpen}
        item={selectedPendingReview}
        rating={draftRating}
        text={draftText}
        onChangeRating={setDraftRating}
        onChangeText={setDraftText}
        onClose={closeLeaveSheet}
        onSubmit={() => {
          if (!selectedPendingReview) {
            return;
          }

          const newReview: WrittenReview = {
            id: `written-${Date.now()}`,
            targetTitle: selectedPendingReview.targetTitle,
            rating: draftRating,
            date: '29 апреля 2026',
            text: draftText || 'Отзыв добавлен.',
          };

          setPendingReviews((prev) => prev.filter((item) => item.id !== selectedPendingReview.id));
          setWrittenReviews((prev) => [newReview, ...prev]);
          setActiveTab('written');
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
  listSection: {
    marginTop: 24,
  },
  emptyState: {
    minHeight: 380,
    paddingHorizontal: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    fontSize: 20,
    lineHeight: 26,
    ...typography.Inter[700],
    color: colors.primaryDark,
    textAlign: 'center',
  },
});
