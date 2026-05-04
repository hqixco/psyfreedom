import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../constants/theme';

export function PartnerHeroBanner({
  title,
  image,
}: {
  title: string;
  image: number;
}) {
  return (
    <ImageBackground source={image} style={styles.banner} imageStyle={styles.image}>
      <Text style={styles.title}>{title}</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  banner: {
    height: 97,
    borderRadius: 12,
    overflow: 'hidden',
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    lineHeight: 20,
    ...typography.Inter[600],
    color: colors.primaryDark,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
