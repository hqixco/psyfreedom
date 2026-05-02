import { Ionicons } from '@expo/vector-icons';
import { BackChevronIcon } from '../icons/BackChevronIcon';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../constants/theme';

export function MySessionsHeader({ onBack }: { onBack: () => void }) {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Pressable onPress={onBack} style={styles.backButton}>
          <BackChevronIcon color={colors.primaryDark} />
        </Pressable>
        <Text style={styles.title}>Мои сессии</Text>
      </View>
      <Ionicons name="notifications-outline" size={26} color={colors.primaryDark} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 56,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 12,
  },
  title: {
    fontSize: 26,
    lineHeight: 32,
    ...typography.Inter[700],
    color: colors.primaryDark,
  },
});
