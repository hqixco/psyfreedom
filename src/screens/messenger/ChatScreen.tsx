import { useEffect, useMemo, useRef, useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { AttachmentPreview } from '../../components/messenger/AttachmentPreview';
import { ChatHeader } from '../../components/messenger/ChatHeader';
import { ChatInput } from '../../components/messenger/ChatInput';
import { ChatToast } from '../../components/messenger/ChatToast';
import { DateSeparator } from '../../components/messenger/DateSeparator';
import { DeleteMessageSheet } from '../../components/messenger/DeleteMessageSheet';
import { MessageBubble } from '../../components/messenger/MessageBubble';
import { SelectedMessageHeader } from '../../components/messenger/SelectedMessageHeader';
import { colors } from '../../constants/theme';
import {
  ChatMessage,
  ChatPreview,
  chatAttachmentMock,
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
  const [selectedAttachment, setSelectedAttachment] = useState<number | null>(null);
  const [selectedMessageId, setSelectedMessageId] = useState<string | null>(null);
  const [editingMessageId, setEditingMessageId] = useState<string | null>(null);
  const [isDeleteSheetOpen, setIsDeleteSheetOpen] = useState(false);
  const [isToastVisible, setIsToastVisible] = useState(false);

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

  const selectedMessage = useMemo(() => {
    if (!selectedMessageId) {
      return null;
    }

    return messages.find(
      (message): message is Extract<ChatMessage, { type: 'text' | 'image' | 'imageWithText' }> =>
        message.id === selectedMessageId && message.type !== 'date',
    ) ?? null;
  }, [messages, selectedMessageId]);

  const handleAttach = () => {
    setSelectedAttachment(chatAttachmentMock);
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
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
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
          <ChatHeader chat={chat} onBack={onBack} />
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
              <DateSeparator key={message.id} label={message.label} />
            ) : (
              <MessageBubble
                key={message.id}
                message={message}
                isSelected={selectedMessageId === message.id}
                onLongPress={
                  message.sender === 'me' ? () => setSelectedMessageId(message.id) : undefined
                }
              />
            ),
          )}
        </ScrollView>

        {selectedAttachment ? (
          <AttachmentPreview source={selectedAttachment} onRemove={() => setSelectedAttachment(null)} />
        ) : null}

        <View style={[styles.inputArea, { paddingBottom: 10 + insets.bottom }]}>
          <ChatInput
            value={inputText}
            onChangeText={setInputText}
            onAttach={handleAttach}
            onSend={handleSend}
            editing={Boolean(editingMessageId)}
          />
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
  inputArea: {
    paddingHorizontal: 20,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
    backgroundColor: colors.white,
  },
});
