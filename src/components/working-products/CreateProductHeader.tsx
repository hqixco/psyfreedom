import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../constants/theme';
import { BackChevronIcon } from '../icons/BackChevronIcon';

export function CreateProductHeader({
  onBack,
  title = 'Создание товара',
}: {
  onBack: () => void;
  title?: string;
}) {
  return (
    <View style={styles.container}>
      <Pressable style={styles.backButton} onPress={onBack}>
        <BackChevronIcon color={colors.primaryDark} />
      </Pressable>
      <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
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
