import { useEffect, useState } from 'react';
import {
  Image,
  NativeSyntheticEvent,
  Pressable,
  StyleSheet,
  TextInput,
  TextInputContentSizeChangeEventData,
  View,
} from 'react-native';
import { colors } from '../../constants/theme';

type ChatInputProps = {
  value: string;
  onChangeText: (value: string) => void;
  onAttach: () => void;
  onSend: () => void;
  editing?: boolean;
  hideAttach?: boolean;
};

export function ChatInput({
  value,
  onChangeText,
  onAttach,
  onSend,
  editing = false,
  hideAttach = false,
}: ChatInputProps) {
  const [inputHeight, setInputHeight] = useState(36);

  useEffect(() => {
    setInputHeight(36);
  }, [editing]);

  const handleContentSizeChange = (
    event: NativeSyntheticEvent<TextInputContentSizeChangeEventData>,
  ) => {
    setInputHeight(Math.max(36, Math.ceil(event.nativeEvent.contentSize.height + 16)));
  };

  return (
    <View style={styles.container}>
      {!hideAttach ? (
        <Pressable style={styles.attachButton} onPress={onAttach}>
          <Image source={require('../../../assets/chat-attach-image.svg')} style={styles.attachIcon} />
        </Pressable>
      ) : null}

      <View style={[styles.inputWrapper, { height: inputHeight }, editing ? styles.inputWrapperEditing : null]}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder="Написать сообщение"
          placeholderTextColor="#B0B0B0"
          onContentSizeChange={handleContentSizeChange}
          style={[styles.input, editing ? styles.inputEditing : null]}
          multiline
          textAlignVertical="top"
        />
      </View>

      <Pressable style={styles.sendButton} onPress={onSend}>
        <Image source={require('../../../assets/chat-send-icon.svg')} style={styles.sendIcon} />
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
    height: 36,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingBottom: 4,
    marginRight: 8,
  },
  attachIcon: {
    width: 22,
    height: 22,
  },
  inputWrapper: {
    flex: 1,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#043F4A',
    paddingHorizontal: 16,
    paddingVertical: 8,
    justifyContent: 'center',
  },
  inputWrapperEditing: {
    borderColor: colors.primary,
  },
  input: {
    flex: 1,
    fontSize: 14,
    lineHeight: 16,
    color: colors.primaryDark,
    paddingVertical: 0,
    maxHeight: 120,
  },
  inputEditing: {},

  sendButton: {
    width: 36,
    height: 36,
    borderRadius: 24,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
  sendIcon: {
    width: '100%',
    height: '100%',
  },
});
