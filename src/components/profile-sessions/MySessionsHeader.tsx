import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../constants/theme';
import { BackChevronIcon } from '../icons/BackChevronIcon';

export function MySessionsHeader({ onBack }: { onBack: () => void }) {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Pressable onPress={onBack} style={styles.backButton}>
          <BackChevronIcon color={colors.primaryDark} />
        </Pressable>
        <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
          Мои сессии
        </Text>
      </View>
      <Ionicons name="notifications-outline" size={26} color={colors.primaryDark} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 56,
    paddingHorizontal: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  backButton: {
    marginRight: 20,
  },
  title: {
    flexShrink: 1,
    fontSize: 18,
    lineHeight: 56,
    ...typography.Inter[600],
    color: colors.primaryDark,
  },
});
