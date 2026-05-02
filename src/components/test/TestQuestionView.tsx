import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, typography } from '../../constants/theme';

type TestQuestionViewProps = {
  question: string;
  options: string[];
  onBack: () => void;
  onNext: () => void;
};

export function TestQuestionView({
  question,
  options,
  onBack,
  onNext,
}: TestQuestionViewProps) {
  const insets = useSafeAreaInsets();
  const [selected, setSelected] = useState(options[0]);
  const [customAnswer, setCustomAnswer] = useState('');
  const customOption = options[options.length - 1];

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <Text style={styles.question}>{question}</Text>
        {options.map((option) => {
          const active = option === selected;
          return (
            <Pressable key={option} style={styles.radioRow} onPress={() => setSelected(option)}>
              <View style={[styles.radioOuter, active ? styles.radioOuterActive : null]}>
                {active ? <View style={styles.radioInner} /> : null}
              </View>
              <Text style={styles.optionText}>{option}</Text>
            </Pressable>
          );
        })}

        <TextInput
          editable={selected === customOption}
          value={customAnswer}
          onChangeText={setCustomAnswer}
          placeholder="Напишите что-нибудь"
          placeholderTextColor="#B0B0B0"
          multiline
          textAlignVertical="top"
          style={styles.input}
        />
      </ScrollView>

      <View style={[styles.footer, { bottom: 24 + insets.bottom }]}>
        <Pressable style={styles.backButton} onPress={onBack}>
          <Text style={styles.backButtonText}>Назад</Text>
        </Pressable>
        <Pressable style={styles.nextButton} onPress={onNext}>
          <Text style={styles.nextButtonText}>Далее</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 120,
  },
  question: {
    fontSize: 15,
    lineHeight: 20,
    ...typography.Inter[700],
    color: colors.primaryDark,
  },
  radioRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  radioOuter: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: '#B7DCE2',
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioOuterActive: {
    borderColor: colors.primary,
  },
  radioInner: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.primary,
  },
  optionText: {
    fontSize: 14,
    color: colors.primaryDark,
  },
  input: {
    marginTop: 18,
    height: 118,
    borderWidth: 1,
    borderColor: '#C8C8C8',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingTop: 12,
    fontSize: 14,
    color: colors.primaryDark,
  },
  footer: {
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: 24,
    flexDirection: 'row',
  },
  backButton: {
    flex: 1,
    height: 44,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    marginRight: 8,
  },
  backButtonText: {
    fontSize: 14,
    ...typography.Inter[700],
    color: colors.primary,
  },
  nextButton: {
    flex: 1,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  nextButtonText: {
    fontSize: 14,
    ...typography.Inter[700],
    color: colors.white,
  },
});
