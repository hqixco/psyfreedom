import { Pressable, StyleSheet, Text } from 'react-native';
import { colors, typography } from '../../constants/theme';
import { Association } from '../../data/associationsData';

export function AssociationCard({
  association,
  onPress,
}: {
  association: Association;
  onPress: (id: string) => void;
}) {
  return (
    <Pressable style={styles.card} onPress={() => onPress(association.id)}>
      <Text style={styles.title}>{association.title}</Text>
      <Text style={styles.city}>{association.city}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    minHeight: 92,
    borderRadius: 12,
    backgroundColor: colors.cardLight,
    paddingHorizontal: 16,
    paddingVertical: 16,
    justifyContent: 'center',
    marginHorizontal: 16,
    marginTop: 12,
  },
  title: {
    fontSize: 17,
    lineHeight: 22,
    ...typography.Inter[700],
    color: colors.primaryDark,
  },
  city: {
    marginTop: 8,
    fontSize: 15,
    color: colors.muted,
  },
});
