import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../constants/theme';
import { BackChevronIcon } from '../icons/BackChevronIcon';

export function CooperationHeader({ onBack }: { onBack: () => void }) {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Pressable style={styles.back} onPress={onBack}>
          <BackChevronIcon color={colors.primaryDark} />
        </Pressable>
        <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
          Сотрудничество
        </Text>
      </View>
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
  back: {
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
