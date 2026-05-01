import { Ionicons } from '@expo/vector-icons';
import { Image, ImageSourcePropType, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/theme';

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
    <View style={[styles.container, isMint ? styles.containerMint : styles.containerBlue, height ? { minHeight: height } : null]}>
      <Text style={[styles.title, isMint ? styles.titleMint : styles.titleBlue]}>{title}</Text>
      <Text style={styles.description}>{description}</Text>

      <Pressable style={styles.button} onPress={onPress ?? (() => console.log('profile banner'))}>
        <Text style={styles.buttonText}>{buttonText}</Text>
        <Ionicons name="arrow-forward" size={20} color={colors.primary} style={styles.buttonIcon} />
      </Pressable>

      {image ? <Image source={image} style={styles.image} /> : null}
      {!image ? <View style={[styles.decor, isMint ? styles.decorMint : styles.decorBlue]} /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 14,
    overflow: 'hidden',
    padding: 20,
  },
  containerMint: {
    minHeight: 170,
    backgroundColor: colors.mintLight,
  },
  containerBlue: {
    minHeight: 190,
    backgroundColor: colors.blueLight,
  },
  title: {
    color: colors.primaryDark,
    fontWeight: '700',
  },
  titleMint: {
    fontSize: 20,
    lineHeight: 28,
    width: 230,
  },
  titleBlue: {
    fontSize: 20,
    lineHeight: 26,
    paddingRight: 30,
  },
  description: {
    marginTop: 12,
    fontSize: 14,
    lineHeight: 18,
    color: colors.primaryDark,
    width: 220,
  },
  button: {
    marginTop: 22,
    height: 42,
    borderRadius: 21,
    backgroundColor: colors.white,
    paddingHorizontal: 22,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.primary,
  },
  buttonIcon: {
    marginLeft: 18,
  },
  image: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 180,
    height: 170,
    resizeMode: 'contain',
  },
  decor: {
    position: 'absolute',
    right: -20,
    bottom: -10,
    width: 160,
    height: 160,
    borderRadius: 80,
    opacity: 0.25,
  },
  decorMint: {
    backgroundColor: '#B9F6D4',
  },
  decorBlue: {
    backgroundColor: '#B8EDF7',
  },
});
