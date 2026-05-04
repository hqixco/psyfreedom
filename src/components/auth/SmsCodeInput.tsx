import { useRef } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { type StyleProp, type TextStyle, type ViewStyle } from 'react-native';
import { colors, typography } from '../../constants/theme';

type SmsCodeInputProps = {
  value: string;
  onChange: (value: string) => void;
  containerStyle?: StyleProp<ViewStyle>;
  cellStyle?: StyleProp<ViewStyle>;
  activeCellStyle?: StyleProp<ViewStyle>;
  digitStyle?: StyleProp<TextStyle>;
};

export function SmsCodeInput({
  value,
  onChange,
  containerStyle,
  cellStyle,
  activeCellStyle,
  digitStyle,
}: SmsCodeInputProps) {
  const inputRef = useRef<TextInput>(null);

  return (
    <Pressable style={[styles.container, containerStyle]} onPress={() => inputRef.current?.focus()}>
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
          <View
            key={index}
            style={[styles.cell, cellStyle, isActive ? [styles.cellActive, activeCellStyle] : null]}
          >
            <Text style={[styles.digit, digitStyle]}>{digit}</Text>
          </View>
        );
      })}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
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
    height: 41,
    borderRadius: 360,
    borderWidth: 1,
    borderColor: '#A9A9A9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cellActive: {
    borderColor: colors.primary,
  },
  digit: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.primaryDark,
  },
});
