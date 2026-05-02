import { useEffect, useState } from 'react';
import { BackChevronIcon } from '../../components/icons/BackChevronIcon';
import { typography } from '../../constants/theme';
import {
  Alert,
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  initialDatingForm,
  interestTags,
  mockDatingPhoto,
  partnerQualityTags,
  relationshipAspectTags,
} from './datingData';
import { datingColors, datingCommonStyles } from './datingStyles';

const { width: screenWidth } = Dimensions.get('window');
const fieldGap = 8;
const halfFieldWidth = (screenWidth - 32 - fieldGap) / 2;

type DatingQuestionnaireScreenProps = {
  onBackToClub: () => void;
  onSubmitQuestionnaire?: () => void;
  setBottomTabsVisible?: (visible: boolean) => void;
};

type DatingForm = typeof initialDatingForm;
type ChildItem = DatingForm['children']['children'][number];

type TextInputFieldProps = {
  label: string;
  value: string;
  onChangeText: (value: string) => void;
  placeholder: string;
  containerStyle?: StyleProp<ViewStyle>;
  keyboardType?: 'default' | 'numeric';
};

function TextInputField({
  label,
  value,
  onChangeText,
  placeholder,
  containerStyle,
  keyboardType,
}: TextInputFieldProps) {
  return (
    <View style={containerStyle}>
      <Text style={datingCommonStyles.label}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={datingColors.muted}
        style={datingCommonStyles.input}
        keyboardType={keyboardType}
      />
    </View>
  );
}

type SelectFieldProps = {
  label: string;
  value: string;
  placeholder: string;
  onPress: () => void;
  containerStyle?: StyleProp<ViewStyle>;
};

function SelectField({ label, value, placeholder, onPress, containerStyle }: SelectFieldProps) {
  return (
    <View style={containerStyle}>
      <Text style={datingCommonStyles.label}>{label}</Text>
      <Pressable style={styles.selectField} onPress={onPress}>
        <Text style={[styles.selectText, !value ? styles.selectPlaceholder : null]}>
          {value || placeholder}
        </Text>
        <Ionicons name="chevron-down" size={18} color={datingColors.muted} />
      </Pressable>
    </View>
  );
}

type RadioGroupProps = {
  options: { label: string; value: string }[];
  value: string;
  onChange: (value: string) => void;
};

function RadioGroup({ options, value, onChange }: RadioGroupProps) {
  return (
    <View style={styles.radioRow}>
      {options.map((option) => {
        const isSelected = value === option.value;

        return (
          <Pressable key={option.value} style={styles.radioItem} onPress={() => onChange(option.value)}>
            <View style={[styles.radioOuter, isSelected ? styles.radioOuterActive : null]}>
              {isSelected ? <View style={styles.radioInner} /> : null}
            </View>
            <Text style={styles.radioText}>{option.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

type TextAreaFieldProps = {
  label: string;
  value: string;
  onChangeText: (value: string) => void;
  placeholder: string;
  hint: string;
};

function TextAreaField({ label, value, onChangeText, placeholder, hint }: TextAreaFieldProps) {
  return (
    <View>
      <Text style={datingCommonStyles.label}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={datingColors.muted}
        style={datingCommonStyles.textarea}
        multiline
        maxLength={500}
        textAlignVertical="top"
      />
      <Text style={datingCommonStyles.hint}>{hint}</Text>
    </View>
  );
}

type TagSelectorProps = {
  title: string;
  subtitle: string;
  tags: string[];
  selected: string[];
  onToggle: (tag: string) => void;
  limit: number;
};

function TagSelector({ title, subtitle, tags, selected, onToggle, limit }: TagSelectorProps) {
  return (
    <View>
      <Text style={styles.labelWithCounter}>
        {title} {selected.length}/{limit}
      </Text>
      <Text style={styles.tagSubtitle}>{subtitle}</Text>
      <View style={styles.tagsWrap}>
        {tags.map((tag) => {
          const active = selected.includes(tag);

          return (
            <Pressable
              key={tag}
              style={[datingCommonStyles.tag, active ? datingCommonStyles.tagActive : null]}
              onPress={() => onToggle(tag)}
            >
              <Text style={[datingCommonStyles.tagText, active ? datingCommonStyles.tagTextActive : null]}>
                {tag}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

type MockFileUploadProps = {
  title: string;
  fileName: string | null;
  onPress: () => void;
};

function MockFileUpload({ title, fileName, onPress }: MockFileUploadProps) {
  return (
    <Pressable style={styles.uploadBox} onPress={onPress}>
      <Ionicons name="attach" size={20} color={datingColors.dark} style={styles.uploadIcon} />
      <View style={styles.uploadContent}>
        <Text style={styles.uploadTitle}>{title}</Text>
        <Text style={styles.uploadDescription}>
          Размер документа не должен превышать 25 Мб.{'\n'}Формат: .jpeg, .jpg, .png
        </Text>
        {fileName ? <Text style={styles.uploadFileName}>{fileName} прикреплен</Text> : null}
      </View>
    </Pressable>
  );
}

type MockPhotoUploaderProps = {
  photos: { id: string; image: number }[];
  onAddPhoto: () => void;
  onRemovePhoto: (id: string) => void;
};

function MockPhotoUploader({ photos, onAddPhoto, onRemovePhoto }: MockPhotoUploaderProps) {
  return (
    <View>
      <Text style={styles.labelWithCounter}>Загрузите фото {Math.max(photos.length, 1)} из 10</Text>
      <View style={styles.photoGrid}>
        {photos.map((photo, index) => (
          <View key={photo.id} style={styles.photoCard}>
            <Image source={photo.image} style={styles.photoImage} />
            {index === 0 ? (
              <View style={styles.mainPhotoBadge}>
                <Text style={styles.mainPhotoBadgeText}>Главная</Text>
              </View>
            ) : null}
            <Pressable style={styles.removePhotoButton} onPress={() => onRemovePhoto(photo.id)}>
              <Ionicons name="close" size={14} color={datingColors.white} />
            </Pressable>
          </View>
        ))}

        {photos.length < 10 ? (
          <Pressable style={styles.addPhotoCard} onPress={onAddPhoto}>
            <Ionicons name="add" size={24} color={datingColors.pink} />
            <Text style={styles.addPhotoText}>Добавить фото</Text>
          </Pressable>
        ) : null}
      </View>
    </View>
  );
}

type FooterButtonsProps = {
  showSkip: boolean;
  onSkip: () => void;
  onNext: () => void;
};

function FooterButtons({ showSkip, onSkip, onNext }: FooterButtonsProps) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[datingCommonStyles.footer, { paddingBottom: 10 + insets.bottom }]}>
      {showSkip ? (
        <Pressable style={datingCommonStyles.outlineButton} onPress={onSkip}>
          <Text style={datingCommonStyles.outlineButtonText}>Пропустить</Text>
        </Pressable>
      ) : null}
      <Pressable style={datingCommonStyles.primaryButton} onPress={onNext}>
        <Text style={datingCommonStyles.primaryButtonText}>Далее</Text>
      </Pressable>
    </View>
  );
}

function InlineCheckbox({
  checked,
  label,
  onPress,
}: {
  checked: boolean;
  label: string;
  onPress: () => void;
}) {
  return (
    <Pressable style={styles.inlineCheckbox} onPress={onPress}>
      <View style={[styles.checkboxBox, checked ? styles.checkboxBoxActive : null]}>
        {checked ? <Ionicons name="checkmark" size={12} color={datingColors.white} /> : null}
      </View>
      <Text style={styles.inlineCheckboxText}>{label}</Text>
    </Pressable>
  );
}

export function DatingQuestionnaireScreen({
  onBackToClub,
  onSubmitQuestionnaire,
  setBottomTabsVisible,
}: DatingQuestionnaireScreenProps) {
  const insets = useSafeAreaInsets();
  const [currentStep, setCurrentStep] = useState(1);
  const [form, setForm] = useState<DatingForm>(initialDatingForm);

  useEffect(() => {
    if (!setBottomTabsVisible) {
      return;
    }

    setBottomTabsVisible(false);
    return () => setBottomTabsVisible(true);
  }, [setBottomTabsVisible]);

  const updateMainInfo = <K extends keyof DatingForm['mainInfo']>(key: K, value: DatingForm['mainInfo'][K]) => {
    setForm((prev) => ({ ...prev, mainInfo: { ...prev.mainInfo, [key]: value } }));
  };

  const updateSection = <S extends keyof DatingForm, K extends keyof DatingForm[S]>(
    section: S,
    key: K,
    value: DatingForm[S][K]
  ) => {
    setForm((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [key]: value,
      },
    }));
  };

  const cycleValue = (current: string, values: string[], setter: (value: string) => void) => {
    const currentIndex = values.indexOf(current);
    const nextIndex = currentIndex >= 0 ? (currentIndex + 1) % values.length : 0;
    setter(values[nextIndex]);
  };

  const toggleLimitedTag = (current: string[], tag: string, setter: (next: string[]) => void, limit = 10) => {
    if (current.includes(tag)) {
      setter(current.filter((item) => item !== tag));
      return;
    }

    if (current.length >= limit) {
      return;
    }

    setter([...current, tag]);
  };

  const handleBack = () => {
    if (currentStep === 1) {
      onBackToClub();
      return;
    }

    setCurrentStep((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentStep === 7) {
      console.log('dating questionnaire submitted', form);
      Alert.alert('Анкета отправлена', 'Анкета успешно отправлена.');
      onSubmitQuestionnaire?.();
      setCurrentStep(1);
      setForm(initialDatingForm);
      onBackToClub();
      return;
    }

    setCurrentStep((prev) => prev + 1);
  };

  const renderStep = () => {
    if (currentStep === 1) {
      return (
        <View>
          <Text style={styles.stepTitle}>Главная информация</Text>

          <TextInputField
            label="Имя *"
            value={form.mainInfo.name}
            onChangeText={(value) => updateMainInfo('name', value)}
            placeholder="Введите имя"
          />

          <View>
            <View style={styles.labelRow}>
              <Text style={datingCommonStyles.label}>Фамилия *</Text>
              <InlineCheckbox
                checked={form.mainInfo.hideSurname}
                label="Скрыть"
                onPress={() => updateMainInfo('hideSurname', !form.mainInfo.hideSurname)}
              />
            </View>
            <TextInput
              value={form.mainInfo.surname}
              onChangeText={(value) => updateMainInfo('surname', value)}
              placeholder="Введите фамилию"
              placeholderTextColor={datingColors.muted}
              style={datingCommonStyles.input}
            />
          </View>

          <View>
            <View style={styles.labelRow}>
              <Text style={datingCommonStyles.label}>Место жительства</Text>
              <InlineCheckbox
                checked={form.mainInfo.hideCity}
                label="Скрыть"
                onPress={() => updateMainInfo('hideCity', !form.mainInfo.hideCity)}
              />
            </View>
            <TextInput
              value={form.mainInfo.city}
              onChangeText={(value) => updateMainInfo('city', value)}
              placeholder="Введите название города"
              placeholderTextColor={datingColors.muted}
              style={datingCommonStyles.input}
            />
          </View>

          <Text style={datingCommonStyles.label}>Пол *</Text>
          <RadioGroup
            options={[
              { label: 'Мужской', value: 'male' },
              { label: 'Женский', value: 'female' },
            ]}
            value={form.mainInfo.gender}
            onChange={(value) => updateMainInfo('gender', value as DatingForm['mainInfo']['gender'])}
          />

          <View>
            <View style={styles.labelRow}>
              <Text style={datingCommonStyles.label}>Возраст</Text>
              <InlineCheckbox
                checked={form.mainInfo.hideAge}
                label="Скрыть"
                onPress={() => updateMainInfo('hideAge', !form.mainInfo.hideAge)}
              />
            </View>
            <TextInput
              value={form.mainInfo.age}
              onChangeText={(value) => updateMainInfo('age', value)}
              placeholder="Введите возраст"
              placeholderTextColor={datingColors.muted}
              style={datingCommonStyles.input}
              keyboardType="numeric"
            />
          </View>

          <View style={styles.twoColumnRow}>
            <SelectField
              label="Семейное положение *"
              value={form.mainInfo.maritalStatus}
              placeholder="Выберите"
              containerStyle={styles.halfField}
              onPress={() =>
                cycleValue(form.mainInfo.maritalStatus, ['Не замужем', 'Женат', 'В разводе'], (value) =>
                  updateMainInfo('maritalStatus', value)
                )
              }
            />
            <SelectField
              label="Знак зодиака"
              value={form.mainInfo.zodiac}
              placeholder="Выберите"
              containerStyle={styles.halfField}
              onPress={() =>
                cycleValue(form.mainInfo.zodiac, ['Овен', 'Телец', 'Близнецы'], (value) =>
                  updateMainInfo('zodiac', value)
                )
              }
            />
          </View>

          <View style={styles.twoColumnRow}>
            <SelectField
              label="Религия"
              value={form.mainInfo.religion}
              placeholder="Выберите"
              containerStyle={styles.halfField}
              onPress={() =>
                cycleValue(form.mainInfo.religion, ['Христианство', 'Ислам', 'Не важно'], (value) =>
                  updateMainInfo('religion', value)
                )
              }
            />
            <TextInputField
              label="Стаж работы"
              value={form.mainInfo.workExperience}
              onChangeText={(value) => updateMainInfo('workExperience', value)}
              placeholder="Введите"
              containerStyle={styles.halfField}
            />
          </View>

          <SelectField
            label="Вредные привычки"
            value={form.mainInfo.badHabits}
            placeholder="Не выбрано"
            onPress={() =>
              cycleValue(form.mainInfo.badHabits, ['Нет', 'Иногда', 'Воздержусь'], (value) =>
                updateMainInfo('badHabits', value)
              )
            }
          />

          <SelectField
            label="Цель посещения сайта"
            value={form.mainInfo.visitGoal}
            placeholder="Выберите из списка"
            onPress={() =>
              cycleValue(form.mainInfo.visitGoal, ['Серьезные отношения', 'Общение', 'Дружба'], (value) =>
                updateMainInfo('visitGoal', value)
              )
            }
          />

          <TextAreaField
            label="Главное о себе *"
            value={form.mainInfo.about}
            onChangeText={(value) => updateMainInfo('about', value)}
            placeholder="Напиши главное о себе"
            hint="Не более 500 знаков включая пробелы."
          />

          <TextAreaField
            label="Мои мечты"
            value={form.mainInfo.dreams}
            onChangeText={(value) => updateMainInfo('dreams', value)}
            placeholder="О чем вы мечтаете"
            hint="Не более 500 знаков включая пробелы."
          />

          <TagSelector
            title="Интересы"
            subtitle="Выберите из предложенных или напишите свой"
            tags={interestTags}
            selected={form.mainInfo.interests}
            limit={10}
            onToggle={(tag) =>
              toggleLimitedTag(form.mainInfo.interests, tag, (next) => updateMainInfo('interests', next))
            }
          />

          <MockFileUpload
            title="Прикрепить сертификат о прохождении курса *"
            fileName={form.mainInfo.certificate?.fileName ?? null}
            onPress={() => updateMainInfo('certificate', { fileName: 'certificate.jpg' })}
          />

          <MockPhotoUploader
            photos={form.mainInfo.photos}
            onAddPhoto={() => {
              if (form.mainInfo.photos.length >= 10) {
                return;
              }

              updateMainInfo('photos', [
                ...form.mainInfo.photos,
                { id: `photo-${Date.now()}`, image: mockDatingPhoto },
              ]);
            }}
            onRemovePhoto={(id) =>
              updateMainInfo(
                'photos',
                form.mainInfo.photos.filter((item) => item.id !== id)
              )
            }
          />
        </View>
      );
    }

    if (currentStep === 2) {
      return (
        <View>
          <Text style={styles.stepTitle}>Сфера деятельности</Text>
          <TextInputField
            label="Образование"
            value={form.work.education}
            onChangeText={(value) => updateSection('work', 'education', value)}
            placeholder="Высшее"
          />
          <TextInputField
            label="Профессия по диплому"
            value={form.work.diplomaProfession}
            onChangeText={(value) => updateSection('work', 'diplomaProfession', value)}
            placeholder="Инженер"
          />
          <TextInputField
            label="Место учебы"
            value={form.work.studyPlace}
            onChangeText={(value) => updateSection('work', 'studyPlace', value)}
            placeholder="МГТУ имю И. Федорова"
          />
          <TextInputField
            label="Работа в настоящий момент"
            value={form.work.currentWork}
            onChangeText={(value) => updateSection('work', 'currentWork', value)}
            placeholder="Начальник отдела"
          />
        </View>
      );
    }

    if (currentStep === 3) {
      return (
        <View>
          <Text style={styles.stepTitle}>Внешность</Text>
          <View style={styles.twoColumnRow}>
            <TextInputField
              label="Рост"
              value={form.appearance.height}
              onChangeText={(value) => updateSection('appearance', 'height', value)}
              placeholder="170"
              containerStyle={styles.halfField}
            />
            <TextInputField
              label="Вес"
              value={form.appearance.weight}
              onChangeText={(value) => updateSection('appearance', 'weight', value)}
              placeholder="65"
              containerStyle={styles.halfField}
            />
          </View>
          <TextInputField
            label="Цвет глаз"
            value={form.appearance.eyeColor}
            onChangeText={(value) => updateSection('appearance', 'eyeColor', value)}
            placeholder="Голубые"
          />
          <TextInputField
            label="Цвет волос"
            value={form.appearance.hairColor}
            onChangeText={(value) => updateSection('appearance', 'hairColor', value)}
            placeholder="Каштановые"
          />
          <TextInputField
            label="Телосложение"
            value={form.appearance.bodyType}
            onChangeText={(value) => updateSection('appearance', 'bodyType', value)}
            placeholder="Изящная"
          />
          <TextInputField
            label="Боди-Арт"
            value={form.appearance.bodyArt}
            onChangeText={(value) => updateSection('appearance', 'bodyArt', value)}
            placeholder="Воздержусь"
          />
        </View>
      );
    }

    if (currentStep === 4) {
      return (
        <View>
          <Text style={styles.stepTitle}>Информация о детях</Text>

          <Text style={datingCommonStyles.label}>Наличие детей</Text>
          <RadioGroup
            options={[
              { label: 'Да', value: 'yes' },
              { label: 'Нет', value: 'no' },
            ]}
            value={form.children.hasChildren}
            onChange={(value) => updateSection('children', 'hasChildren', value as 'yes' | 'no')}
          />

          <Text style={datingCommonStyles.label}>Желание иметь (еще) детей</Text>
          <RadioGroup
            options={[
              { label: 'Да', value: 'yes' },
              { label: 'Нет', value: 'no' },
            ]}
            value={form.children.wantsMoreChildren}
            onChange={(value) => updateSection('children', 'wantsMoreChildren', value as 'yes' | 'no')}
          />

          {form.children.hasChildren === 'yes'
            ? form.children.children.map((child, index) => (
                <View key={`child-${index}`} style={styles.childCard}>
                  <Text style={styles.childTitle}>Ребенок</Text>
                  <Text style={datingCommonStyles.label}>Пол *</Text>
                  <RadioGroup
                    options={[
                      { label: 'Мужской', value: 'male' },
                      { label: 'Женский', value: 'female' },
                    ]}
                    value={child.gender}
                    onChange={(value) => {
                      const nextChildren = [...form.children.children];
                      nextChildren[index] = { ...child, gender: value as ChildItem['gender'] };
                      updateSection('children', 'children', nextChildren);
                    }}
                  />
                  <TextInputField
                    label="Возраст"
                    value={child.age}
                    onChangeText={(value) => {
                      const nextChildren = [...form.children.children];
                      nextChildren[index] = { ...child, age: value };
                      updateSection('children', 'children', nextChildren);
                    }}
                    placeholder="15 лет"
                  />
                  <TextInputField
                    label="Проживает"
                    value={child.lives}
                    onChangeText={(value) => {
                      const nextChildren = [...form.children.children];
                      nextChildren[index] = { ...child, lives: value };
                      updateSection('children', 'children', nextChildren);
                    }}
                    placeholder="Отдельно"
                  />
                </View>
              ))
            : null}

          {form.children.hasChildren === 'yes' ? (
            <Pressable
              onPress={() =>
                updateSection('children', 'children', [
                  ...form.children.children,
                  { gender: 'male', age: '', lives: '' },
                ])
              }
            >
              <Text style={styles.addMoreText}>+ Добавить ребенка</Text>
            </Pressable>
          ) : null}
        </View>
      );
    }

    if (currentStep === 5) {
      return (
        <View>
          <Text style={styles.stepTitle}>Ваш идеальный партнер</Text>
          <TextInputField
            label="Возраст"
            value={form.partner.ageRange}
            onChangeText={(value) => updateSection('partner', 'ageRange', value)}
            placeholder="20 - 25 лет"
          />
          <TextInputField
            label="Наличие детей"
            value={form.partner.hasChildren}
            onChangeText={(value) => updateSection('partner', 'hasChildren', value)}
            placeholder="Нет"
          />
          <TextInputField
            label="Рост"
            value={form.partner.height}
            onChangeText={(value) => updateSection('partner', 'height', value)}
            placeholder="160-180 см"
          />
          <TextInputField
            label="Религия"
            value={form.partner.religion}
            onChangeText={(value) => updateSection('partner', 'religion', value)}
            placeholder="Не важно"
          />
          <TextInputField
            label="Место проживания с партнером"
            value={form.partner.livingPlace}
            onChangeText={(value) => updateSection('partner', 'livingPlace', value)}
            placeholder="В крупном городе"
          />
          <TextInputField
            label="Идеальный партнер"
            value={form.partner.idealPartner}
            onChangeText={(value) => updateSection('partner', 'idealPartner', value)}
            placeholder="Помогать мужу в его работе"
          />
          <TextAreaField
            label="Что мне важнее всего в отношениях?"
            value={form.partner.importantInRelationship}
            onChangeText={(value) => updateSection('partner', 'importantInRelationship', value)}
            placeholder="Напиши"
            hint="Не более 500 знаков включая пробелы."
          />
          <TextAreaField
            label="Пожелания будущему партнеру"
            value={form.partner.wishes}
            onChangeText={(value) => updateSection('partner', 'wishes', value)}
            placeholder="Напишите"
            hint="Не более 500 знаков включая пробелы."
          />
          <TagSelector
            title="Какими личными качествами должен обладать партнер?"
            subtitle="Можно ввести или выбрать из предложенных"
            tags={partnerQualityTags}
            selected={form.partner.qualities}
            limit={10}
            onToggle={(tag) =>
              toggleLimitedTag(form.partner.qualities, tag, (next) =>
                updateSection('partner', 'qualities', next)
              )
            }
          />
          <TagSelector
            title="Важные аспекты взаимоотношений"
            subtitle="Можно ввести или выбрать из предложенных"
            tags={relationshipAspectTags}
            selected={form.partner.aspects}
            limit={10}
            onToggle={(tag) =>
              toggleLimitedTag(form.partner.aspects, tag, (next) => updateSection('partner', 'aspects', next))
            }
          />
        </View>
      );
    }

    if (currentStep === 6) {
      return (
        <View>
          <Text style={styles.stepTitle}>Идеальный отпуск</Text>
          <TextInputField
            label="Место отдыха"
            value={form.vacation.place}
            onChangeText={(value) => updateSection('vacation', 'place', value)}
            placeholder="Отели"
          />
          <TextInputField
            label="Мой идеальный отпуск это"
            value={form.vacation.idealVacation}
            onChangeText={(value) => updateSection('vacation', 'idealVacation', value)}
            placeholder="Солнце, море и песок"
          />
          <TextInputField
            label="Любимое время года"
            value={form.vacation.season}
            onChangeText={(value) => updateSection('vacation', 'season', value)}
            placeholder="Весна"
          />
        </View>
      );
    }

    return (
      <View>
        <Text style={styles.stepTitle}>Домашние животные</Text>
        <Text style={datingCommonStyles.label}>Есть домашние животные</Text>
        <RadioGroup
          options={[
            { label: 'Да', value: 'yes' },
            { label: 'Нет', value: 'no' },
          ]}
          value={form.pets.hasPets}
          onChange={(value) => updateSection('pets', 'hasPets', value as 'yes' | 'no')}
        />
        <TextInputField
          label="Вы любите домашних животных?"
          value={form.pets.attitude}
          onChangeText={(value) => updateSection('pets', 'attitude', value)}
          placeholder="Отношусь нейтрально"
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={datingCommonStyles.screen} edges={['top']}>
      <KeyboardAvoidingView style={styles.flex} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <View style={styles.flex}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 12, paddingBottom: 110 + insets.bottom }}
          >
            <View style={styles.header}>
              <Pressable onPress={handleBack}>
                <BackChevronIcon color={datingColors.dark} />
              </Pressable>
              <Text style={styles.counter}>{currentStep}/7</Text>
            </View>

            {renderStep()}
          </ScrollView>

          <FooterButtons
            showSkip={currentStep > 1}
            onSkip={() => {
              if (currentStep < 7) {
                setCurrentStep((prev) => prev + 1);
              }
            }}
            onNext={handleNext}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  header: {
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  counter: {
    fontSize: 18,
    ...typography.Inter[700],
    color: datingColors.dark,
  },
  stepTitle: {
    fontSize: 22,
    lineHeight: 28,
    ...typography.Inter[700],
    color: datingColors.dark,
    marginTop: 10,
    marginBottom: 16,
  },
  labelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  inlineCheckbox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  inlineCheckboxText: {
    marginLeft: 6,
    fontSize: 13,
    color: datingColors.dark,
  },
  checkboxBox: {
    width: 16,
    height: 16,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: datingColors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxBoxActive: {
    backgroundColor: datingColors.pink,
    borderColor: datingColors.pink,
  },
  radioRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 12,
  },
  radioItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 18,
    marginBottom: 8,
  },
  radioOuter: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: '#B7DCE2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioOuterActive: {
    borderColor: datingColors.pink,
  },
  radioInner: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: datingColors.pink,
  },
  radioText: {
    marginLeft: 8,
    fontSize: 14,
    color: datingColors.dark,
  },
  twoColumnRow: {
    flexDirection: 'row',
    gap: fieldGap,
  },
  halfField: {
    width: halfFieldWidth,
  },
  selectField: {
    height: 38,
    borderRadius: 19,
    borderWidth: 1,
    borderColor: datingColors.border,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  selectText: {
    flex: 1,
    fontSize: 14,
    color: datingColors.dark,
    marginRight: 8,
  },
  selectPlaceholder: {
    color: datingColors.muted,
  },
  labelWithCounter: {
    fontSize: 13,
    lineHeight: 17,
    ...typography.Inter[600],
    color: datingColors.dark,
    marginBottom: 6,
  },
  tagSubtitle: {
    fontSize: 13,
    lineHeight: 17,
    color: datingColors.muted,
    marginBottom: 10,
  },
  tagsWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 8,
  },
  uploadBox: {
    backgroundColor: datingColors.pinkLight,
    borderRadius: 8,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  uploadIcon: {
    marginRight: 10,
  },
  uploadContent: {
    flex: 1,
  },
  uploadTitle: {
    fontSize: 13,
    lineHeight: 17,
    ...typography.Inter[700],
    color: datingColors.dark,
  },
  uploadDescription: {
    marginTop: 4,
    fontSize: 11,
    lineHeight: 15,
    color: datingColors.muted,
  },
  uploadFileName: {
    marginTop: 8,
    fontSize: 12,
    ...typography.Inter[600],
    color: datingColors.pink,
  },
  photoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 10,
    marginBottom: 12,
  },
  photoCard: {
    width: 72,
    height: 72,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: datingColors.pinkLight,
  },
  photoImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  mainPhotoBadge: {
    position: 'absolute',
    left: 4,
    bottom: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 10,
    backgroundColor: 'rgba(58, 7, 24, 0.75)',
  },
  mainPhotoBadgeText: {
    fontSize: 10,
    color: datingColors.white,
    ...typography.Inter[700],
  },
  removePhotoButton: {
    position: 'absolute',
    top: 4,
    right: 4,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: datingColors.pink,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addPhotoCard: {
    width: 72,
    height: 72,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: datingColors.pink,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 6,
  },
  addPhotoText: {
    marginTop: 4,
    fontSize: 10,
    lineHeight: 12,
    color: datingColors.pink,
    textAlign: 'center',
    ...typography.Inter[600],
  },
  childCard: {
    borderWidth: 1,
    borderColor: '#F3D1DC',
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
  },
  childTitle: {
    fontSize: 16,
    ...typography.Inter[700],
    color: datingColors.dark,
    marginBottom: 10,
  },
  addMoreText: {
    marginBottom: 12,
    fontSize: 14,
    ...typography.Inter[700],
    color: datingColors.pink,
  },
});

