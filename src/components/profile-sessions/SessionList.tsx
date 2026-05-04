import { StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../constants/theme';
import { SessionItem } from '../../data/mySessionsData';
import { SessionListItem } from './SessionListItem';

export function SessionList({
  sessions,
  onOpenSession,
}: {
  sessions: SessionItem[];
  onOpenSession: (item: SessionItem) => void;
}) {
  const groups = sessions.reduce<Record<string, SessionItem[]>>((acc, item) => {
    if (!acc[item.dateLabel]) {
      acc[item.dateLabel] = [];
    }
    acc[item.dateLabel].push(item);
    return acc;
  }, {});

  return (
    <View>
      {Object.entries(groups).map(([label, items]) => (
        <View key={label}>
          <Text style={styles.groupTitle}>{label}</Text>
          {items.map((item) => (
            <SessionListItem key={item.id} item={item} onPress={onOpenSession} />
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
    ...typography.Inter[600],
    color: colors.primaryDark,
  },
});
