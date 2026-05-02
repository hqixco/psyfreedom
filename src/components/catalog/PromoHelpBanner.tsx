import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../constants/theme';

type PromoHelpBannerProps = {
  title?: string;
  description?: string;
  buttonLabel?: string;
  onPress?: () => void;
};

export function PromoHelpBanner({
  title = 'Нужна помощь специалиста?',
  description = 'Регистрируйся на нашем сайте и пользуйся всеми преимуществами маркетплейса',
  buttonLabel = 'Подобрать специалиста',
  onPress,
}: PromoHelpBannerProps) {
  return (
    <View style={styles.banner}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{buttonLabel}</Text>
      </Pressable>
      <Image source={require('../../../assets/images/promo-help.png')} style={styles.image} resizeMode="cover" />
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 12,
    backgroundColor: colors.mintLight,
    padding: 18,
    minHeight: 160,
    overflow: 'hidden',
  },
  title: {
    maxWidth: '68%',
    fontSize: 22,
    lineHeight: 26,
    ...typography.Inter[700],
    color: colors.primaryDark,
  },
  description: {
    maxWidth: '72%',
    marginTop: 12,
    fontSize: 13,
    lineHeight: 17,
    color: colors.primaryDark,
  },
  button: {
    marginTop: 20,
    height: 42,
    paddingHorizontal: 18,
    alignSelf: 'flex-start',
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  buttonText: {
    fontSize: 14,
    ...typography.Inter[700],
    color: colors.primary,
  },
  image: {
    position: 'absolute',
    right: -8,
    bottom: 0,
    width: 130,
    height: 160,
    opacity: 0.28,
  },
});
