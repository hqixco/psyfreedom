import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../constants/theme';
import {
  methodOptions,
  specializationOptions,
  SpecialistApplicationForm,
} from '../../../data/specialistQuestionnaireData';
import { QuestionnaireCheckbox } from '../QuestionnaireCheckbox';
import { QuestionnaireTextArea } from '../QuestionnaireTextArea';

export function SpecializationStep({
  value,
  onChange,
}: {
  value: SpecialistApplicationForm['specialization'];
  onChange: (next: SpecialistApplicationForm['specialization']) => void;
}) {
  const toggleSpecialization = (id: string) => {
    const exists = value.specializations.includes(id);
    onChange({
      ...value,
      specializations: exists
        ? value.specializations.filter((item) => item !== id)
        : [...value.specializations, id],
    });
  };

  const toggleMethod = (id: string) => {
    const exists = value.methods.includes(id);
    onChange({
      ...value,
      methods: exists ? value.methods.filter((item) => item !== id) : [...value.methods, id],
    });
  };

  return (
    <View>
      <Text style={styles.title}>3. Специализация и методы работы</Text>

      <Text style={styles.sectionTitle}>Специализация</Text>
      <Text style={styles.sectionHint}>Можно выбрать несколько</Text>
      <View style={styles.list}>
        {specializationOptions.map((option) => (
          <QuestionnaireCheckbox
            key={option.id}
            label={option.title}
            checked={value.specializations.includes(option.id)}
            onToggle={() => toggleSpecialization(option.id)}
          />
        ))}
      </View>

      <Text style={styles.sectionTitle}>Методы работы</Text>
      <Text style={styles.sectionHint}>Можно выбрать несколько</Text>
      <View style={styles.list}>
        {methodOptions.map((option) => (
          <QuestionnaireCheckbox
            key={option.id}
            label={option.title}
            checked={value.methods.includes(option.id)}
            onToggle={() => toggleMethod(option.id)}
          />
        ))}
      </View>

      <QuestionnaireTextArea
        value={value.motivationText}
        onChangeText={(motivationText) => onChange({ ...value, motivationText })}
        placeholder="Напишите мотивирующий текст"
      />
      <QuestionnaireTextArea
        value={value.aboutText}
        onChangeText={(aboutText) => onChange({ ...value, aboutText })}
        placeholder="Напишите о себе"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    marginTop: 18,
    marginBottom: 14,
    fontSize: 20,
    lineHeight: 26,
    fontWeight: '700',
    color: colors.primary,
  },
  sectionTitle: {
    marginTop: 8,
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '700',
    color: colors.primaryDark,
  },
  sectionHint: {
    marginTop: 4,
    marginBottom: 10,
    fontSize: 12,
    lineHeight: 16,
    color: colors.muted,
  },
  list: {
    marginBottom: 10,
  },
});
