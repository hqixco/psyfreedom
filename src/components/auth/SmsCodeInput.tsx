import { useRef } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { colors, typography } from '../../constants/theme';

type SmsCodeInputProps = {
  value: string;
  onChange: (value: string) => void;
};

export function SmsCodeInput({ value, onChange }: SmsCodeInputProps) {
  const inputRef = useRef<TextInput>(null);

  return (
    <Pressable style={styles.container} onPress={() => inputRef.current?.focus()}>
      <TextInput
        ref={inputRef}
        value={value}
        onChangeText={(next) => onChange(next.replace(/\D/g, '').slice(0, 4))}
        keyboardType="number-pad"
        maxLength={4}
        style={styles.hiddenInput}
        autoFocus
      />
      {[0, 1, 2, 3].map((index) => {
        const digit = value[index] ?? '';
        const isActive = index === value.length && value.length < 4;

        return (
          <View key={index} style={[styles.cell, isActive ? styles.cellActive : null]}>
            <Text style={styles.digit}>{digit}</Text>
          </View>
        );
      })}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 34,
    flexDirection: 'row',
    gap: 10,
    position: 'relative',
  },
  hiddenInput: {
    position: 'absolute',
    opacity: 0,
    width: '100%',
    height: '100%',
  },
  cell: {
    flex: 1,
    height: 86,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cellActive: {
    borderColor: colors.primary,
  },
  digit: {
    fontSize: 24,
    ...typography.Inter[700],
    color: colors.primaryDark,
  },
});
