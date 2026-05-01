import { StyleSheet, Text } from 'react-native';

export function DateSeparator({ label }: { label: string }) {
  return <Text style={styles.text}>{label}</Text>;
}

const styles = StyleSheet.create({
  text: {
    alignSelf: 'center',
    marginVertical: 12,
    fontSize: 14,
    color: '#B0B0B0',
  },
});
