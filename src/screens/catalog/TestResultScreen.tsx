import { testResult } from '../../data/testData';
import { TestResultView } from '../../components/test/TestResultView';

type TestResultScreenProps = {
  onRetry: () => void;
};

export function TestResultScreen({ onRetry }: TestResultScreenProps) {
  return (
    <TestResultView
      title={testResult.title}
      resultTitle={testResult.resultTitle}
      metrics={testResult.metrics}
      summary={testResult.summary}
      descriptions={testResult.descriptions}
      author={testResult.author}
      onRetry={onRetry}
    />
  );
}
