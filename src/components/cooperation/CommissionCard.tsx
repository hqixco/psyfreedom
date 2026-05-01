import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/theme';

export function CommissionCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.decor} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 300,
    height: 150,
    borderRadius: 12,
    backgroundColor: colors.blueLight,
    padding: 20,
    marginRight: 10,
    overflow: 'hidden',
  },
  title: {
    fontSize: 21,
    lineHeight: 25,
    fontWeight: '700',
    color: colors.primaryDark,
  },
  description: {
    marginTop: 8,
    fontSize: 15,
    lineHeight: 19,
    color: colors.primaryDark,
  },
  decor: {
    position: 'absolute',
    right: -24,
    bottom: -18,
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: '#B8EDF7',
    opacity: 0.25,
  },
});
