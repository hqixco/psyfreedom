import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import { colors } from '../../constants/theme';

type ChatInputProps = {
  value: string;
  onChangeText: (value: string) => void;
  onAttach: () => void;
  onSend: () => void;
  editing?: boolean;
};

export function ChatInput({ value, onChangeText, onAttach, onSend, editing = false }: ChatInputProps) {
  return (
    <View style={styles.container}>
      <Pressable style={styles.attachButton} onPress={onAttach}>
        <Ionicons name="image-outline" size={26} color={colors.primaryDark} />
      </Pressable>

      <View style={[styles.inputWrapper, editing ? styles.inputWrapperEditing : null]}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder="Написать сообщение"
          placeholderTextColor="#B0B0B0"
          style={[styles.input, editing ? styles.inputEditing : null]}
          multiline
          textAlignVertical="top"
        />
      </View>

      <Pressable style={styles.sendButton} onPress={onSend}>
        <Ionicons name="paper-plane" size={22} color={colors.white} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  attachButton: {
    width: 32,
    height: 44,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  inputWrapper: {
    flex: 1,
    minHeight: 44,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#043F4A',
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  inputWrapperEditing: {
    borderColor: colors.primary,
    minHeight: 52,
  },
  input: {
    fontSize: 16,
    color: colors.primaryDark,
    paddingVertical: 8,
    maxHeight: 120,
  },
  inputEditing: {
    minHeight: 52,
  },
  sendButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
});
