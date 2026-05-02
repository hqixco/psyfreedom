import { StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../../constants/theme';
import { SpecialistApplicationForm } from '../../../data/specialistQuestionnaireData';
import { QuestionnaireFileUpload } from '../QuestionnaireFileUpload';
import { QuestionnaireInput } from '../QuestionnaireInput';

export function BasicInfoStep({
  value,
  onChange,
}: {
  value: SpecialistApplicationForm['basicInfo'];
  onChange: (next: SpecialistApplicationForm['basicInfo']) => void;
}) {
  return (
    <View>
      <Text style={styles.title}>1. Основная информация</Text>
      <QuestionnaireInput label="Имя Фамилия или название организации" value={value.name} onChangeText={(name) => onChange({ ...value, name })} />
      <QuestionnaireInput label="Возраст" value={value.age} onChangeText={(age) => onChange({ ...value, age })} keyboardType="number-pad" />
      <QuestionnaireInput label="Стаж работы" value={value.experience} onChangeText={(experience) => onChange({ ...value, experience })} />
      <QuestionnaireFileUpload
        title="Если вы меняли имя или фамилию прикрепите подтверждающий документ"
        file={value.nameChangeDocument}
        onPress={() => onChange({ ...value, nameChangeDocument: { name: 'document.jpg' } })}
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
});
