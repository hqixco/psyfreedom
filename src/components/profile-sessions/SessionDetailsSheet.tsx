import { Ionicons } from '@expo/vector-icons';
import { Image, Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../../constants/theme';
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
    <Modal transparent animationType="slide" visible={visible} onRequestClose={onClose}>
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
                <View style={styles.ratingRow}>
                  <Ionicons name="star" size={16} color="#FFC93C" />
                  <Text style={styles.ratingText}>
                    {session.rating} {session.reviewsCount} отзывов
                  </Text>
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
    fontSize: 24,
    fontWeight: '700',
    color: colors.primaryDark,
  },
  card: {
    marginTop: 20,
    backgroundColor: colors.cardLight,
    borderRadius: 14,
    padding: 16,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 76,
    height: 76,
    borderRadius: 38,
    marginRight: 14,
  },
  specialistContent: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.primaryDark,
  },
  role: {
    fontSize: 15,
    color: colors.muted,
    marginTop: 2,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  ratingText: {
    marginLeft: 6,
    fontSize: 14,
    color: colors.primaryDark,
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
    fontSize: 16,
    color: colors.primaryDark,
  },
  price: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.primaryDark,
  },
  status: {
    fontSize: 14,
    color: '#70BFA0',
    fontWeight: '600',
  },
  buttonsRow: {
    marginTop: 22,
    flexDirection: 'row',
    gap: 10,
  },
  cancelButton: {
    flex: 1,
    height: 48,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelButtonText: {
    color: colors.primary,
    fontSize: 15,
    fontWeight: '700',
  },
  chatButton: {
    flex: 1,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chatButtonText: {
    color: colors.white,
    fontSize: 15,
    fontWeight: '700',
  },
});
