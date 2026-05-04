import { useEffect, useMemo, useRef, useState } from 'react';
import {
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  ScrollView,
  StyleSheet,
  View,
  type ImageSourcePropType,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { AttachmentPreview } from '../../components/messenger/AttachmentPreview';
import { ChatHeader } from '../../components/messenger/ChatHeader';
import { ChatInput } from '../../components/messenger/ChatInput';
import { ChatToast } from '../../components/messenger/ChatToast';
import { DateSeparator } from '../../components/messenger/DateSeparator';
import { DeleteMessageSheet } from '../../components/messenger/DeleteMessageSheet';
import { MessageBubble } from '../../components/messenger/MessageBubble';
import { SelectedMessageHeader } from '../../components/messenger/SelectedMessageHeader';
import { colors, typography } from '../../constants/theme';
import {
  ChatMessage,
  ChatPreview,
  chatMessagesByChatId,
  chatPreviews,
} from '../../data/messengerData';

type ChatScreenProps = {
  chatId: string;
  onBack: () => void;
  setBottomTabsVisible?: (visible: boolean) => void;
};

export function ChatScreen({ chatId, onBack, setBottomTabsVisible }: ChatScreenProps) {
  const insets = useSafeAreaInsets();
  const scrollRef = useRef<ScrollView | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>(chatMessagesByChatId[chatId] ?? []);
  const [inputText, setInputText] = useState('');
  const [selectedAttachment, setSelectedAttachment] = useState<ImageSourcePropType | null>(null);
  const [selectedMessageId, setSelectedMessageId] = useState<string | null>(null);
  const [editingMessageId, setEditingMessageId] = useState<string | null>(null);
  const [isDeleteSheetOpen, setIsDeleteSheetOpen] = useState(false);
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  const composerTopPadding = 12;

  const chat = useMemo<ChatPreview>(
    () => chatPreviews.find((item) => item.id === chatId) ?? chatPreviews[2],
    [chatId],
  );

  useEffect(() => {
    setBottomTabsVisible?.(false);
    return () => setBottomTabsVisible?.(true);
  }, [setBottomTabsVisible]);

  useEffect(() => {
    if (!isToastVisible) {
      return undefined;
    }

    const timer = setTimeout(() => setIsToastVisible(false), 2500);
    return () => clearTimeout(timer);
  }, [isToastVisible]);

  useEffect(() => {
    setTimeout(() => scrollRef.current?.scrollToEnd({ animated: true }), 0);
  }, [messages, selectedAttachment]);

  useEffect(() => {
    const showSub = Keyboard.addListener('keyboardDidShow', () => setIsKeyboardVisible(true));
    const hideSub = Keyboard.addListener('keyboardDidHide', () => setIsKeyboardVisible(false));

    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, []);

  const selectedMessage = useMemo(() => {
    if (!selectedMessageId) {
      return null;
    }

    return messages.find(
      (message): message is Extract<ChatMessage, { type: 'text' | 'image' | 'imageWithText' }> =>
        message.id === selectedMessageId && message.type !== 'date',
    ) ?? null;
  }, [messages, selectedMessageId]);

  const handleAttach = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permission.granted) {
      console.log('media library permission denied');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.85,
    });

    if (result.canceled || !result.assets.length) {
      return;
    }

    setSelectedAttachment({ uri: result.assets[0].uri });
  };

  const handleSend = () => {
    const trimmed = inputText.trim();

    if (!trimmed && !selectedAttachment) {
      return;
    }

    if (editingMessageId) {
      setMessages((prev) =>
        prev.map((message) =>
          message.id === editingMessageId && message.type === 'text'
            ? { ...message, text: trimmed }
            : message,
        ),
      );
      setEditingMessageId(null);
      setInputText('');
      return;
    }

    const nextMessage: ChatMessage =
      selectedAttachment && trimmed
        ? {
            id: `message-${Date.now()}`,
            sender: 'me',
            type: 'imageWithText',
            image: selectedAttachment,
            text: trimmed,
          }
        : selectedAttachment
          ? {
              id: `message-${Date.now()}`,
              sender: 'me',
              type: 'image',
              image: selectedAttachment,
            }
          : {
              id: `message-${Date.now()}`,
              sender: 'me',
              type: 'text',
              text: trimmed,
            };

    setMessages((prev) => [...prev, nextMessage]);
    setInputText('');
    setSelectedAttachment(null);
  };

  const handleEdit = () => {
    if (!selectedMessage || selectedMessage.type !== 'text' || !selectedMessage.text) {
      return;
    }

    setEditingMessageId(selectedMessage.id);
    setInputText(selectedMessage.text);
    setSelectedMessageId(null);
  };

  const handleDelete = () => {
    if (!selectedMessageId) {
      return;
    }

    setMessages((prev) => prev.filter((message) => message.id !== selectedMessageId));
    setSelectedMessageId(null);
    setIsDeleteSheetOpen(false);
    setEditingMessageId(null);
    setInputText('');
    setIsToastVisible(true);
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ChatToast
          visible={isToastVisible}
          top={insets.top + 8}
          message="Ваше сообщение удалено!"
          onClose={() => setIsToastVisible(false)}
        />

        {selectedMessageId ? (
          <SelectedMessageHeader
            onClose={() => setSelectedMessageId(null)}
            onEdit={handleEdit}
            onDelete={() => setIsDeleteSheetOpen(true)}
          />
        ) : (
          <ChatHeader
            chat={chat}
            onBack={onBack}
            containerStyle={styles.header}
            backButtonStyle={styles.headerBackButton}
            titleStyle={styles.headerTitle}
            avatarWrapStyle={styles.headerAvatarWrap}
            avatarStyle={styles.headerAvatar}
            supportAvatarStyle={styles.headerSupportAvatar}
            supportTextStyle={styles.headerSupportText}
          />
        )}

        <ScrollView
          ref={scrollRef}
          style={styles.messages}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.messagesContent}
          keyboardShouldPersistTaps="handled"
        >
          {messages.map((message) =>
            message.type === 'date' ? (
              <DateSeparator key={message.id} label={message.label} style={styles.dateSeparator} />
            ) : (
              <MessageBubble
                key={message.id}
                message={message}
                isSelected={selectedMessageId === message.id}
                onLongPress={
                  message.sender === 'me' ? () => setSelectedMessageId(message.id) : undefined
                }
                wrapperStyle={styles.messageWrapper}
                bubbleStyle={styles.messageBubble}
                textStyle={styles.messageText}
                selectedWrapperStyle={styles.selectedMessageWrapper}
                imageRowStyle={styles.imageMessageRow}
                imageContainerStyle={styles.imageMessageContainer}
                imageStyle={styles.imageMessageImage}
                captionStyle={styles.imageMessageCaption}
                selectedImageRowStyle={styles.selectedImageMessageRow}
              />
            ),
          )}
        </ScrollView>

        <View style={[styles.composer, selectedAttachment ? styles.composerWithAttachment : null]}>
          {selectedAttachment ? (
            <AttachmentPreview
              source={selectedAttachment}
              onRemove={() => setSelectedAttachment(null)}
            />
          ) : null}

          <View
            style={[
              styles.inputArea,
              { paddingBottom: isKeyboardVisible ? composerTopPadding : 10 + insets.bottom },
            ]}
          >
            <ChatInput
              value={inputText}
              onChangeText={setInputText}
              onAttach={handleAttach}
              onSend={handleSend}
              editing={Boolean(editingMessageId)}
              hideAttach={Boolean(editingMessageId)}
            />
          </View>
        </View>

        <DeleteMessageSheet
          visible={isDeleteSheetOpen}
          onClose={() => setIsDeleteSheetOpen(false)}
          onDelete={handleDelete}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  messages: {
    flex: 1,
  },
  messagesContent: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 16,
  },
  dateSeparator: {
    alignSelf: 'center',
    marginVertical: 12,
    fontSize: 12,
    color: '#B0B0B0',
  },
  header: {
    height: 56,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(111, 118, 120, 0.12)',
  },
  headerBackButton: {
    width: 44,
    alignItems: 'flex-start',
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
    ...typography.Inter[600],
    color: colors.primaryDark,
  },
  headerAvatarWrap: {
    width: 32,
    alignItems: 'flex-end',
  },
  headerAvatar: {
    width: 32,
    height: 32,
    borderRadius: 360,
  },
  headerSupportAvatar: {
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerSupportText: {
    fontSize: 14,
    ...typography.Inter[700],
    color: colors.white,
  },
  messageWrapper: {
    marginBottom: 12,
  },
  messageBubble: {
    maxWidth: 280,
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  messageText: {
    fontSize: 14,
    lineHeight: 17,
    color: colors.primaryDark,
  },
  selectedMessageWrapper: {
    backgroundColor: '#D8F4FA',
    marginHorizontal: -20,
    paddingHorizontal: 20,
  },
  imageMessageRow: {
    marginBottom: 12,
  },
  imageMessageContainer: {
    borderRadius: 12,
  },
  imageMessageImage: {
    backgroundColor: colors.cardLight,
  },
  imageMessageCaption: {
    fontSize: 15,
    lineHeight: 20,
  },
  selectedImageMessageRow: {
    backgroundColor: '#D8F4FA',
    marginHorizontal: -20,
    paddingHorizontal: 20,
  },
  composer: {
    backgroundColor: colors.white,
  },
  composerWithAttachment: {
    paddingTop: 15,
  },
  inputArea: {
    minWidth: 300,
    minHeight: 36,
    paddingHorizontal: 13,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
    backgroundColor: colors.white,
  },
});
