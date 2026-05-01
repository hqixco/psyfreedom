import { PendingReview } from '../../data/myReviewsData';
import { EditReviewSheet } from './EditReviewSheet';

export function LeaveReviewSheet({
  visible,
  item,
  rating,
  text,
  onChangeRating,
  onChangeText,
  onClose,
  onSubmit,
}: {
  visible: boolean;
  item: PendingReview | null;
  rating: number;
  text: string;
  onChangeRating: (value: number) => void;
  onChangeText: (value: string) => void;
  onClose: () => void;
  onSubmit: () => void;
}) {
  return (
    <EditReviewSheet
      visible={visible}
      title="Оставить отзыв"
      objectTitle={item?.targetTitle ?? ''}
      rating={rating}
      text={text}
      submitLabel="Оставить отзыв"
      onChangeRating={onChangeRating}
      onChangeText={onChangeText}
      onClose={onClose}
      onSubmit={onSubmit}
    />
  );
}
