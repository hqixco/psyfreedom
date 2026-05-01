import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/theme';
import { ChatMessage } from '../../data/messengerData';
import { ImageMessage } from './ImageMessage';

type MessageBubbleProps = {
  message: Extract<ChatMessage, { type: 'text' | 'image' | 'imageWithText' }>;
  isSelected?: boolean;
  onLongPress?: () => void;
};

export function MessageBubble({ message, isSelected = false, onLongPress }: MessageBubbleProps) {
  if (message.type === 'image' || message.type === 'imageWithText') {
    return (
      <ImageMessage
        sender={message.sender}
        image={message.image!}
        text={message.type === 'imageWithText' ? message.text : undefined}
        isSelected={isSelected}
        onLongPress={onLongPress}
      />
    );
  }

  const isMe = message.sender === 'me';

  return (
    <View
      style={[
        styles.wrapper,
        isMe ? styles.wrapperMe : styles.wrapperOther,
        isSelected ? styles.selectedWrapper : null,
      ]}
    >
      <Pressable
        onLongPress={isMe ? onLongPress : undefined}
        delayLongPress={250}
        style={[
          styles.bubble,
          isMe ? styles.bubbleMe : styles.bubbleOther,
        ]}
      >
        <Text style={styles.text}>{message.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 12,
  },
  wrapperMe: {
    alignItems: 'flex-end',
  },
  wrapperOther: {
    alignItems: 'flex-start',
  },
  selectedWrapper: {
    backgroundColor: '#D8F4FA',
    marginHorizontal: -20,
    paddingHorizontal: 20,
  },
  bubble: {
    maxWidth: '78%',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  bubbleMe: {
    backgroundColor: '#EAF8FA',
  },
  bubbleOther: {
    backgroundColor: '#FFF8F4',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    color: colors.primaryDark,
  },
});
