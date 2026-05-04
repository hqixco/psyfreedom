import { StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../constants/theme';
import { WorkingSessionItem } from '../../data/workingSessionsData';
import { WorkingSessionListItem } from './WorkingSessionListItem';

export function WorkingSessionList({
  sessions,
  onOpenSession,
}: {
  sessions: WorkingSessionItem[];
  onOpenSession: (item: WorkingSessionItem) => void;
}) {
  const grouped = sessions.reduce<Record<string, WorkingSessionItem[]>>((acc, item) => {
    acc[item.dateLabel] = acc[item.dateLabel] ? [...acc[item.dateLabel], item] : [item];
    return acc;
  }, {});

  return (
    <View>
      {Object.entries(grouped).map(([group, items]) => (
        <View key={group}>
          <Text style={styles.groupTitle}>{group}</Text>
          {items.map((item) => (
            <WorkingSessionListItem
              key={item.id}
              item={item}
              onPress={() => onOpenSession(item)}
            />
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  groupTitle: {
    marginHorizontal: 16,
    marginTop: 28,
    marginBottom: 22,
    fontSize: 18,
    ...typography.Inter[700],
    color: colors.primaryDark,
  },
});
