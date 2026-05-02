import { Linking, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../constants/theme';
import { Association } from '../../data/associationsData';

export function AssociationContactsSection({ association }: { association: Association }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Контактная информация</Text>
      <Pressable onPress={() => Linking.openURL(`tel:${association.phone}`).catch(() => console.log('call association'))}>
        <Text style={[styles.row, styles.link]}>{association.phone}</Text>
      </Pressable>
      <Pressable onPress={() => Linking.openURL(`mailto:${association.email}`).catch(() => console.log('mail association'))}>
        <Text style={[styles.row, styles.link]}>{association.email}</Text>
      </Pressable>
      <Text style={styles.row}>{association.address}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginTop: 32,
  },
  title: {
    fontSize: 22,
    lineHeight: 28,
    ...typography.Inter[700],
    color: colors.primaryDark,
  },
  row: {
    marginTop: 14,
    fontSize: 16,
    lineHeight: 22,
    color: colors.text,
  },
  link: {
    color: colors.primary,
    ...typography.Inter[700],
  },
});
