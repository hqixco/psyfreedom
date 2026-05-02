import { Ionicons } from '@expo/vector-icons';
import { BackChevronIcon } from '../icons/BackChevronIcon';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../constants/theme';
import { ChatPreview } from '../../data/messengerData';

type ChatHeaderProps = {
  chat: ChatPreview;
  onBack: () => void;
};

export function ChatHeader({ chat, onBack }: ChatHeaderProps) {
  return (
    <View style={styles.container}>
      <Pressable style={styles.backButton} onPress={onBack}>
        <BackChevronIcon color={colors.primaryDark} />
      </Pressable>
      <Text style={styles.title} numberOfLines={1}>
        {chat.user.name}
      </Text>
      <View style={styles.avatarWrap}>
        {chat.isSupport ? (
          <View style={[styles.avatar, styles.supportAvatar]}>
            <Text style={styles.supportText}>psy</Text>
          </View>
        ) : (
          <Image source={chat.user.avatar} style={styles.avatar} />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 56,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#F3F3F3',
  },
  backButton: {
    width: 44,
    alignItems: 'flex-start',
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    ...typography.Inter[700],
    color: colors.primaryDark,
  },
  avatarWrap: {
    width: 44,
    alignItems: 'flex-end',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  supportAvatar: {
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  supportText: {
    fontSize: 14,
    ...typography.Inter[700],
    color: colors.white,
  },
});
