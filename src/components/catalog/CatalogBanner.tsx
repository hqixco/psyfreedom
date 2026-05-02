import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../constants/theme';

type CatalogBannerProps = {
  title: string;
  subtitle?: string;
  image: number;
  height: number;
  backgroundColor: string;
};

export function CatalogBanner({ title, subtitle, image, height, backgroundColor }: CatalogBannerProps) {
  return (
    <ImageBackground
      source={image}
      resizeMode="cover"
      style={[styles.banner, { height, backgroundColor }]}
      imageStyle={styles.bannerImage}
    >
      <Text style={[styles.bannerTitle, height > 140 ? styles.bannerTitleLarge : null]}>{title}</Text>
      {subtitle ? <Text style={[styles.bannerSubtitle, height > 140 ? styles.bannerSubtitleMuted : null]}>{subtitle}</Text> : null}
      <View />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  banner: {
    marginHorizontal: 16,
    marginTop: 10,
    borderRadius: 10,
    padding: 16,
    overflow: 'hidden',
  },
  bannerTitle: {
    fontSize: 20,
    ...typography.Inter[700],
    color: colors.white,
    zIndex: 1,
  },
  bannerTitleLarge: {
    fontSize: 21,
    lineHeight: 25,
  },
  bannerSubtitle: {
    marginTop: 10,
    fontSize: 15,
    color: colors.white,
    zIndex: 1,
  },
  bannerSubtitleMuted: {
    color: 'rgba(255,255,255,0.75)',
  },
  bannerImage: {
    borderRadius: 10,
  },
});
