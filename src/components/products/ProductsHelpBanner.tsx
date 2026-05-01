import { Ionicons } from '@expo/vector-icons';
import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/theme';

type ProductsHelpBannerProps = {
  onPress: () => void;
};

export function ProductsHelpBanner({ onPress }: ProductsHelpBannerProps) {
  return (
    <ImageBackground
      source={require('../../../assets/Rectangle 17114.jpg')}
      resizeMode="cover"
      style={styles.banner}
      imageStyle={styles.bannerImage}
    >
      <Text style={styles.title}>{'Нужна помощь\nспециалиста?'}</Text>
      <Text style={styles.description}>
        {'Регистрируйся на нашем\nсайте и пользуйся всеми\nпреимуществами\nмаркетплейса'}
      </Text>
      <Pressable style={styles.buttonWrap} onPress={onPress}>
        <View style={styles.buttonArrowBubble}>
          <Ionicons name="arrow-forward" size={16} color={colors.primary} />
        </View>
        <View style={styles.buttonMain}>
          <Text style={styles.buttonText}>Подобрать специалиста</Text>
        </View>
      </Pressable>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  banner: {
    height: 233,
    marginHorizontal: 16,
    marginTop: 14,
    marginBottom: 20,
    borderRadius: 12,
    overflow: 'hidden',
    paddingLeft: 18,
    paddingTop: 16,
    paddingBottom: 14,
    paddingRight: 130,
    backgroundColor: colors.blueLight,
  },
  bannerImage: {
    borderRadius: 12,
  },
  title: {
    width: 190,
    fontSize: 20,
    lineHeight: 24,
    fontWeight: '600',
    color: colors.primaryDark,
    zIndex: 1,
  },
  description: {
    width: 185,
    marginTop: 8,
    fontSize: 12,
    lineHeight: 15,
    color: colors.primaryDark,
    zIndex: 1,
  },
  buttonWrap: {
    position: 'absolute',
    left: 18,
    bottom: 20,
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 2,
  },
  buttonArrowBubble: {
    width: 66,
    height: 41,
    marginRight: -25,
    paddingLeft: 15,
    borderRadius: 360,
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: colors.white,
    zIndex: 0,
  },
  buttonMain: {
    height: 41,
    paddingLeft: 23,
    paddingRight: 23,
    borderRadius: 360,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    zIndex: 1,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.white,
  },
});
