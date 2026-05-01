import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/theme';

export function QuestionnaireFooter({
  onBack,
  onNext,
  nextDisabled,
  bottomInset,
}: {
  onBack: () => void;
  onNext: () => void;
  nextDisabled: boolean;
  bottomInset: number;
}) {
  return (
    <View style={[styles.container, { paddingBottom: 10 + bottomInset }]}>
      <Pressable style={styles.backButton} onPress={onBack}>
        <Text style={styles.backText}>Назад</Text>
      </Pressable>
      <Pressable
        style={[styles.nextButton, nextDisabled ? styles.nextButtonDisabled : null]}
        onPress={onNext}
        disabled={nextDisabled}
      >
        <Text style={styles.nextText}>Далее</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.white,
    paddingHorizontal: 16,
    paddingTop: 10,
    flexDirection: 'row',
    gap: 8,
  },
  backButton: {
    flex: 1,
    height: 44,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextButton: {
    flex: 1,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextButtonDisabled: {
    backgroundColor: '#B7DCE2',
  },
  backText: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: '700',
  },
  nextText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '700',
  },
});
