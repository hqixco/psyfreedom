import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/theme';

type ProductStickyActionBarProps = {
  bottomOffset: number;
  bottomPadding?: number;
  label: string;
  note?: string;
  priceLabel?: string;
  showFavorite?: boolean;
  favorite?: boolean;
  onToggleFavorite?: () => void;
  onPress: () => void;
};

export function ProductStickyActionBar({
  bottomOffset,
  bottomPadding = 10,
  label,
  note,
  priceLabel,
  showFavorite = false,
  favorite = false,
  onToggleFavorite,
  onPress,
}: ProductStickyActionBarProps) {
  return (
    <View style={[styles.wrap, { bottom: bottomOffset, paddingBottom: bottomPadding }]}>
      <View style={styles.row}>
        {showFavorite ? (
          <Pressable style={styles.favoriteButton} onPress={onToggleFavorite}>
            <Ionicons
              name={favorite ? 'heart' : 'heart-outline'}
              size={24}
              color={colors.primary}
            />
          </Pressable>
        ) : null}
        <Pressable
          style={[
            styles.button,
            showFavorite ? styles.buttonWithFavorite : styles.buttonFullWidth,
          ]}
          onPress={onPress}
        >
          {priceLabel ? (
            <>
              <Text style={styles.buttonText}>{label}</Text>
              <Text style={styles.buttonText}>{priceLabel}</Text>
            </>
          ) : (
            <Text style={styles.buttonText}>{label}</Text>
          )}
        </Pressable>
      </View>
      {note ? <Text style={styles.note}>{note}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    position: 'absolute',
    left: 0,
    right: 0,
    paddingHorizontal: 16,
    paddingTop: 10,
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: '#F1F1F1',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  favoriteButton: {
    width: 52,
    height: 52,
    marginRight: 10,
    borderRadius: 26,
    borderWidth: 1,
    borderColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: 52,
    borderRadius: 26,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  buttonFullWidth: {
    flex: 1,
  },
  buttonWithFavorite: {
    flex: 1,
    paddingHorizontal: 28,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.white,
  },
  note: {
    marginTop: 8,
    marginBottom: 8,
    textAlign: 'center',
    fontSize: 12,
    color: colors.muted,
  },
});
