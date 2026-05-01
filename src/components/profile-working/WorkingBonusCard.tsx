import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/theme';
import { workingProfileMock } from '../../data/workingProfileData';

export function WorkingBonusCard({
  onHistory,
  onTopUp,
}: {
  onHistory: () => void;
  onTopUp: () => void;
}) {
  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <View style={styles.pill} />
        <Text style={styles.amount}>{workingProfileMock.bonuses.amount} бонусов</Text>
      </View>

      <Text style={styles.description}>{workingProfileMock.bonuses.description}</Text>

      <View style={styles.buttonsRow}>
        <Pressable style={styles.historyButton} onPress={onHistory}>
          <Text style={styles.historyText}>История</Text>
        </Pressable>
        <Pressable style={styles.topUpButton} onPress={onTopUp}>
          <Text style={styles.topUpText}>Пополнить</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: 18,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.white,
    padding: 18,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pill: {
    width: 52,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#65C6D6',
    marginRight: 14,
  },
  amount: {
    fontSize: 28,
    lineHeight: 34,
    fontWeight: '700',
    color: colors.primary,
  },
  description: {
    marginTop: 14,
    fontSize: 15,
    lineHeight: 19,
    color: colors.primaryDark,
  },
  buttonsRow: {
    marginTop: 18,
    flexDirection: 'row',
    gap: 10,
  },
  historyButton: {
    flex: 1,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  historyText: {
    color: colors.primary,
    fontSize: 15,
    fontWeight: '700',
  },
  topUpButton: {
    flex: 1,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topUpText: {
    color: colors.white,
    fontSize: 15,
    fontWeight: '700',
  },
});
