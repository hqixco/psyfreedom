import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/theme';

export function QuestionnaireSelect({
  label,
  value,
  placeholder,
  onPress,
  icon = 'chevron-down',
}: {
  label: string;
  value: string;
  placeholder?: string;
  onPress: () => void;
  icon?: 'chevron-down' | 'calendar-outline';
}) {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <Pressable style={styles.field} onPress={onPress}>
        <Text style={[styles.value, !value ? styles.placeholder : null]}>
          {value || placeholder || ''}
        </Text>
        <Ionicons name={icon} size={18} color={colors.primaryDark} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 12,
    lineHeight: 16,
    color: colors.primaryDark,
    marginBottom: 6,
  },
  field: {
    height: 38,
    borderRadius: 19,
    borderWidth: 1,
    borderColor: '#C8C8C8',
    paddingHorizontal: 14,
    backgroundColor: colors.white,
    marginBottom: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  value: {
    fontSize: 14,
    color: colors.primaryDark,
    flex: 1,
  },
  placeholder: {
    color: colors.muted,
  },
});
