import { useState } from 'react';
import { EditReviewSheet } from '../profile-reviews/EditReviewSheet';

type ReviewSheetProps = {
  visible: boolean;
  onClose: () => void;
};

export function ReviewSheet({ visible, onClose }: ReviewSheetProps) {
  const [rating, setRating] = useState(5);
  const [text, setText] = useState('');

  return (
    <EditReviewSheet
      visible={visible}
      title="Оставить отзыв"
      objectTitle=""
      rating={rating}
      text={text}
      submitLabel="Оставить отзыв"
      onChangeRating={setRating}
      onChangeText={setText}
      onClose={onClose}
      onSubmit={() => {
        console.log('submit review', { rating, text });
        onClose();
      }}
    />
  );
}
