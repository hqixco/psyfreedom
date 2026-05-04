import { StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../../constants/theme';
import { SpecialistApplicationForm } from '../../../data/specialistQuestionnaireData';
import { pickImageFileName } from '../../../utils/pickImageFile';
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
        <QuestionnaireRadio
          label="Самозанятый"
          checked={value.status === 'selfEmployed'}
          onPress={() => onChange({ ...value, status: 'selfEmployed' })}
        />
      </View>

      <QuestionnaireFileUpload
        title="Прикрепить документ подтверждающий регистрацию"
        file={value.registrationDocument}
        onPress={async () => {
          const fileName = await pickImageFileName();
          if (!fileName) {
            return;
          }

          onChange({ ...value, registrationDocument: { name: fileName } });
        }}
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
        onPress={async () => {
          const fileName = await pickImageFileName();
          if (!fileName) {
            return;
          }

          onChange({ ...value, therapyDocument: { name: fileName } });
        }}
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
        onPress={async () => {
          const fileName = await pickImageFileName();
          if (!fileName) {
            return;
          }

          onChange({ ...value, supervisionDocument: { name: fileName } });
        }}
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
