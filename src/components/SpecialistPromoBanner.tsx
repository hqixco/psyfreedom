import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { theme, typography } from '../constants/theme';

export function SpecialistPromoBanner() {
  return (
    <ImageBackground
      source={require('../../assets/specialist-promo-banner-bg.png')}
      style={styles.container}
      imageStyle={styles.backgroundImage}
      resizeMode="cover"
    >
      <Text style={styles.title}>
        {'\u041a\u0430\u043a \u0441\u0442\u0430\u0442\u044c \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442\u043e\u043c \u0438 \u043d\u0430\u0447\u0430\u0442\u044c \u0437\u0430\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c \u0441 \u043d\u0430\u0448\u0435\u0439 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u043e\u0439'}
      </Text>
      <Text style={styles.subtitle}>
        {'\u0418\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u044b \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u043d\u0430 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0435, \u043c\u0435\u0445\u0430\u043d\u0438\u043a\u0438 \u0437\u0430\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0438 \u043f\u0440\u043e\u0434\u0432\u0438\u0436\u0435\u043d\u0438\u044f'}
      </Text>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>{'\u041f\u0435\u0440\u0435\u0439\u0442\u0438'}</Text>
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
    marginHorizontal: 16,
    marginTop: 5,
    height: 225,
    borderRadius: 12,
    overflow: 'hidden',
    paddingHorizontal: 20,
    paddingTop: 22,
    paddingBottom: 20,
  },
  backgroundImage: {
    borderRadius: 12,
  },
  title: {
    width: 310,
    fontSize: 20,
    lineHeight: 24,
    color: theme.primaryDark,
    ...typography.Inter[600],
  },
  subtitle: {
    width: 290,
    marginTop: 12,
    fontSize: 13,
    lineHeight: 16,
    color: theme.primaryDark,
    ...typography.Inter[400],
  },
  button: {
    marginTop: 30,
    width: 135,
    height: 40,
    borderRadius: 22,
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

