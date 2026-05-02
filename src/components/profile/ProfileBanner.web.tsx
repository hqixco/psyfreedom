import { Ionicons } from '@expo/vector-icons';
import { Image, ImageSourcePropType, Pressable, StyleSheet, Text, View } from 'react-native';
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
        <Ionicons name="arrow-forward" size={20} color={colors.primary} style={styles.buttonIcon} />
      </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 14,
    overflow: 'hidden',
    padding: 20,
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
  },
  title: {
    color: colors.primaryDark,
    ...typography.Inter[700],
  },
  titleMint: {
    width: 190,
    fontSize: 20,
    lineHeight: 24,
  },
  titleBlue: {
    width: 310,
    fontSize: 20,
    lineHeight: 24,
  },
  description: {
    marginTop: 12,
    color: colors.primaryDark,
  },
  descriptionMint: {
    width: 160,
    fontSize: 12,
    lineHeight: 16,
  },
  descriptionBlue: {
    width: 290,
    fontSize: 13,
    lineHeight: 16,
  },
  button: {
    alignSelf: 'flex-start',
    backgroundColor: colors.white,
    paddingHorizontal: 22,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonMint: {
    marginTop: 26,
    height: 41,
    borderRadius: 360,
  },
  buttonBlue: {
    marginTop: 30,
    height: 40,
    borderRadius: 22,
  },
  buttonText: {
    fontSize: 16,
    ...typography.Inter[700],
    color: colors.primary,
  },
  buttonIcon: {
    marginLeft: 18,
  },
});
