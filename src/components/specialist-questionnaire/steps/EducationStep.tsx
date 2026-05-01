import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../constants/theme';
import { EducationItem } from '../../../data/specialistQuestionnaireData';
import { QuestionnaireCheckbox } from '../QuestionnaireCheckbox';
import { QuestionnaireFileUpload } from '../QuestionnaireFileUpload';
import { QuestionnaireInput } from '../QuestionnaireInput';
import { QuestionnaireSelect } from '../QuestionnaireSelect';

export function EducationStep({
  items,
  onChange,
  onAdd,
}: {
  items: EducationItem[];
  onChange: (items: EducationItem[]) => void;
  onAdd: () => void;
}) {
  const updateItem = (index: number, next: EducationItem) => {
    const draft = [...items];
    draft[index] = next;
    onChange(draft);
  };

  return (
    <View>
      <Text style={styles.title}>2. Образование</Text>
      {items.map((item, index) => (
        <View key={index} style={styles.block}>
          <QuestionnaireSelect
            label="Название учебного заведения"
            value={item.institution}
            placeholder="Начните вводить название"
            onPress={() => console.log('select institution')}
          />
          <QuestionnaireInput
            label="Специальность"
            value={item.specialty}
            onChangeText={(specialty) => updateItem(index, { ...item, specialty })}
          />
          <QuestionnaireSelect
            label="Год окончания обучения"
            value={item.graduationYear}
            placeholder="Год окончания"
            onPress={() => console.log('pick graduation year')}
            icon="calendar-outline"
          />
          <QuestionnaireCheckbox
            label="Еще учусь"
            checked={item.stillStudying}
            onToggle={() => updateItem(index, { ...item, stillStudying: !item.stillStudying })}
          />
          <QuestionnaireFileUpload
            title="Прикрепить скан диплома"
            file={item.diplomaScan}
            onPress={() => updateItem(index, { ...item, diplomaScan: { name: 'document.jpg' } })}
          />
          <QuestionnaireFileUpload
            title="Прикрепить скан вкладыш"
            file={item.attachmentScan}
            onPress={() => updateItem(index, { ...item, attachmentScan: { name: 'document.jpg' } })}
          />
        </View>
      ))}

      <Pressable onPress={onAdd}>
        <Text style={styles.addLink}>+ Добавить образование</Text>
      </Pressable>
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
  block: {
    marginBottom: 12,
  },
  addLink: {
    marginTop: 8,
    fontSize: 13,
    fontWeight: '700',
    color: colors.primary,
  },
});
