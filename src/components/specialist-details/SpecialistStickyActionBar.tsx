import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../constants/theme';

type SpecialistStickyActionBarProps = {
  bottomInset: number;
  isFavorite: boolean;
  onToggleFavorite: () => void;
  onPressAppointment: () => void;
};

export function SpecialistStickyActionBar({
  bottomInset,
  isFavorite,
  onToggleFavorite,
  onPressAppointment,
}: SpecialistStickyActionBarProps) {
  return (
    <View style={[styles.wrap, { paddingBottom: 10 + bottomInset }]}>
      <Pressable style={styles.favoriteButton} onPress={onToggleFavorite}>
        <Ionicons
          name={isFavorite ? 'heart' : 'heart-outline'}
          size={24}
          color={colors.primary}
        />
      </Pressable>
      <Pressable style={styles.mainButton} onPress={onPressAppointment}>
        <Text style={styles.mainButtonText}>Записаться</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: 16,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#F1F1F1',
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
  },
  favoriteButton: {
    width: 41,
    height: 41,
    borderRadius: 360,
    borderWidth: 1,
    borderColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  mainButton: {
    flex: 1,
    height: 41,
    borderRadius: 360,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  mainButtonText: {
    fontSize: 14,
    ...typography.Inter[600],
    color: colors.white,
  },
});
