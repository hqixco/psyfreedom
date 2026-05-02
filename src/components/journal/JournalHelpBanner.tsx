import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { colors, typography } from '../../constants/theme';

const arrowIconXml = `<svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.75 4.77295C0.335786 4.77295 0 5.10874 0 5.52295C0 5.93716 0.335786 6.27295 0.75 6.27295V5.52295V4.77295ZM19.2803 6.05328C19.5732 5.76039 19.5732 5.28551 19.2803 4.99262L14.5074 0.219648C14.2145 -0.073245 13.7396 -0.073245 13.4467 0.219648C13.1538 0.512542 13.1538 0.987415 13.4467 1.28031L17.6893 5.52295L13.4467 9.76559C13.1538 10.0585 13.1538 10.5334 13.4467 10.8263C13.7396 11.1191 14.2145 11.1191 14.5074 10.8263L19.2803 6.05328ZM0.75 5.52295V6.27295H18.75V5.52295V4.77295H0.75V5.52295Z" fill="#05728F"/>
</svg>`;

type JournalHelpBannerProps = {
  onPress: () => void;
};

export function JournalHelpBanner({ onPress }: JournalHelpBannerProps) {
  return (
    <ImageBackground 
      source={require('../../../assets/Rectangle 114.jpg')} 
      style={styles.banner}
      resizeMode="cover"
    >
      <Text style={styles.title}>{'Не можете найти\nрешение своей\nпроблемы?'}</Text>
      <Pressable style={styles.buttonWrap} onPress={onPress}>
        <View style={styles.arrowCapsule}>
          <SvgXml xml={arrowIconXml} width={20} height={12} />
        </View>
        <View style={styles.mainButton}>
          <Text style={styles.buttonText}>Напишите нам</Text>
        </View>
      </Pressable>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  banner: {
    width: 370,
    height: 185,
    marginHorizontal: 16,
    marginTop: 8,
    borderRadius: 12,
    overflow: 'hidden',
    paddingLeft: 20,
    paddingTop: 18,
    paddingBottom: 16,
    paddingRight: 20,
  },
  title: {
    width: 220,
    fontSize: 20,
    lineHeight: 24,
    ...typography.Inter[600],
    color: colors.primaryDark,
  },
  buttonWrap: {
    position: 'absolute',
    left: 18,
    bottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 2,
  },
  arrowCapsule: {
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
  mainButton: {
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
    ...typography.Inter[600],
    color: colors.white,
  },
});
