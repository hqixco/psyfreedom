import { Image, ImageStyle, Pressable, StyleProp, StyleSheet, Text, TextStyle, ViewStyle } from 'react-native';
import { colors, typography } from '../../constants/theme';

const favoriteIcon = require('../../../assets/video-journal-favorite.svg');

type FavoriteButtonProps = {
  isFavorite: boolean;
  onPress: () => void;
  buttonStyle?: StyleProp<ViewStyle>;
  activeButtonStyle?: StyleProp<ViewStyle>;
  iconStyle?: StyleProp<ImageStyle>;
  textStyle?: StyleProp<TextStyle>;
  activeLabel?: string;
  inactiveLabel?: string;
};

export function FavoriteButton({
  isFavorite,
  onPress,
  buttonStyle,
  activeButtonStyle,
  iconStyle,
  textStyle,
  activeLabel = 'В избранном',
  inactiveLabel = 'Добавить в избранное',
}: FavoriteButtonProps) {
  return (
    <Pressable
      style={[styles.button, buttonStyle, isFavorite ? styles.activeButton : null, isFavorite ? activeButtonStyle : null]}
      onPress={onPress}
    >
      <Image source={favoriteIcon} style={[styles.icon, iconStyle]} resizeMode="contain" />
      <Text style={[styles.text, textStyle]}>{isFavorite ? activeLabel : inactiveLabel}</Text>
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
    width: 20,
    height: 19,
    marginRight: 10,
  },
  text: {
    fontSize: 16,
    ...typography.Inter[700],
    color: colors.primary,
  },
});
