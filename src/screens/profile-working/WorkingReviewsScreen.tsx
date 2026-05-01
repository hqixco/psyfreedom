import { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { ClientReviewActionsSheet } from '../../components/working-reviews/ClientReviewActionsSheet';
import { EditReplySheet } from '../../components/working-reviews/EditReplySheet';
import { ReplyToReviewSheet } from '../../components/working-reviews/ReplyToReviewSheet';
import { SpecialistReplyActionsSheet } from '../../components/working-reviews/SpecialistReplyActionsSheet';
import { WorkingReviewCard } from '../../components/working-reviews/WorkingReviewCard';
import { WorkingReviewsHeader } from '../../components/working-reviews/WorkingReviewsHeader';
import { colors } from '../../constants/theme';
import { WorkingReview, workingReviewsMock } from '../../data/workingReviewsData';

export function WorkingReviewsScreen({ onBack }: { onBack: () => void }) {
  const insets = useSafeAreaInsets();
  const [reviews, setReviews] = useState<WorkingReview[]>(workingReviewsMock);
  const [selectedClientReview, setSelectedClientReview] = useState<WorkingReview | null>(null);
  const [selectedReplyReview, setSelectedReplyReview] = useState<WorkingReview | null>(null);
  const [isClientActionsOpen, setIsClientActionsOpen] = useState(false);
  const [isReplyActionsOpen, setIsReplyActionsOpen] = useState(false);
  const [isReplySheetOpen, setIsReplySheetOpen] = useState(false);
  const [isEditReplyOpen, setIsEditReplyOpen] = useState(false);
  const [draftReplyText, setDraftReplyText] = useState('');

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 + insets.bottom }}>
        <WorkingReviewsHeader onBack={onBack} />

        <View style={styles.list}>
          {reviews.map((review) => (
            <WorkingReviewCard
              key={review.id}
              review={review}
              onOpenClientActions={(item) => {
                setSelectedClientReview(item);
                setIsClientActionsOpen(true);
              }}
              onOpenReplyActions={(item) => {
                setSelectedReplyReview(item);
                setDraftReplyText(item.reply?.text ?? '');
                setIsReplyActionsOpen(true);
              }}
            />
          ))}
        </View>
      </ScrollView>

      <ClientReviewActionsSheet
        visible={isClientActionsOpen}
        onClose={() => setIsClientActionsOpen(false)}
        onReport={() => {
          if (selectedClientReview) {
            console.log('report review', selectedClientReview.id);
          }
          setIsClientActionsOpen(false);
        }}
        onReply={() => {
          setDraftReplyText(selectedClientReview?.reply?.text ?? '');
          setIsClientActionsOpen(false);
          setIsReplySheetOpen(true);
        }}
      />

      <SpecialistReplyActionsSheet
        visible={isReplyActionsOpen}
        onClose={() => setIsReplyActionsOpen(false)}
        onEdit={() => {
          setIsReplyActionsOpen(false);
          setIsEditReplyOpen(true);
        }}
        onDelete={() => {
          if (selectedReplyReview) {
            setReviews((prev) =>
              prev.map((item) => (item.id === selectedReplyReview.id ? { ...item, reply: null } : item))
            );
          }
          setIsReplyActionsOpen(false);
          setSelectedReplyReview(null);
          setDraftReplyText('');
        }}
      />

      <ReplyToReviewSheet
        visible={isReplySheetOpen}
        title="Ответить на отзыв"
        text={draftReplyText}
        submitLabel="Отправить ответ"
        onChangeText={setDraftReplyText}
        onClose={() => {
          setIsReplySheetOpen(false);
          setDraftReplyText('');
        }}
        onSubmit={() => {
          if (!selectedClientReview) {
            return;
          }

          setReviews((prev) =>
            prev.map((item) =>
              item.id === selectedClientReview.id
                ? {
                    ...item,
                    reply: {
                      id: item.reply?.id ?? `reply-${Date.now()}`,
                      date: '13 июля 2023',
                      text: draftReplyText || 'Спасибо за ваше мнение и хороший отзыв!',
                    },
                  }
                : item
            )
          );

          setIsReplySheetOpen(false);
          setSelectedClientReview(null);
          setDraftReplyText('');
        }}
      />

      <EditReplySheet
        visible={isEditReplyOpen}
        text={draftReplyText}
        onChangeText={setDraftReplyText}
        onClose={() => {
          setIsEditReplyOpen(false);
          setDraftReplyText('');
        }}
        onSubmit={() => {
          if (!selectedReplyReview?.reply) {
            return;
          }

          setReviews((prev) =>
            prev.map((item) =>
              item.id === selectedReplyReview.id && item.reply
                ? {
                    ...item,
                    reply: {
                      ...item.reply,
                      text: draftReplyText,
                    },
                  }
                : item
            )
          );

          setIsEditReplyOpen(false);
          setSelectedReplyReview(null);
          setDraftReplyText('');
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
  list: {
    paddingBottom: 12,
  },
});
