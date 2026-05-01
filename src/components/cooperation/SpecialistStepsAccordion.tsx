import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/theme';
import { specialistSteps } from '../../data/cooperationData';
import { SpecialistStepItem } from './SpecialistStepItem';

export function SpecialistStepsAccordion() {
  const [openedStepId, setOpenedStepId] = useState<string | null>('publish');

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Как стать специалистом</Text>
      {specialistSteps.map((step) => (
        <SpecialistStepItem
          key={step.id}
          title={step.title}
          description={step.description}
          isOpen={openedStepId === step.id}
          onPress={() => setOpenedStepId((prev) => (prev === step.id ? null : step.id))}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginTop: 24,
  },
  heading: {
    fontSize: 26,
    lineHeight: 32,
    fontWeight: '700',
    color: colors.primaryDark,
    marginBottom: 12,
  },
});
