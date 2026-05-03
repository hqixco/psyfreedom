import { StyleProp, StyleSheet, Text, TextStyle } from 'react-native';

type DateSeparatorProps = {
  label: string;
  style?: StyleProp<TextStyle>;
};

export function DateSeparator({ label, style }: DateSeparatorProps) {
  return <Text style={[styles.text, style]}>{label}</Text>;
}

const styles = StyleSheet.create({
  text: {
    alignSelf: 'center',
    marginVertical: 12,
    fontSize: 14,
    color: '#B0B0B0',
  },
});
