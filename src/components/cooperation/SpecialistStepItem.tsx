import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../constants/theme';

export function SpecialistStepItem({
  title,
  description,
  isOpen,
  onPress,
}: {
  title: string;
  description: string;
  isOpen: boolean;
  onPress: () => void;
}) {
  return (
    <View style={styles.container}>
      <Pressable style={styles.header} onPress={onPress}>
        <Text style={styles.title}>{title}</Text>
        <Ionicons
          name={isOpen ? 'chevron-up' : 'chevron-down'}
          size={17}
          color={colors.primaryDark}
        />
      </Pressable>
      {isOpen ? (
        <View style={styles.content}>
          <Text style={styles.description}>{description}</Text>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.cardLight,
    borderRadius: 8,
    marginBottom: 4,
    overflow: 'hidden',
  },
  header: {
    minHeight: 48,
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },
  title: {
    flex: 1,
    fontSize: 14,
    lineHeight: 18,
    ...typography.Inter[600],
    color: colors.primaryDark,
  },
  content: {
    paddingHorizontal: 16,
    paddingBottom: 14,
  },
  description: {
    fontSize: 14,
    lineHeight: 18,
    color: colors.primaryDark,
  },
});
