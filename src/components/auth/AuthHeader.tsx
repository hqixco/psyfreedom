import { BackChevronIcon } from '../icons/BackChevronIcon';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../constants/theme';

type AuthHeaderProps = {
  onBack: () => void;
  title?: string;
};

export function AuthHeader({ onBack, title }: AuthHeaderProps) {
  return (
    <View style={styles.container}>
      <Pressable onPress={onBack} style={styles.backButton}>
        <BackChevronIcon color={colors.primaryDark} />
      </Pressable>
      {title ? (
        <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
          {title}
        </Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 25,
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
