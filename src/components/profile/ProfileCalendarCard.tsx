import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/theme';
import { profileAppointments } from '../../data/authorizedProfileData';

export function ProfileCalendarCard({ onOpenSessions }: { onOpenSessions: () => void }) {
  return (
    <Pressable style={styles.card} onPress={onOpenSessions}>
      <Text style={styles.title}>Календарь записи</Text>

      <View style={styles.headerRow}>
        <Text style={styles.label}>Ближайшая запись</Text>
        <Text style={styles.date}>12 июня</Text>
      </View>

      <View style={styles.appointments}>
        {profileAppointments.map((item) => (
          <View key={item.id} style={styles.appointmentCard}>
            <Text style={styles.time}>{item.time}</Text>
            <Text style={styles.appointmentTitle}>{item.title}</Text>
            <Ionicons name="chevron-forward" size={20} color={colors.primaryDark} />
          </View>
        ))}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.cardLight,
    borderRadius: 14,
    padding: 18,
    marginTop: 8,
  },
  title: {
    fontSize: 24,
    lineHeight: 30,
    fontWeight: '700',
    color: colors.primaryDark,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 18,
  },
  label: {
    fontSize: 16,
    color: colors.primaryDark,
  },
  date: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.primaryDark,
  },
  appointments: {
    marginTop: 14,
    gap: 8,
  },
  appointmentCard: {
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.white,
    paddingHorizontal: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  time: {
    color: colors.primary,
    fontWeight: '700',
    width: 54,
  },
  appointmentTitle: {
    flex: 1,
    color: colors.primaryDark,
    marginHorizontal: 8,
  },
});
