import { StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../constants/theme';

type ProductCourseProgramSectionProps = {
  items?: { id: string; title: string; description: string }[];
};

export function ProductCourseProgramSection({ items }: ProductCourseProgramSectionProps) {
  if (!items?.length) {
    return null;
  }

  return (
    <View style={styles.section}>
      <Text style={styles.title}>Программа курса</Text>
      {items.map((item) => (
        <View key={item.id} style={styles.card}>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.cardText}>{item.description}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginTop: 28,
  },
  title: {
    marginHorizontal: 16,
    fontSize: 20,
    ...typography.Inter[700],
    color: colors.primaryDark,
  },
  card: {
    marginHorizontal: 16,
    marginTop: 10,
    padding: 14,
    borderRadius: 12,
    backgroundColor: colors.cardLight,
  },
  cardTitle: {
    fontSize: 15,
    ...typography.Inter[700],
    color: colors.primaryDark,
  },
  cardText: {
    marginTop: 6,
    fontSize: 13,
    lineHeight: 18,
    color: colors.text,
  },
});
