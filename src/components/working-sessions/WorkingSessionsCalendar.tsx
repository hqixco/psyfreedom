import { Ionicons } from '@expo/vector-icons';
import { BackChevronIcon } from '../icons/BackChevronIcon';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../constants/theme';

const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
const calendarDays = [
  ['', '', '', '', '', '', ''],
  ['1', '2', '3', '4', '5', '6', '7'],
  ['8', '9', '10', '11', '12', '13', '14'],
  ['15', '16', '17', '18', '19', '20', '21'],
  ['22', '23', '24', '25', '26', '27', '28'],
  ['29', '30', '31', '', '', '', ''],
];

export function WorkingSessionsCalendar({
  monthTitle,
  year,
  selectedDate,
  markedDates,
  onSelectDate,
}: {
  monthTitle: string;
  year: string;
  selectedDate: string;
  markedDates: string[];
  onSelectDate: (date: string) => void;
}) {
  const selectedDay = selectedDate.split('-')[2]?.replace(/^0/, '');

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <BackChevronIcon color={colors.primaryDark} />
        <Text style={styles.monthTitle} numberOfLines={1}>
          {monthTitle}, <Text style={styles.year}>{year}</Text>
        </Text>
        <Ionicons name="chevron-forward" size={22} color={colors.primaryDark} />
      </View>

      <View style={styles.weekRow}>
        {weekDays.map((day) => (
          <Text key={day} style={styles.weekDay}>
            {day}
          </Text>
        ))}
      </View>

      <View style={styles.grid}>
        {calendarDays.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.daysRow}>
            {row.map((day, dayIndex) => {
              const dateKey = day ? `2024-10-${day.padStart(2, '0')}` : '';
              const isSelected = day === selectedDay;
              const isMarked = markedDates.includes(dateKey);

              return (
                <Pressable
                  key={`${rowIndex}-${dayIndex}`}
                  style={styles.dayCell}
                  onPress={() => {
                    if (day) {
                      onSelectDate(dateKey);
                    }
                  }}
                  disabled={!day}
                >
                  {isSelected || isMarked ? (
                    <View
                      style={[
                        styles.dayIndicator,
                        isSelected ? styles.selectedDay : styles.markedDay,
                      ]}
                    />
                  ) : null}
                  <Text
                    style={[
                      styles.dayText,
                      !day ? styles.mutedDayText : null,
                      isSelected || isMarked ? styles.invertedDayText : null,
                    ]}
                  >
                    {day}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        ))}
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
    flex: 1,
    marginHorizontal: 12,
    fontSize: 18,
    lineHeight: 22,
    ...typography.Inter[600],
    color: colors.primaryDark,
    textAlign: 'center',
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
    fontSize: 14,
    color: '#93A0C8',
    textAlign: 'center',
  },
  grid: {
    flexDirection: 'column',
  },
  daysRow: {
    flexDirection: 'row',
  },
  dayCell: {
    flex: 1,
    height: 38,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    position: 'relative',
  },
  dayIndicator: {
    position: 'absolute',
    width: 20,
    height: 20,
    borderRadius: 4,
    top: 9.5,
    left: '50%',
    marginLeft: -10,
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
