import { StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../../constants/theme';
import { SpecialistApplicationForm } from '../../../data/specialistQuestionnaireData';
import { QuestionnaireFileUpload } from '../QuestionnaireFileUpload';
import { QuestionnaireInput } from '../QuestionnaireInput';
import { QuestionnaireRadio } from '../QuestionnaireRadio';

export function AdditionalInfoStep({
  value,
  onChange,
}: {
  value: SpecialistApplicationForm['additionalInfo'];
  onChange: (next: SpecialistApplicationForm['additionalInfo']) => void;
}) {
  return (
    <View>
      <Text style={styles.title}>4. Дополнительная информация</Text>

      <Text style={styles.sectionTitle}>Ваш статус</Text>
      <View style={styles.radioGroup}>
        <QuestionnaireRadio label="ИП" checked={value.status === 'ip'} onPress={() => onChange({ ...value, status: 'ip' })} />
        <QuestionnaireRadio label="Самозанятый" checked={value.status === 'selfEmployed'} onPress={() => onChange({ ...value, status: 'selfEmployed' })} />
      </View>

      <QuestionnaireFileUpload
        title="Прикрепить документ подтверждающий регистрацию"
        file={value.registrationDocument}
        onPress={() => onChange({ ...value, registrationDocument: { name: 'document.jpg' } })}
      />
      <QuestionnaireInput
        label="Количество часов личной терапии"
        value={value.therapyHours}
        onChangeText={(therapyHours) => onChange({ ...value, therapyHours })}
        keyboardType="number-pad"
      />
      <QuestionnaireFileUpload
        title="Прикрепить документ от Вашего психолога/психотерапевта"
        file={value.therapyDocument}
        onPress={() => onChange({ ...value, therapyDocument: { name: 'document.jpg' } })}
      />
      <QuestionnaireInput
        label="Количество часов супервизии за последний завершенный календарный год"
        value={value.supervisionHours}
        onChangeText={(supervisionHours) => onChange({ ...value, supervisionHours })}
        keyboardType="number-pad"
      />
      <QuestionnaireFileUpload
        title="Прикрепить документ от Вашего психолога/психотерапевта"
        file={value.supervisionDocument}
        onPress={() => onChange({ ...value, supervisionDocument: { name: 'document.jpg' } })}
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
    ...typography.Inter[700],
    color: colors.primary,
  },
  sectionTitle: {
    marginBottom: 12,
    fontSize: 14,
    lineHeight: 18,
    ...typography.Inter[700],
    color: colors.primaryDark,
  },
  radioGroup: {
    marginBottom: 8,
  },
});
