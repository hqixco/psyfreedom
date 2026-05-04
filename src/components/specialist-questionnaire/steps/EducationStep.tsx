import { Ionicons } from '@expo/vector-icons';
import { useMemo, useRef, useState } from 'react';
import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { colors, typography } from '../../../constants/theme';
import { EducationItem } from '../../../data/specialistQuestionnaireData';
import { pickImageFileName } from '../../../utils/pickImageFile';
import { QuestionnaireFileUpload } from '../QuestionnaireFileUpload';
import { QuestionnaireInput } from '../QuestionnaireInput';

const calendarIcon = require('../../../../assets/profile-calendar-icon.svg');

const universityOptions = [
  'Московский государственный университет имени М. В. Ломоносова',
  'Санкт-Петербургский государственный университет',
  'Национальный исследовательский университет "Высшая школа экономики"',
  'Московский физико-технический институт',
  'МГИМО МИД России',
  'Российская академия народного хозяйства и государственной службы',
  'Российский университет дружбы народов',
  'Казанский (Приволжский) федеральный университет',
  'Уральский федеральный университет',
  'Новосибирский государственный университет',
  'Томский государственный университет',
  'Национальный исследовательский технологический университет МИСИС',
  'Российский государственный гуманитарный университет',
  'Московский государственный психолого-педагогический университет',
  'Первый Московский государственный медицинский университет имени И. М. Сеченова',
  'Санкт-Петербургский политехнический университет Петра Великого',
  'Дальневосточный федеральный университет',
  'Сибирский федеральный университет',
  'Южный федеральный университет',
  'Российский экономический университет имени Г. В. Плеханова',
  'Финансовый университет при Правительстве Российской Федерации',
  'Московский государственный институт международных отношений',
  'Санкт-Петербургский государственный экономический университет',
  'Московский государственный технический университет имени Н. Э. Баумана',
  'Национальный исследовательский ядерный университет МИФИ',
  'Кубанский государственный университет',
  'Самарский национальный исследовательский университет имени С. П. Королева',
  'Белгородский государственный национальный исследовательский университет',
  'Пермский государственный национальный исследовательский университет',
  'Воронежский государственный университет',
  'Тюменский государственный университет',
] as const;

type EducationStepProps = {
  items: EducationItem[];
  onChange: (items: EducationItem[]) => void;
  onAdd: () => void;
};

export function EducationStep({ items, onChange, onAdd }: EducationStepProps) {
  const yearInputRef = useRef<TextInput | null>(null);
  const selectingUniversityRef = useRef(false);
  const [activeUniversityIndex, setActiveUniversityIndex] = useState<number | null>(null);
  const [universityQuery, setUniversityQuery] = useState('');

  const filteredUniversities = useMemo(() => {
    const query = universityQuery.trim().toLowerCase();

    if (!query) {
      return universityOptions;
    }

    return universityOptions.filter((item) => item.toLowerCase().includes(query));
  }, [universityQuery]);

  const updateItem = (index: number, next: EducationItem) => {
    const draft = [...items];
    draft[index] = next;
    onChange(draft);
  };

  const attachPickedFile = async (index: number, field: 'diplomaScan' | 'attachmentScan') => {
    const fileName = await pickImageFileName();
    if (!fileName) {
      return;
    }

    updateItem(index, {
      ...items[index],
      [field]: { name: fileName },
    });
  };

  const handleUniversityFocus = (index: number) => {
    setActiveUniversityIndex(index);
    setUniversityQuery(items[index]?.institution ?? '');
  };

  const handleUniversitySelect = (index: number, university: string) => {
    selectingUniversityRef.current = true;
    updateItem(index, { ...items[index], institution: university });
    setUniversityQuery(university);
    setTimeout(() => {
      setActiveUniversityIndex(null);
      selectingUniversityRef.current = false;
    }, 120);
  };

  return (
    <View>
      <Text style={styles.title}>2. Образование</Text>
      {items.map((item, index) => {
        const isUniversityOpen = activeUniversityIndex === index;
        const normalizedQuery = universityQuery.trim().toLowerCase();
        const visibleUniversities = normalizedQuery
          ? filteredUniversities
          : universityOptions;

        return (
          <View key={index} style={styles.block}>
            <Text style={styles.inputLabel}>Название учебного заведения</Text>
            <View style={styles.universityFieldWrap}>
              <TextInput
                value={isUniversityOpen ? universityQuery : item.institution || universityQuery}
                onFocus={() => handleUniversityFocus(index)}
                onBlur={() => {
                  if (activeUniversityIndex === index && !selectingUniversityRef.current) {
                    setActiveUniversityIndex(null);
                  }
                }}
                onChangeText={(text) => {
                  setActiveUniversityIndex(index);
                  setUniversityQuery(text);
                  updateItem(index, { ...item, institution: text });
                }}
                placeholder="Начните вводить название"
                placeholderTextColor={colors.muted}
                style={styles.universityInput}
              />
              <Pressable
                hitSlop={8}
                onPress={() => {
                  if (isUniversityOpen) {
                    setActiveUniversityIndex(null);
                    return;
                  }

                  handleUniversityFocus(index);
                }}
              >
                <Ionicons
                  name={isUniversityOpen ? 'chevron-up' : 'chevron-down'}
                  size={18}
                  color={colors.primaryDark}
                />
              </Pressable>
            </View>

            {isUniversityOpen && visibleUniversities.length > 0 ? (
              <View style={styles.universityDropdown}>
                {visibleUniversities.slice(0, 20).map((university) => (
                  <Pressable
                    key={university}
                    style={styles.universityOption}
                    onPressIn={() => handleUniversitySelect(index, university)}
                  >
                    <Text style={styles.universityOptionText}>{university}</Text>
                  </Pressable>
                ))}
              </View>
            ) : null}

            <QuestionnaireInput
              label="Специальность"
              value={item.specialty}
              onChangeText={(specialty) => updateItem(index, { ...item, specialty })}
              placeholder="Специальность"
              keyboardType="default"
            />

            <Text style={styles.rowLabel}>Год окончания обучения</Text>
            <View style={styles.studyRow}>
              <Pressable style={styles.yearFieldWrap} onPress={() => yearInputRef.current?.focus()}>
                <TextInput
                  ref={yearInputRef}
                  value={item.graduationYear}
                  onChangeText={(graduationYear) => updateItem(index, { ...item, graduationYear })}
                  placeholder="Год"
                  placeholderTextColor={colors.muted}
                  keyboardType="number-pad"
                  returnKeyType="done"
                  style={styles.yearField}
                />
                <Pressable style={styles.calendarIconWrap} onPress={() => yearInputRef.current?.focus()}>
                  <Image source={calendarIcon} style={styles.calendarIcon} />
                </Pressable>
              </Pressable>

              <Pressable
                style={styles.checkboxRow}
                onPress={() => updateItem(index, { ...item, stillStudying: !item.stillStudying })}
              >
                <View style={[styles.checkbox, item.stillStudying ? styles.checkboxActive : null]}>
                  {item.stillStudying ? <Ionicons name="checkmark" size={12} color={colors.white} /> : null}
                </View>
                <Text style={styles.checkboxLabel}>Еще учусь</Text>
              </Pressable>
            </View>

            <QuestionnaireFileUpload
              title="Прикрепить скан диплома"
              file={item.diplomaScan}
              onPress={() => attachPickedFile(index, 'diplomaScan')}
            />
            <QuestionnaireFileUpload
              title="Прикрепить скан вкладыша"
              file={item.attachmentScan}
              onPress={() => attachPickedFile(index, 'attachmentScan')}
            />
          </View>
        );
      })}

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
    ...typography.Inter[700],
    color: colors.primary,
  },
  block: {
    marginBottom: 12,
  },
  inputLabel: {
    fontSize: 12,
    lineHeight: 17,
    fontWeight: '400',
    color: colors.primaryDark,
    marginBottom: 6,
  },
  universityFieldWrap: {
    height: 41,
    borderRadius: 360,
    marginBottom: 8,
    marginTop: 4,
    borderWidth: 1,
    borderColor: '#A9A9A9',
    paddingHorizontal: 14,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
  },
  universityInput: {
    flex: 1,
    minWidth: 0,
    fontSize: 14,
    fontWeight: '400',
    color: colors.primaryDark,
    paddingVertical: 0,
    marginRight: 8,
  },
  universityDropdown: {
    marginTop: 8,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#A9A9A9',
    backgroundColor: colors.white,
    overflow: 'hidden',
    marginBottom: 18,
  },
  universityOption: {
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#EEF4F6',
  },
  universityOptionText: {
    fontSize: 14,
    lineHeight: 20,
    color: colors.primaryDark,
  },
  rowLabel: {
    fontSize: 12,
    lineHeight: 17,
    fontWeight: '400',
    color: colors.primaryDark,
    marginBottom: 8,
  },
  studyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 30,
    marginBottom: 14,
  },
  yearFieldWrap: {
    flex: 1,
    height: 41,
    borderRadius: 360,
    borderWidth: 1,
    borderColor: '#A9A9A9',
    paddingHorizontal: 14,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
  },
  yearField: {
    flex: 1,
    minWidth: 0,
    fontSize: 14,
    fontWeight: '400',
    color: colors.primaryDark,
    paddingVertical: 0,
  },
  calendarIconWrap: {
    marginLeft: 10,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  calendarIcon: {
    width: 20,
    height: 20,
  },
  checkboxRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    flexShrink: 0,
  },
  checkbox: {
    width: 16,
    height: 16,
    borderWidth: 1,
    borderColor: '#B7DCE2',
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  checkboxActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  checkboxLabel: {
    fontSize: 13,
    lineHeight: 18,
    color: colors.primaryDark,
  },
  addLink: {
    marginTop: 8,
    fontSize: 13,
    ...typography.Inter[700],
    color: colors.primary,
  },
});
