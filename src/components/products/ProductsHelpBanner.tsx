import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { colors, typography } from '../../constants/theme';

const arrowIconXml = `<svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.75 4.77295C0.335786 4.77295 0 5.10874 0 5.52295C0 5.93716 0.335786 6.27295 0.75 6.27295V5.52295V4.77295ZM19.2803 6.05328C19.5732 5.76039 19.5732 5.28551 19.2803 4.99262L14.5074 0.219648C14.2145 -0.073245 13.7396 -0.073245 13.4467 0.219648C13.1538 0.512542 13.1538 0.987415 13.4467 1.28031L17.6893 5.52295L13.4467 9.76559C13.1538 10.0585 13.1538 10.5334 13.4467 10.8263C13.7396 11.1191 14.2145 11.1191 14.5074 10.8263L19.2803 6.05328ZM0.75 5.52295V6.27295H18.75V5.52295V4.77295H0.75V5.52295Z" fill="#05728F"/>
</svg>`;

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
          <SvgXml xml={arrowIconXml} width={20} height={12} />
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
    paddingTop: 21,
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
    ...typography.Inter[600],
    color: colors.primaryDark,
    zIndex: 1,
  },
  description: {
    width: 185,
    marginTop: 17,
    fontSize: 12,
    lineHeight: 15,
    ...typography.Inter[400],
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
    paddingLeft: 11,
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
    ...typography.Inter[500],
    color: colors.white,
  },
});
