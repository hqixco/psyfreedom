import { Image, ImageSourcePropType, Pressable, StyleSheet, Text, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { colors, typography } from '../../constants/theme';

type ProfileBannerProps = {
  title: string;
  description: string;
  buttonText: string;
  variant: 'mint' | 'blue';
  image?: ImageSourcePropType;
  height?: number;
  onPress?: () => void;
};

export function ProfileBanner({ title, description, buttonText, variant, image, height, onPress }: ProfileBannerProps) {
  const isMint = variant === 'mint';

  return (
    <View
      style={[
        styles.container,
        isMint ? styles.containerMint : styles.containerBlue,
        image ? styles.containerWithImage : null,
        height ? { height } : null,
      ]}
    >
      {image ? <Image source={image} style={styles.backgroundImage} /> : null}

      <View style={styles.content}>
      <Text style={[styles.title, isMint ? styles.titleMint : styles.titleBlue]}>{title}</Text>
      <Text style={[styles.description, isMint ? styles.descriptionMint : styles.descriptionBlue]}>{description}</Text>

      <Pressable style={[styles.button, isMint ? styles.buttonMint : styles.buttonBlue]} onPress={onPress ?? (() => console.log('profile banner'))}>
        <Text style={styles.buttonText}>{buttonText}</Text>
        <ArrowIcon />
      </Pressable>
      </View>
    </View>
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
    width: '100%',
    borderRadius: 14,
    overflow: 'hidden',
    position: 'relative',
  },
  containerMint: {
    height: 204,
    backgroundColor: colors.mintLight,
  },
  containerBlue: {
    height: 225,
    backgroundColor: colors.blueLight,
  },
  containerWithImage: {
    backgroundColor: colors.cardLight,
  },
  backgroundLayer: {
    ...StyleSheet.absoluteFillObject,
  },
  backgroundImage: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    zIndex: 0,
  },
  content: {
    position: 'relative',
    zIndex: 1,
    flex: 1,
    padding: 20,
  },
  title: {
    color: colors.primaryDark,
    ...typography.Inter[700],
  },
  titleMint: {
    width: 200,
    fontSize: 20,
    lineHeight: 24,
  },
  titleBlue: {
    width: 320,
    fontSize: 20,
    lineHeight: 24,
  },
  description: {
    marginTop: 12,
    color: colors.primaryDark,
  },
  descriptionMint: {
    width: 190,
    fontSize: 12,
    lineHeight: 16,
  },
  descriptionBlue: {
    width: 320,
    fontSize: 13,
    lineHeight: 16,
  },
  button: {
    alignSelf: 'flex-start',
    width: 135,
    height: 41,
    borderRadius: 360,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 14,
  },
  buttonMint: {
    marginTop: 26,
  },
  buttonBlue: {
    marginTop: 30,
  },
  buttonText: {
    fontSize: 14,
    ...typography.Inter[500],
    color: '#008CA3',
  },
});
