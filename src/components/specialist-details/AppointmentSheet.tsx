import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, typography } from '../../constants/theme';

type AppointmentSheetProps = {
  visible: boolean;
  specialization: string;
  meetingType: string;
  date: string;
  time: string;
  onSelectDate: (value: string) => void;
  onSelectTime: (value: string) => void;
  onSelectSpecialization: (value: string) => void;
  onSelectMeetingType: (value: string) => void;
  onClose: () => void;
  onSubmit: () => void;
};

function RadioRow({
  label,
  active,
  onPress,
}: {
  label: string;
  active: boolean;
  onPress: () => void;
}) {
  return (
    <Pressable style={styles.radioRow} onPress={onPress}>
      <View style={[styles.radioOuter, active ? styles.radioOuterActive : null]}>
        {active ? <View style={styles.radioInner} /> : null}
      </View>
      <Text style={styles.radioText}>{label}</Text>
    </Pressable>
  );
}

export function AppointmentSheet({
  visible,
  specialization,
  meetingType,
  date,
  time,
  onSelectDate,
  onSelectTime,
  onSelectSpecialization,
  onSelectMeetingType,
  onClose,
  onSubmit,
}: AppointmentSheetProps) {
  const insets = useSafeAreaInsets();
  const [isDateOpen, setIsDateOpen] = useState(false);
  const [isTimeOpen, setIsTimeOpen] = useState(false);
  const dateOptions = ['21.02.2025', '22.02.2025', '23.02.2025'];
  const timeOptions = ['10:00', '12:00', '14:00', '16:00'];

  return (
    <Modal transparent animationType="slide" visible={visible} onRequestClose={onClose}>
      <View style={styles.overlay}>
        <Pressable style={StyleSheet.absoluteFill} onPress={onClose} />
        <View style={[styles.sheet, { paddingBottom: 20 + insets.bottom }]}>
          <View style={styles.header}>
            <Text style={styles.title}>Запись на прием</Text>
            <Pressable onPress={onClose}>
              <Ionicons name="close" size={24} color={colors.primaryDark} />
            </Pressable>
          </View>

          <Text style={styles.sectionTitle}>Специализация услуги</Text>
          {['Психолог', 'Коуч', 'Ментор'].map((item) => (
            <RadioRow
              key={item}
              label={item}
              active={specialization === item}
              onPress={() => onSelectSpecialization(item)}
            />
          ))}

          <Text style={[styles.sectionTitle, styles.meetingTitle]}>Тип встречи</Text>
          {['Онлайн', 'Офлайн'].map((item) => (
            <RadioRow
              key={item}
              label={item}
              active={meetingType === item}
              onPress={() => onSelectMeetingType(item)}
            />
          ))}

          <Text style={[styles.sectionTitle, styles.datetimeTitle]}>
            Выберите дату и время для записи на прием
          </Text>

          <View style={styles.fieldsRow}>
            <Pressable
              style={[styles.field, isDateOpen ? styles.fieldActive : null]}
              onPress={() => {
                setIsDateOpen((value) => !value);
                setIsTimeOpen(false);
              }}
            >
              <Text style={styles.fieldValue}>{date}</Text>
              <Ionicons name={isDateOpen ? 'chevron-up' : 'chevron-down'} size={18} color={colors.primaryDark} />
            </Pressable>
            <Pressable
              style={[styles.field, isTimeOpen ? styles.fieldActive : null]}
              onPress={() => {
                setIsTimeOpen((value) => !value);
                setIsDateOpen(false);
              }}
            >
              <Text style={styles.fieldValue}>{time}</Text>
              <Ionicons name={isTimeOpen ? 'chevron-up' : 'chevron-down'} size={18} color={colors.primaryDark} />
            </Pressable>
          </View>

          {isDateOpen ? (
            <View style={styles.optionsPanel}>
              {dateOptions.map((item) => (
                <Pressable
                  key={item}
                  style={styles.optionRow}
                  onPress={() => {
                    onSelectDate(item);
                    setIsDateOpen(false);
                  }}
                >
                  <Text style={[styles.optionText, date === item ? styles.optionTextActive : null]}>{item}</Text>
                </Pressable>
              ))}
            </View>
          ) : null}

          {isTimeOpen ? (
            <View style={styles.optionsPanel}>
              {timeOptions.map((item) => (
                <Pressable
                  key={item}
                  style={styles.optionRow}
                  onPress={() => {
                    onSelectTime(item);
                    setIsTimeOpen(false);
                  }}
                >
                  <Text style={[styles.optionText, time === item ? styles.optionTextActive : null]}>{item}</Text>
                </Pressable>
              ))}
            </View>
          ) : null}

          <View style={styles.divider} />

          <View style={styles.costRow}>
            <Text style={styles.costLabel}>Стоимость</Text>
            <Text style={styles.costValue}>6 000 ₽</Text>
          </View>

          <Pressable style={styles.submitButton} onPress={onSubmit}>
            <Text style={styles.submitButtonText}>Записаться</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.35)',
  },
  sheet: {
    maxHeight: '88%',
    paddingHorizontal: 20,
    paddingTop: 20,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    backgroundColor: colors.white,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 22,
  },
  title: {
    fontSize: 24,
    ...typography.Inter[700],
    color: colors.primaryDark,
  },
  sectionTitle: {
    marginBottom: 12,
    fontSize: 16,
    ...typography.Inter[700],
    color: colors.primaryDark,
  },
  meetingTitle: {
    marginTop: 18,
  },
  datetimeTitle: {
    marginTop: 22,
    lineHeight: 22,
  },
  radioRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  radioOuter: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: '#B7DCE2',
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioOuterActive: {
    borderColor: colors.primary,
  },
  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.primary,
  },
  radioText: {
    fontSize: 16,
    color: colors.primaryDark,
  },
  fieldsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 14,
  },
  field: {
    width: '48.5%',
    height: 48,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: colors.primary,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  fieldActive: {
    backgroundColor: '#F6FBFC',
  },
  fieldValue: {
    fontSize: 15,
    color: colors.primaryDark,
  },
  optionsPanel: {
    marginTop: 10,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#D7E8EC',
    overflow: 'hidden',
    backgroundColor: colors.white,
  },
  optionRow: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#EEF4F6',
  },
  optionText: {
    fontSize: 15,
    color: colors.primaryDark,
  },
  optionTextActive: {
    color: colors.primary,
    ...typography.Inter[600],
  },
  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginTop: 22,
    marginBottom: 22,
  },
  costRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  costLabel: {
    fontSize: 18,
    color: colors.text,
  },
  costValue: {
    fontSize: 26,
    ...typography.Inter[700],
    color: colors.primary,
  },
  submitButton: {
    marginTop: 18,
    height: 52,
    borderRadius: 26,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  submitButtonText: {
    fontSize: 16,
    ...typography.Inter[700],
    color: colors.white,
  },
});
