import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/theme';

type JournalSectionHeaderProps = {
  title: string;
  onPressMore?: () => void;
};

export function JournalSectionHeader({ title, onPressMore }: JournalSectionHeaderProps) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      {onPressMore ? (
        <Pressable style={styles.button} onPress={onPressMore}>
          <Text style={styles.buttonText}>Ещё</Text>
        </Pressable>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 28,
    lineHeight: 34,
    fontWeight: '700',
    color: colors.text,
  },
  button: {
    height: 32,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 18,
    paddingHorizontal: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.muted,
  },
});
