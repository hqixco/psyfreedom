import { BackChevronIcon } from '../icons/BackChevronIcon';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../constants/theme';

export function WorkingReviewsHeader({ onBack }: { onBack: () => void }) {
  return (
    <View style={styles.container}>
      <Pressable style={styles.back} onPress={onBack}>
        <BackChevronIcon color={colors.primaryDark} />
      </Pressable>
      <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
        Отзывы
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
  back: {
    marginRight: 20,
  },
  title: {
    fontSize: 18,
    lineHeight: 56,
    ...typography.Inter[600],
    color: colors.primaryDark,
  },
});
