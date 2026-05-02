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
        <Pressable onPress={() => console.log('prev month')}>
          <Text style={styles.chevron}>{'<'}</Text>
        </Pressable>
        <Text style={styles.month}>
          {monthTitle}, <Text style={styles.year}>{year}</Text>
        </Text>
        <Pressable onPress={() => console.log('next month')}>
          <Text style={styles.chevron}>{'>'}</Text>
        </Pressable>
      </View>

      <View style={styles.weekRow}>
        {weekDays.map((day) => (
          <Text key={day} style={styles.weekDay}>
            {day}
          </Text>
        ))}
      </View>

      {calendarDays.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.daysRow}>
          {row.map((day, dayIndex) => {
            const dateKey = day ? `2024-10-${day.padStart(2, '0')}` : '';
            const isSelected = day === selectedDay;
            const isMarked = markedDates.includes(dateKey);

            return (
              <Pressable
                key={`${rowIndex}-${dayIndex}`}
                style={[
                  styles.dayCell,
                  isSelected ? styles.daySelected : null,
                  !isSelected && isMarked ? styles.dayMarked : null,
                ]}
                onPress={() => {
                  if (day) {
                    onSelectDate(dateKey);
                  }
                }}
                disabled={!day}
              >
                <Text
                  style={[
                    styles.dayText,
                    !day ? styles.dayTextInactive : null,
                    isSelected || isMarked ? styles.dayTextHighlighted : null,
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
  chevron: {
    fontSize: 22,
    color: colors.primaryDark,
    ...typography.Inter[700],
  },
  month: {
    fontSize: 20,
    ...typography.Inter[700],
    color: colors.primaryDark,
  },
  year: {
    color: colors.primary,
  },
  weekRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  weekDay: {
    flex: 1,
    textAlign: 'center',
    fontSize: 15,
    color: colors.muted,
  },
  daysRow: {
    flexDirection: 'row',
  },
  dayCell: {
    flex: 1,
    height: 38,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    marginVertical: 2,
  },
  daySelected: {
    backgroundColor: colors.primary,
  },
  dayMarked: {
    backgroundColor: '#B7DCE2',
  },
  dayText: {
    fontSize: 16,
    color: colors.primaryDark,
  },
  dayTextInactive: {
    color: '#D5D5D5',
  },
  dayTextHighlighted: {
    color: colors.white,
  },
});
