import { BackChevronIcon } from '../icons/BackChevronIcon';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../constants/theme';

export function OfficeRentHeader({ onBack }: { onBack: () => void }) {
  return (
    <View style={styles.container}>
      <Pressable style={styles.backButton} onPress={onBack}>
        <BackChevronIcon color={colors.primaryDark} />
      </Pressable>
      <Text style={styles.title} numberOfLines={1}>
        Аренда кабинета
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 56,
    paddingHorizontal: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 20,
  },
  title: {
    flex: 1,
    fontSize: 18,
    lineHeight: 56,
    ...typography.Inter[700],
    color: colors.primaryDark,
  },
});
