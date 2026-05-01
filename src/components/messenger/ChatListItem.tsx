import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/theme';
import { ChatPreview } from '../../data/messengerData';

type ChatListItemProps = {
  chat: ChatPreview;
  onPress: (chatId: string) => void;
};

export function ChatListItem({ chat, onPress }: ChatListItemProps) {
  return (
    <Pressable
      style={[
        styles.container,
        chat.isSupport ? styles.supportContainer : null,
      ]}
      onPress={() => onPress(chat.id)}
    >
      {chat.isSupport ? (
        <View style={[styles.avatar, styles.supportAvatar]}>
          <Text style={styles.supportAvatarText}>psy</Text>
        </View>
      ) : (
        <Image source={chat.user.avatar} style={styles.avatar} />
      )}

      <View style={styles.content}>
        <Text style={styles.name}>{chat.user.name}</Text>
        <Text style={styles.role}>{chat.user.role}</Text>
        <Text style={styles.lastMessage} numberOfLines={1}>
          {chat.lastMessage}
        </Text>
      </View>

      <View style={styles.right}>
        {chat.time ? <Text style={styles.time}>{chat.time}</Text> : null}
        {chat.unreadCount ? (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{chat.unreadCount}</Text>
          </View>
        ) : null}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
    paddingVertical: 18,
    flexDirection: 'row',
    alignItems: 'center',
  },
  supportContainer: {
    backgroundColor: '#EAF8FA',
    borderRadius: 12,
    padding: 14,
    marginTop: 24,
    borderBottomWidth: 0,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    marginRight: 14,
    backgroundColor: colors.cardLight,
  },
  supportAvatar: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  supportAvatarText: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.white,
  },
  content: {
    flex: 1,
  },
  name: {
    fontSize: 17,
    fontWeight: '700',
    color: colors.primaryDark,
  },
  role: {
    fontSize: 15,
    color: colors.muted,
    marginTop: 2,
  },
  lastMessage: {
    fontSize: 14,
    color: colors.primaryDark,
    marginTop: 3,
  },
  right: {
    alignItems: 'flex-end',
    marginLeft: 12,
  },
  time: {
    fontSize: 13,
    color: colors.primaryDark,
  },
  badge: {
    marginTop: 10,
    minWidth: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 6,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.white,
  },
});
