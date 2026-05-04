import { ImageBackground, Pressable, StyleSheet, Text } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { theme, typography } from '../constants/theme';

export function PlatformGuideBanner() {
  return (
    <ImageBackground
      source={require('../../assets/platform-guide-banner-bg.jpg')}
      style={styles.container}
      imageStyle={styles.backgroundImage}
      resizeMode="cover"
    >
      <Text style={styles.title}>Как пользоваться платформой</Text>
      <Text style={styles.subtitle}>Возможности платформы и ее функции</Text>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Перейти</Text>
        <ArrowIcon />
      </Pressable>
    </ImageBackground>
  );
}

function ArrowIcon() {
  return (
    <Svg width={18} height={11} viewBox="0 0 20 12" fill="none">
      <Path
        d="M0.75 4.77295C0.335786 4.77295 0 5.10874 0 5.52295C0 5.93716 0.335786 6.27295 0.75 6.27295V5.52295V4.77295ZM19.2803 6.05328C19.5732 5.76039 19.5732 5.28551 19.2803 4.99262L14.5074 0.219648C14.2145 -0.073245 13.7396 -0.073245 13.4467 0.219648C13.1538 0.512542 13.1538 0.987415 13.4467 1.28031L17.6893 5.52295L13.4467 9.76559C13.1538 10.0585 13.1538 10.5334 13.4467 10.8263C13.7396 11.1191 14.2145 11.1191 14.5074 10.8263L19.2803 6.05328ZM0.75 5.52295V6.27295H18.75V5.52295V4.77295H0.75V5.52295Z"
        fill="#008CA3"
      />
    </Svg>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 18,
    marginTop: 44,
    marginBottom: 5,
    height: 204,
    borderRadius: 12,
    overflow: 'hidden',
    padding: 20,
  },
  backgroundImage: {
    borderRadius: 12,
  },
  title: {
    width: 190,
    fontSize: 20,
    lineHeight: 24,
    color: theme.primaryDark,
    ...typography.Inter[600],
  },
  subtitle: {
    width: 160,
    marginTop: 16,
    fontSize: 12,
    lineHeight: 16,
    color: theme.primaryDark,
    ...typography.Inter[400],
  },
  button: {
    marginTop: 26,
    width: 135,
    height: 41,
    borderRadius: 360,
    backgroundColor: theme.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 14,
  },
  buttonText: {
    fontSize: 14,
    color: '#008CA3',
    ...typography.Inter[500],
  },
});

