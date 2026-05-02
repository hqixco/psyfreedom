import { Ionicons } from '@expo/vector-icons';
import { BackChevronIcon } from '../icons/BackChevronIcon';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../constants/theme';

type SessionsCalendarProps = {
  selectedDate: string;
  markedDates: string[];
  onSelectDate: (date: string) => void;
};

const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
const calendarDays = [
  { label: '30', date: '2024-09-30', muted: true },
  { label: '1', date: '2024-10-01' },
  { label: '2', date: '2024-10-02' },
  { label: '3', date: '2024-10-03' },
  { label: '4', date: '2024-10-04' },
  { label: '5', date: '2024-10-05' },
  { label: '6', date: '2024-10-06' },
  { label: '7', date: '2024-10-07' },
  { label: '8', date: '2024-10-08' },
  { label: '9', date: '2024-10-09' },
  { label: '10', date: '2024-10-10' },
  { label: '11', date: '2024-10-11' },
  { label: '12', date: '2024-10-12' },
  { label: '13', date: '2024-10-13' },
  { label: '14', date: '2024-10-14' },
  { label: '15', date: '2024-10-15' },
  { label: '16', date: '2024-10-16' },
  { label: '17', date: '2024-10-17' },
  { label: '18', date: '2024-10-18' },
  { label: '19', date: '2024-10-19' },
  { label: '20', date: '2024-10-20' },
  { label: '21', date: '2024-10-21' },
  { label: '22', date: '2024-10-22' },
  { label: '23', date: '2024-10-23' },
  { label: '24', date: '2024-10-24' },
  { label: '25', date: '2024-10-25' },
  { label: '26', date: '2024-10-26' },
  { label: '27', date: '2024-10-27' },
  { label: '28', date: '2024-10-28' },
  { label: '29', date: '2024-10-29' },
  { label: '30', date: '2024-10-30' },
  { label: '31', date: '2024-10-31' },
  { label: '1', date: '2024-11-01', muted: true },
  { label: '2', date: '2024-11-02', muted: true },
  { label: '3', date: '2024-11-03', muted: true },
];

export function SessionsCalendar({ selectedDate, markedDates, onSelectDate }: SessionsCalendarProps) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <BackChevronIcon color={colors.primaryDark} />
        <Text style={styles.monthTitle}>Октябрь, <Text style={styles.year}>2024</Text></Text>
        <Ionicons name="chevron-forward" size={22} color={colors.primaryDark} />
      </View>

      <View style={styles.weekRow}>
        {weekDays.map((item) => (
          <Text key={item} style={styles.weekDay}>{item}</Text>
        ))}
      </View>

      <View style={styles.grid}>
        {calendarDays.map((item) => {
          const isSelected = item.date === selectedDate;
          const isMarked = markedDates.includes(item.date);

          return (
            <Pressable
              key={item.date}
              style={[styles.dayCell, isSelected ? styles.selectedDay : null, !isSelected && isMarked ? styles.markedDay : null]}
              onPress={() => onSelectDate(item.date)}
            >
              <Text
                style={[
                  styles.dayText,
                  item.muted ? styles.mutedDayText : null,
                  isSelected || isMarked ? styles.invertedDayText : null,
                ]}
              >
                {item.label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
    marginTop: 14,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#D7EDF1',
    backgroundColor: colors.white,
    padding: 18,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 22,
  },
  monthTitle: {
    fontSize: 20,
    ...typography.Inter[700],
    color: colors.primaryDark,
  },
  year: {
    color: colors.primary,
  },
  weekRow: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  weekDay: {
    flex: 1,
    fontSize: 15,
    color: colors.muted,
    textAlign: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  dayCell: {
    width: '14.2857%',
    height: 38,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  selectedDay: {
    backgroundColor: colors.primary,
  },
  markedDay: {
    backgroundColor: '#B7DCE2',
  },
  dayText: {
    fontSize: 16,
    color: colors.primaryDark,
  },
  mutedDayText: {
    color: '#D5D5D5',
  },
  invertedDayText: {
    color: colors.white,
  },
});
