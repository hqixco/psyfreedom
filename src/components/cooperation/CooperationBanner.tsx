import { Image, ImageBackground, Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { colors, typography } from '../../constants/theme';
import { CooperationBannerItem } from '../../data/cooperationData';

export function CooperationBanner({
  item,
  onPress,
}: {
  item: CooperationBannerItem;
  onPress: () => void;
}) {
  const { width } = useWindowDimensions();
  const isMobile = width < 480;
  const imageBannerHeight =
    item.id === 'earn' ? 140 : 120;
  const backgroundColor =
    item.variant === 'blue'
      ? colors.blueLight
      : item.variant === 'mint'
        ? colors.mintLight
        : '#EAF0FF';

  if ((item.id === 'officeRent' || item.id === 'productReview' || item.id === 'earn') && item.image) {
    return (
      <Pressable
        style={[
          styles.imageBanner,
          { height: isMobile ? imageBannerHeight : 150 },
        ]}
        onPress={onPress}
      >
        <ImageBackground
          source={item.image}
          resizeMode="cover"
          style={styles.background}
          imageStyle={styles.imageBg}
        >
          <View style={styles.content}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        </ImageBackground>
      </Pressable>
    );
  }

  return (
    <Pressable style={[styles.banner, { backgroundColor }, isMobile ? styles.bannerMobile : null]} onPress={onPress}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      {item.image ? <Image source={item.image} style={styles.image} /> : null}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  banner: {
    height: 120,
    borderRadius: 12,
    paddingHorizontal: 23,
    justifyContent: 'center',
    overflow: 'hidden',
    marginBottom: 8,
    position: 'relative',
  },
  bannerMobile: {
    height: 160,
    paddingVertical: 18,
  },
  imageBanner: {
    height: 150,
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 8,
    position: 'relative',
  },
  background: {
    ...StyleSheet.absoluteFillObject,
  },
  imageBg: {
    borderRadius: 12,
  },
  content: {
    paddingHorizontal: 23,
    justifyContent: 'center',
    paddingTop: 18,
    paddingBottom: 18,
  },
  title: {
    fontSize: 16,
    lineHeight: 20,
    ...typography.Inter[600],
    color: colors.primaryDark,
    maxWidth: 210,
    paddingTop: 0,
  },
  description: {
    marginTop: 15,
    fontSize: 12,
    lineHeight: 15,
    color: colors.primaryDark,
    maxWidth: 230,
  },
  image: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 130,
    height: 76,
    resizeMode: 'cover',
  },
});
