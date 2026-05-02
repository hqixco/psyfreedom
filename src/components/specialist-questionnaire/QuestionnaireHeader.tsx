import { Ionicons } from '@expo/vector-icons';
import { BackChevronIcon } from '../icons/BackChevronIcon';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../constants/theme';

export function QuestionnaireHeader({
  currentStep,
  totalSteps,
  onBack,
}: {
  currentStep: number;
  totalSteps: number;
  onBack: () => void;
}) {
  return (
    <View style={styles.container}>
      <Pressable onPress={onBack}>
        <BackChevronIcon color={colors.primaryDark} />
      </Pressable>
      <Text style={styles.counter}>
        {currentStep}/{totalSteps}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  counter: {
    fontSize: 15,
    ...typography.Inter[700],
    color: colors.primaryDark,
  },
});
