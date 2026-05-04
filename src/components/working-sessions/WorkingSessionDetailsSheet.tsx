import { Ionicons } from '@expo/vector-icons';
import { Image, Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, typography } from '../../constants/theme';
import { WorkingSessionItem } from '../../data/workingSessionsData';

export function WorkingSessionDetailsSheet({
  visible,
  session,
  onClose,
  onOpenChat,
}: {
  visible: boolean;
  session: WorkingSessionItem | null;
  onClose: () => void;
  onOpenChat: () => void;
}) {
  const insets = useSafeAreaInsets();

  if (!session) {
    return null;
  }

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      presentationStyle="overFullScreen"
      statusBarTranslucent
      navigationBarTranslucent
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <Pressable style={StyleSheet.absoluteFill} onPress={onClose} />
        <View style={[styles.sheet, { paddingBottom: 20 + insets.bottom }]}>
          <View style={styles.header}>
            <Text style={styles.title}>{session.dateLabel}</Text>
            <Pressable onPress={onClose} hitSlop={12}>
              <Ionicons name="close" size={24} color={colors.primaryDark} />
            </Pressable>
          </View>

          <View style={styles.card}>
            <View style={styles.topRow}>
              <Image source={require('../../../assets/images/avatar-user-default.png')} style={styles.avatar} />
              <View style={styles.content}>
                <Text style={styles.sessionTitle}>{session.title}</Text>
                <Text style={styles.clientName}>{session.clientName}</Text>
                <Text style={styles.status}>{session.status}</Text>
              </View>
            </View>
            <View style={styles.meta}>
              <Text style={styles.metaText}>Время {session.time}</Text>
              <Text style={styles.metaText}>{session.date}</Text>
            </View>
          </View>

          <Pressable style={styles.chatButton} onPress={onOpenChat}>
            <Text style={styles.chatButtonText}>Написать в чате</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.35)',
  },
  sheet: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    paddingHorizontal: 20,
    paddingTop: 20,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    ...typography.Inter[600],
    color: colors.primaryDark,
  },
  card: {
    marginTop: 16,
    borderRadius: 14,
    backgroundColor: colors.cardLight,
    padding: 16,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    marginRight: 12,
  },
  content: {
    flex: 1,
  },
  sessionTitle: {
    fontSize: 14,
    ...typography.Inter[600],
    color: colors.primaryDark,
  },
  clientName: {
    marginTop: 2,
    fontSize: 13,
    color: colors.primaryDark,
  },
  status: {
    marginTop: 4,
    fontSize: 13,
    color: colors.primary,
    ...typography.Inter[600],
  },
  meta: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  metaText: {
    fontSize: 13,
    color: colors.primaryDark,
  },
  chatButton: {
    marginTop: 18,
    height: 41,
    borderRadius: 24,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chatButtonText: {
    color: colors.white,
    fontSize: 14,
    ...typography.Inter[600],
  },
});
