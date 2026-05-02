import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../constants/theme';

type ProfileTypeSwitcherProps = {
  selectedProfileType: 'main' | 'work';
  onSelectProfileType: (type: 'main' | 'work') => void;
};

export function ProfileTypeSwitcher({
  selectedProfileType,
  onSelectProfileType,
}: ProfileTypeSwitcherProps) {
  return (
    <View style={styles.row}>
      <Pressable style={styles.profileCard} onPress={() => onSelectProfileType('main')}>
        <View style={[styles.circle, selectedProfileType === 'main' ? styles.circleActive : styles.circleInactive]}>
          <Ionicons
            name="person"
            size={48}
            color={selectedProfileType === 'main' ? colors.white : colors.primary}
          />
        </View>
        <Text style={styles.label}>Основной{'\n'}Выбран</Text>
      </Pressable>

      <Pressable style={styles.profileCard} onPress={() => onSelectProfileType('work')}>
        <View style={[styles.circle, selectedProfileType === 'work' ? styles.circleActive : styles.circleInactive]}>
          <Ionicons
            name="person"
            size={48}
            color={selectedProfileType === 'work' ? colors.white : colors.primary}
          />
        </View>
        <Text style={styles.label}>Рабочий</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 28,
  },
  profileCard: {
    alignItems: 'center',
  },
  circle: {
    width: 108,
    height: 108,
    borderRadius: 54,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleActive: {
    backgroundColor: colors.primary,
  },
  circleInactive: {
    backgroundColor: colors.white,
  },
  label: {
    marginTop: 8,
    fontSize: 15,
    lineHeight: 18,
    ...typography.Inter[600],
    color: colors.primaryDark,
    textAlign: 'center',
  },
});
