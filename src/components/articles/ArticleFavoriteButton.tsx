import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text } from 'react-native';
import { colors, typography } from '../../constants/theme';

type ArticleFavoriteButtonProps = {
  isFavorite: boolean;
  onPress: () => void;
};

export function ArticleFavoriteButton({
  isFavorite,
  onPress,
}: ArticleFavoriteButtonProps) {
  return (
    <Pressable
      style={[styles.button, isFavorite ? styles.buttonActive : null]}
      onPress={onPress}
    >
      <Ionicons
        name={isFavorite ? 'heart' : 'heart-outline'}
        size={24}
        color={colors.primary}
        style={styles.icon}
      />
      <Text style={styles.text}>{isFavorite ? 'В избранном' : 'Добавить в избранное'}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 16,
    marginTop: 36,
    marginBottom: 24,
    height: 52,
    borderRadius: 26,
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonActive: {
    backgroundColor: '#EAF8FA',
  },
  icon: {
    marginRight: 10,
  },
  text: {
    fontSize: 16,
    ...typography.Inter[700],
    color: colors.primary,
  },
});

