import { Linking, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../constants/theme';
import { Association } from '../../data/associationsData';

export function AssociationContactsSection({ association }: { association: Association }) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Контактная информация</Text>
        <Pressable onPress={() => Linking.openURL(`tel:${association.phone}`).catch(() => console.log('call association'))}>
          <Text style={[styles.row, styles.link]}>{association.phone}</Text>
        </Pressable>
        <Pressable onPress={() => Linking.openURL(`mailto:${association.email}`).catch(() => console.log('mail association'))}>
          <Text style={[styles.row, styles.link]}>{association.email}</Text>
        </Pressable>
        <Text style={styles.row}>{association.address}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginTop: 28,
  },
  title: {
    marginBottom: 4,
    fontSize: 20,
    lineHeight: 30,
    ...typography.Inter[600],
    color: colors.primaryDark,
  },
  card: {
    padding: 20,
    borderRadius: 12,
    backgroundColor: '#F5F9FD',
  },
  row: {
    marginTop: 12,
    fontSize: 16,
    lineHeight: 22,
    color: colors.text,
  },
  link: {
    color: colors.primary,
    ...typography.Inter[600],
  },
});
