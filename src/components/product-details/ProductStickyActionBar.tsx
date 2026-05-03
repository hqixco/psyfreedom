import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../constants/theme';

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
  const hasSplitContent = Boolean(priceLabel);

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
            hasSplitContent && styles.buttonSplit,
            showFavorite ? styles.buttonWithFavorite : styles.buttonFullWidth,
          ]}
          onPress={onPress}
        >
          {priceLabel ? (
            <>
              <Text style={styles.buttonText}>{label}</Text>
              <Text style={styles.priceText}>{priceLabel}</Text>
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
    width: 41,
    height: 41,
    marginRight: 10,
    borderRadius: 360,
    borderWidth: 1,
    borderColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: 41,
    borderRadius: 360,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  buttonSplit: {
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonFullWidth: {
    flex: 1,
  },
  buttonWithFavorite: {
    flex: 1,
    paddingHorizontal: 35,
  },
  buttonText: {
    fontSize: 14,
    ...typography.Inter[600],
    color: colors.white,
  },
  priceText: {
    fontSize: 16,
    ...typography.Inter[600],
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
