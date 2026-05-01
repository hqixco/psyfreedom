import { testQuestions } from '../../data/testData';
import { TestQuestionView } from '../../components/test/TestQuestionView';

type TestQuestionScreenProps = {
  onBack: () => void;
  onNext: () => void;
};

export function TestQuestionScreen({ onBack, onNext }: TestQuestionScreenProps) {
  const question = testQuestions[0];

  return (
    <TestQuestionView
      question={question.question}
      options={question.options}
      onBack={onBack}
      onNext={onNext}
    />
  );
}
