import { Ionicons } from '@expo/vector-icons';
import { Image, Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, typography } from '../../constants/theme';
import { SessionItem } from '../../data/mySessionsData';

export function SessionDetailsSheet({
  visible,
  session,
  onClose,
  onCancel,
  onOpenChat,
}: {
  visible: boolean;
  session: SessionItem | null;
  onClose: () => void;
  onCancel: () => void;
  onOpenChat: () => void;
}) {
  const insets = useSafeAreaInsets();

  if (!session) {
    return null;
  }

  return (
    <Modal
      transparent
      animationType="slide"
      visible={visible}
      presentationStyle="overFullScreen"
      statusBarTranslucent
      navigationBarTranslucent
      onRequestClose={onClose}
    >
      <Pressable style={styles.overlay} onPress={onClose}>
        <Pressable style={[styles.sheet, { paddingBottom: 20 + insets.bottom }]} onPress={() => undefined}>
          <View style={styles.header}>
            <Text style={styles.title}>{session.dateLabel}</Text>
            <Pressable onPress={onClose}>
              <Ionicons name="close" size={24} color={colors.primaryDark} />
            </Pressable>
          </View>

          <View style={styles.card}>
            <View style={styles.topRow}>
              <Image source={session.specialistAvatar} style={styles.avatar} />
              <View style={styles.specialistContent}>
                <Text style={styles.name}>{session.specialistName}</Text>
                <Text style={styles.role}>{session.specialistRole}</Text>
                <View style={styles.ratingBlock}>
                  <View style={styles.ratingLine}>
                    <Ionicons name="star" size={16} color="#FFC93C" />
                    <Text style={styles.ratingText}>{session.rating}</Text>
                  </View>
                  <Text style={styles.reviewsText}>{session.reviewsCount} отзывов</Text>
                </View>
              </View>
            </View>

            <View style={styles.infoCard}>
              <View style={styles.infoRow}>
                <Text style={styles.infoText}>6 октября</Text>
                <Text style={styles.infoText}>время {session.time}</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.price}>{session.price}</Text>
                <Text style={styles.status}>{session.status}</Text>
              </View>
              <Text style={styles.infoText}>{session.format}</Text>
            </View>
          </View>

          <View style={styles.buttonsRow}>
            <Pressable style={styles.cancelButton} onPress={onCancel}>
              <Text style={styles.cancelButtonText}>Отменить</Text>
            </Pressable>
            <Pressable style={styles.chatButton} onPress={onOpenChat}>
              <Text style={styles.chatButtonText}>Написать в чате</Text>
            </Pressable>
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.35)',
    justifyContent: 'flex-end',
  },
  sheet: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    ...typography.Inter[600],
    color: colors.primaryDark,
  },
  card: {
    marginTop: 16,
    backgroundColor: colors.cardLight,
    borderRadius: 14,
    padding: 16,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 360,
    marginRight: 14,
  },
  specialistContent: {
    flex: 1,
  },
  name: {
    fontSize: 14,
    ...typography.Inter[600],
    color: colors.primaryDark,
  },
  role: {
    fontSize: 14,
    color: colors.muted,
    marginTop: 2,
  },
  ratingBlock: {
    marginTop: 4,
  },
  ratingLine: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 6,
    fontSize: 14,
    fontWeight: '600',
    color: colors.primaryDark,
  },
  reviewsText: {
    marginTop: 2,
    fontSize: 14,
    color: colors.muted,
  },
  infoCard: {
    marginTop: 16,
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 14,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 14,
    ...typography.Inter[500],
    color: colors.primaryDark,
  },
  price: {
    fontSize: 14,
    ...typography.Inter[500],
    color: colors.primaryDark,
  },
  status: {
    fontSize: 14,
    color: '#70BFA0',
    ...typography.Inter[500],
  },
  buttonsRow: {
    marginTop: 22,
    flexDirection: 'row',
    gap: 10,
  },
  cancelButton: {
    flex: 1,
    height: 41,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelButtonText: {
    color: colors.primary,
    fontSize: 14,
    ...typography.Inter[600],
  },
  chatButton: {
    flex: 1,
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
