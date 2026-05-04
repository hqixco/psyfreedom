import { AuthHeader } from '../auth/AuthHeader';

export function FaqHeader({ onBack }: { onBack: () => void }) {
  return <AuthHeader onBack={onBack} title="Вопрос-ответ" />;
}
