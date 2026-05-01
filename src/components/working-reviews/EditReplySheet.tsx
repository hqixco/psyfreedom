import { ReplyToReviewSheet } from './ReplyToReviewSheet';

export function EditReplySheet({
  visible,
  text,
  onChangeText,
  onClose,
  onSubmit,
}: {
  visible: boolean;
  text: string;
  onChangeText: (value: string) => void;
  onClose: () => void;
  onSubmit: () => void;
}) {
  return (
    <ReplyToReviewSheet
      visible={visible}
      title="Редактировать ответ"
      text={text}
      submitLabel="Сохранить изменения"
      onChangeText={onChangeText}
      onClose={onClose}
      onSubmit={onSubmit}
    />
  );
}
