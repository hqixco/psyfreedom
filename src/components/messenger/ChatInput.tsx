import { useEffect, useState } from 'react';
import {
  NativeSyntheticEvent,
  Pressable,
  StyleSheet,
  TextInput,
  TextInputContentSizeChangeEventData,
  View,
} from 'react-native';
import { SvgXml } from 'react-native-svg';
import { colors } from '../../constants/theme';

const attachIconXml = `<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="20" height="20" rx="5" stroke="#033542"/>
<path d="M1 16L3.2592 14.3863C3.97521 13.8749 4.95603 13.956 5.57822 14.5782L6.65147 15.6515C7.1201 16.1201 7.8799 16.1201 8.34853 15.6515L13.3377 10.6623C13.996 10.004 15.0476 9.95634 15.7628 10.5523L20.5 14.5" stroke="#033542" stroke-linecap="round"/>
<circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 8.5 4.5)" stroke="#033542"/>
</svg>`;

const sendIconXml = `<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="36" height="36" rx="18" fill="#05728F"/>
<path d="M25.7496 9.75147C25.6327 9.63464 25.4846 9.55408 25.323 9.51949C25.1614 9.48489 24.9933 9.49773 24.8389 9.55647L10.5523 14.9639H10.5494C10.3847 15.0272 10.2436 15.1399 10.1453 15.2865C10.047 15.4331 9.9963 15.6064 10.0002 15.7829C10.0041 15.9593 10.0624 16.1302 10.1671 16.2723C10.2718 16.4144 10.4178 16.5207 10.5852 16.5767L10.5998 16.5814L15.5033 18.6753C15.5989 18.7043 15.7005 18.7077 15.7979 18.6852C15.8953 18.6627 15.9851 18.6151 16.0583 18.547L23.9282 11.2139C23.9516 11.1905 23.9794 11.1719 24.0101 11.1592C24.0407 11.1465 24.0736 11.14 24.1067 11.14C24.1399 11.14 24.1727 11.1465 24.2034 11.1592C24.234 11.1719 24.2618 11.1905 24.2853 11.2139C24.3087 11.2374 24.3273 11.2652 24.34 11.2959C24.3527 11.3265 24.3593 11.3594 24.3593 11.3925C24.3593 11.4257 24.3527 11.4585 24.34 11.4892C24.3273 11.5198 24.3087 11.5476 24.2853 11.5711L16.9518 19.4374C16.8838 19.5106 16.8361 19.6004 16.8137 19.6978C16.7912 19.7952 16.7946 19.8967 16.8236 19.9924L18.9182 24.8987C18.9204 24.9059 18.9225 24.9123 18.925 24.9191C19.0393 25.2502 19.3286 25.4837 19.6782 25.4994C19.6936 25.4994 19.6989 25.4994 19.7139 25.4994C19.8904 25.5004 20.0632 25.4483 20.2097 25.3499C20.3562 25.2514 20.4696 25.1111 20.5354 24.9473L25.9421 10.6647C26.0016 10.5101 26.0152 10.3416 25.981 10.1796C25.9468 10.0175 25.8664 9.86881 25.7496 9.75147Z" fill="white"/>
</svg>`;

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
          <SvgXml xml={attachIconXml} width={22} height={22} />
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
        <SvgXml xml={sendIconXml} width={36} height={36} />
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
});
