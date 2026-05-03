import { useMemo, useState } from 'react';
import { typography } from '../../constants/theme';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { SearchOverlay } from '../../components/search/SearchOverlay';
import { SvgXml } from 'react-native-svg';
import { messengerChats, MessengerChatItem } from './messengerData';

const searchIconXml = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.92871 0.5C13.584 0.500054 17.3574 4.27344 17.3574 8.92871C17.3574 11.0153 16.5994 12.925 15.3438 14.3965L15.043 14.748L15.3701 15.0742L19.4365 19.1338C19.5207 19.2177 19.5201 19.354 19.4375 19.4365C19.3536 19.5207 19.2173 19.5201 19.1348 19.4375L15.0664 15.377L14.7402 15.0518L14.3887 15.3496C12.9178 16.6013 11.0119 17.3574 8.92871 17.3574C4.27344 17.3574 0.500054 13.584 0.5 8.92871C0.5 4.2734 4.2734 0.5 8.92871 0.5ZM8.92871 0.928711C4.51041 0.928711 0.928711 4.51041 0.928711 8.92871C0.928765 13.347 4.51044 16.9287 8.92871 16.9287C11.1357 16.9287 13.1333 16.0352 14.5811 14.5898C16.0319 13.1413 16.9287 11.1395 16.9287 8.92871C16.9287 4.51044 13.347 0.928765 8.92871 0.928711Z" stroke="#A9A9A9"/>
</svg>`;

type MessengerScreenProps = {
  onOpenChat: (chatId: string) => void;
};

function SearchBar({
  value,
  onChangeText,
  onFocus,
}: {
  value: string;
  onChangeText: (value: string) => void;
  onFocus: () => void;
}) {
  return (
    <View style={styles.searchContainer}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder="Поиск"
        placeholderTextColor="#B0B0B0"
        style={styles.searchInput}
        onFocus={onFocus}
      />
      <View style={styles.searchIcon}>
        <SvgXml xml={searchIconXml} width={20} height={20} />
      </View>
    </View>
  );
}

function SupportChatItem({
  chat,
  onPress,
}: {
  chat: MessengerChatItem;
  onPress: () => void;
}) {
  return (
    <Pressable style={styles.supportCard} onPress={onPress}>
      <View style={styles.supportAvatar}>
        {chat.avatar ? <Image source={chat.avatar} style={styles.avatarImage} /> : <Text style={styles.supportAvatarText}>psy</Text>}
      </View>

      <View style={styles.chatContent}>
        <Text style={styles.chatName}>{chat.name}</Text>
        <Text style={styles.supportRole}>{chat.role}</Text>
        <Text style={styles.chatMessage} numberOfLines={1}>
          {chat.lastMessage}
        </Text>
      </View>

      <View style={styles.supportRightSide}>
        <Text style={styles.supportTime}>{chat.time}</Text>
        {chat.unreadCount ? (
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadText}>{chat.unreadCount}</Text>
          </View>
        ) : null}
      </View>
    </Pressable>
  );
}

function ChatListItem({
  chat,
  onPress,
}: {
  chat: MessengerChatItem;
  onPress: () => void;
}) {
  return (
    <Pressable style={styles.chatRow} onPress={onPress}>
      <View style={styles.defaultAvatar}>{chat.avatar ? <Image source={chat.avatar} style={styles.avatarImage} /> : null}</View>

      <View style={styles.chatContent}>
        <Text style={styles.chatName}>{chat.name}</Text>
        <Text style={styles.supportRole}>{chat.role}</Text>
        <Text style={styles.chatMessage} numberOfLines={1}>
          {chat.lastMessage}
        </Text>
      </View>

      <Text style={styles.defaultTime}>{chat.time}</Text>
    </Pressable>
  );
}

export function MessengerScreen({ onOpenChat }: MessengerScreenProps) {
  const insets = useSafeAreaInsets();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchVisible, setSearchVisible] = useState(false);

  const filteredChats = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    if (!query) {
      return messengerChats;
    }

    return messengerChats.filter((chat) =>
      [chat.name, chat.role, chat.lastMessage].some((value) => value.toLowerCase().includes(query))
    );
  }, [searchQuery]);

  const supportChat = filteredChats.find((chat) => chat.type === 'support');
  const defaultChats = filteredChats.filter((chat) => chat.type === 'default');

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 100 + insets.bottom }}
      >
        <Text style={styles.title}>Мессенджер</Text>

        <SearchBar value={searchQuery} onChangeText={setSearchQuery} onFocus={() => setSearchVisible(true)} />

        <View style={styles.chatList}>
          {supportChat ? (
            <SupportChatItem chat={supportChat} onPress={() => onOpenChat(supportChat.chatId ?? supportChat.id)} />
          ) : null}

          {defaultChats.map((chat) => (
            <ChatListItem key={chat.id} chat={chat} onPress={() => onOpenChat(chat.chatId ?? chat.id)} />
          ))}

          {!filteredChats.length ? <Text style={styles.emptyText}>Ничего не найдено</Text> : null}
        </View>
      </ScrollView>

      <SearchOverlay visible={searchVisible} onClose={() => setSearchVisible(false)} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  title: {
    marginTop: 20,
    fontSize: 24,
    lineHeight: 36,
    ...typography.Inter[600],
    color: '#3A0718',
  },
  searchContainer: {
    marginTop: 16,
    height: 44,
    borderRadius: 360,
    borderWidth: 1,
    borderColor: '#C8C8C8',
    backgroundColor: '#FFFFFF',
    paddingLeft: 22,
    paddingRight: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#3A0718',
    paddingVertical: 0,
  },
  searchIcon: {
    position: 'absolute',
    right: 18,
  },
  chatList: {
    marginTop: 20,
  },
  supportCard: {
    height: 94,
    borderRadius: 12,
    backgroundColor: '#F5F9FD',
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  supportAvatar: {
    width: 44,
    height: 44,
    borderRadius: 27,
    backgroundColor: '#F50057',
    marginRight: 14,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  supportAvatarText: {
    color: '#FFFFFF',
    fontSize: 14,
    ...typography.Inter[600],
  },
  avatarImage: {
    width: '100%',
    height: '100%',
    borderRadius: 27,
    resizeMode: 'cover',
  },
  chatContent: {
    flex: 1,
    paddingRight: 8,
  },
  chatName: {
    fontSize: 14,
    lineHeight: 21,
    ...typography.Inter[600],
    color: '#3A0718',
  },
  supportRole: {
    marginTop: 1,
    fontSize: 14,
    lineHeight: 18,
    color: '#B0B0B0',
  },
  chatMessage: {
    marginTop: 3,
    fontSize: 14,
    lineHeight: 18,
    color: '#3A0718',
  },
  supportRightSide: {
    width: 46,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    paddingVertical: 20,
  },
  supportTime: {
    fontSize: 12,
    fontWeight: '600',
    color: '#3A0718',
  },
  unreadBadge: {
    minWidth: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#05728F',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 6,
  },
  unreadText: {
    fontSize: 10,
    ...typography.Inter[700],
    color: '#FFFFFF',
  },
  chatRow: {
    minHeight: 92,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#EFE7EA',
    paddingVertical: 18,
    paddingHorizontal: 16,
  },
  defaultAvatar: {
    width: 44,
    height: 44,
    borderRadius: 27,
    marginRight: 14,
    backgroundColor: '#F3F3F3',
    overflow: 'hidden',
  },
  defaultTime: {
    alignSelf: 'flex-start',
    marginTop: 4,
    fontSize: 14,
    color: '#8A8A8A',
  },
  emptyText: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 14,
    color: '#8A8A8A',
  },
});

