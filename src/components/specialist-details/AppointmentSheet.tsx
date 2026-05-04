import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Modal, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, typography } from '../../constants/theme';
import { SelectChevronIcon } from '../icons/SelectChevronIcon';

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
      <Text style={[styles.radioText, active ? styles.radioTextActive : null]}>{label}</Text>
    </Pressable>
  );
}

type CalendarDay = {
  label: string;
  date: string;
  muted?: boolean;
};

const calendarWeekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
const appointmentCalendarWeeks: (CalendarDay | null)[][] = [
  [null, null, null, null, null, { label: '1', date: '2025-02-01' }, { label: '2', date: '2025-02-02' }],
  [
    { label: '3', date: '2025-02-03' },
    { label: '4', date: '2025-02-04' },
    { label: '5', date: '2025-02-05' },
    { label: '6', date: '2025-02-06' },
    { label: '7', date: '2025-02-07' },
    { label: '8', date: '2025-02-08' },
    { label: '9', date: '2025-02-09' },
  ],
  [
    { label: '10', date: '2025-02-10' },
    { label: '11', date: '2025-02-11' },
    { label: '12', date: '2025-02-12' },
    { label: '13', date: '2025-02-13' },
    { label: '14', date: '2025-02-14' },
    { label: '15', date: '2025-02-15' },
    { label: '16', date: '2025-02-16' },
  ],
  [
    { label: '17', date: '2025-02-17' },
    { label: '18', date: '2025-02-18' },
    { label: '19', date: '2025-02-19' },
    { label: '20', date: '2025-02-20' },
    { label: '21', date: '2025-02-21' },
    { label: '22', date: '2025-02-22' },
    { label: '23', date: '2025-02-23' },
  ],
  [
    { label: '24', date: '2025-02-24' },
    { label: '25', date: '2025-02-25' },
    { label: '26', date: '2025-02-26' },
    { label: '27', date: '2025-02-27' },
    { label: '28', date: '2025-02-28' },
    null,
    null,
  ],
];

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
  const timeOptions = ['10:00', '12:00', '14:00', '16:00'];
  const selectedDateKey = (() => {
    const parts = date.split('.');

    if (parts.length !== 3) {
      return '';
    }

    return `${parts[2]}-${parts[1]}-${parts[0].padStart(2, '0')}`;
  })();

  return (
    <Modal
      transparent
      animationType="slide"
      visible={visible}
      presentationStyle="overFullScreen"
      statusBarTranslucent
      navigationBarTranslucent
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <Pressable style={styles.backdrop} onPress={onClose} />
        <View style={[styles.sheet, { paddingBottom: 18 + insets.bottom, maxHeight: '88%' }]}>
          <View style={styles.header}>
            <Text style={styles.title}>Запись на прием</Text>
            <Pressable onPress={onClose}>
              <Ionicons name="close" size={24} color={colors.primaryDark} />
            </Pressable>
          </View>

          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.content}
            keyboardShouldPersistTaps="handled"
          >
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

            <View style={styles.fieldLabelsRow}>
              <Text style={styles.fieldLabel}>Дата приема</Text>
              <Text style={styles.fieldLabel}>Время приема</Text>
            </View>

            <View style={styles.fieldsRow}>
              <Pressable
                style={[styles.field, isDateOpen ? styles.fieldActive : null]}
                onPress={() => {
                  setIsDateOpen((value) => !value);
                  setIsTimeOpen(false);
                }}
              >
                <Text style={styles.fieldValue}>{date}</Text>
                <View style={[styles.fieldIconWrap, isDateOpen ? styles.fieldIconWrapOpen : null]}>
                  <SelectChevronIcon />
                </View>
              </Pressable>
              <Pressable
                style={[styles.field, isTimeOpen ? styles.fieldActive : null]}
                onPress={() => {
                  setIsTimeOpen((value) => !value);
                  setIsDateOpen(false);
                }}
              >
                <Text style={styles.fieldValue}>{time}</Text>
                <View style={[styles.fieldIconWrap, isTimeOpen ? styles.fieldIconWrapOpen : null]}>
                  <SelectChevronIcon />
                </View>
              </Pressable>
            </View>

            {isDateOpen ? (
              <View style={styles.calendarPanel}>
                <View style={styles.calendarHeader}>
                  <Pressable style={styles.calendarNavButton} onPress={() => console.log('prev appointment month')}>
                    <Text style={styles.calendarChevron}>{'<'}</Text>
                  </Pressable>
                  <Text style={styles.calendarTitle}>
                    Февраль, <Text style={styles.calendarYear}>2025</Text>
                  </Text>
                  <Pressable style={styles.calendarNavButton} onPress={() => console.log('next appointment month')}>
                    <Text style={styles.calendarChevron}>{'>'}</Text>
                  </Pressable>
                </View>

                <View style={styles.calendarWeekRow}>
                  {calendarWeekDays.map((day) => (
                    <Text key={day} style={styles.calendarWeekDay}>
                      {day}
                    </Text>
                  ))}
                </View>

                <View style={styles.calendarGrid}>
                  {appointmentCalendarWeeks.map((week, weekIndex) => (
                    <View key={weekIndex} style={styles.calendarWeek}>
                      {week.map((item, dayIndex) => {
                        if (!item) {
                          return <View key={dayIndex} style={styles.calendarDay} />;
                        }

                        const isSelected = item.date === selectedDateKey;

                        return (
                          <Pressable
                            key={item.date}
                            style={styles.calendarDay}
                            onPress={() => {
                              onSelectDate(`${item.label.padStart(2, '0')}.02.2025`);
                              setIsDateOpen(false);
                            }}
                          >
                            {isSelected ? <View style={[styles.calendarDayIndicator, styles.calendarDaySelected]} /> : null}
                            {!isSelected && item.muted ? <View style={[styles.calendarDayIndicator, styles.calendarDayMarked]} /> : null}
                            <Text
                              style={[
                                styles.calendarDayText,
                                item.muted ? styles.calendarDayTextMuted : null,
                                isSelected ? styles.calendarDayTextSelected : null,
                              ]}
                            >
                              {item.label}
                            </Text>
                          </Pressable>
                        );
                      })}
                    </View>
                  ))}
                </View>
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
          </ScrollView>

          <View style={styles.footer}>
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
  backdrop: {
    ...StyleSheet.absoluteFillObject,
  },
  sheet: {
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
    fontSize: 20,
    ...typography.Inter[600],
    color: colors.primaryDark,
  },
  content: {
    paddingBottom: 10,
  },
  sectionTitle: {
    marginBottom: 12,
    fontSize: 14,
    ...typography.Inter[600],
    color: colors.primaryDark,
  },
  meetingTitle: {
    marginTop: 18,
  },
  datetimeTitle: {
    marginTop: 17,
    lineHeight: 22,
  },
  radioRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },
  radioOuter: {
    width: 18,
    height: 18,
    borderRadius: 9,
    marginRight: 12,
    borderWidth: 1,
    borderColor: 'rgba(193, 212, 217, 1)',
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioOuterActive: {
    backgroundColor: '#05728F',
    borderColor: '#05728F',
  },
  radioInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: colors.white,
  },
  radioText: {
    fontSize: 16,
    color: colors.primaryDark,
  },
  radioTextActive: {
    color: colors.primaryDark,
    ...typography.Inter[400],
  },
  fieldsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 0,
  },
  fieldLabelsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 2,
  },
  fieldLabel: {
    width: '48.5%',
    marginBottom: 6,
    fontSize: 12,
    color: colors.primaryDark,
  },
  field: {
    width: '48.5%',
    height: 39,
    borderRadius: 360,
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
    fontSize: 12,
    fontWeight: '400',
    color: colors.primaryDark,
  },
  fieldIconWrap: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  fieldIconWrapOpen: {
    transform: [{ rotate: '180deg' }],
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
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#EEF4F6',
  },
  optionText: {
    fontSize: 12,
    color: colors.primaryDark,
  },
  optionTextActive: {
    color: colors.primary,
    ...typography.Inter[600],
  },
  calendarPanel: {
    marginTop: 10,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#D7E8EC',
    padding: 18,
    backgroundColor: colors.white,
  },
  calendarHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  calendarNavButton: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  calendarChevron: {
    fontSize: 22,
    color: colors.primaryDark,
    ...typography.Inter[700],
  },
  calendarTitle: {
    flex: 1,
    marginHorizontal: 12,
    fontSize: 18,
    lineHeight: 22,
    ...typography.Inter[600],
    color: colors.primaryDark,
    textAlign: 'center',
  },
  calendarYear: {
    color: colors.primary,
  },
  calendarWeekRow: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  calendarWeekDay: {
    flex: 1,
    fontSize: 14,
    color: '#93A0C8',
    textAlign: 'center',
  },
  calendarGrid: {
    flexDirection: 'column',
  },
  calendarWeek: {
    flexDirection: 'row',
  },
  calendarDay: {
    flex: 1,
    height: 38,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    position: 'relative',
  },
  calendarDayIndicator: {
    position: 'absolute',
    width: 20,
    height: 20,
    borderRadius: 4,
    top: 9.5,
    left: '50%',
    marginLeft: -10,
  },
  calendarDaySelected: {
    backgroundColor: colors.primary,
  },
  calendarDayMarked: {
    backgroundColor: '#B7DCE2',
  },
  calendarDayText: {
    fontSize: 16,
    color: colors.primaryDark,
  },
  calendarDayTextMuted: {
    color: '#D5D5D5',
  },
  calendarDayTextSelected: {
    color: colors.white,
  },
  footer: {
    paddingTop: 16,
    backgroundColor: colors.white,
  },
  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginBottom: 22,
  },
  costRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  costLabel: {
    fontSize: 16,
    color: colors.text,
  },
  costValue: {
    fontSize: 20,
    ...typography.Inter[600],
    color: colors.primary,
  },
  submitButton: {
    marginTop: 18,
    height: 41,
    borderRadius: 26,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  submitButtonText: {
    fontSize: 14,
    ...typography.Inter[600],
    color: colors.white,
  },
});
