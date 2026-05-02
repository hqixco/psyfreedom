import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text } from 'react-native';
import { colors, typography } from '../../constants/theme';

type FavoriteButtonProps = {
  isFavorite: boolean;
  onPress: () => void;
};

export function FavoriteButton({ isFavorite, onPress }: FavoriteButtonProps) {
  return (
    <Pressable style={[styles.button, isFavorite ? styles.activeButton : null]} onPress={onPress}>
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
    marginTop: 42,
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
  activeButton: {
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

