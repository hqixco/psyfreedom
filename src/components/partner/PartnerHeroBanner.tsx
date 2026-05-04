import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../constants/theme';

export function PartnerHeroBanner({
  title,
  image,
}: {
  title: string;
  image: ImageSourcePropType;
}) {
  return (
    <View style={styles.banner}>
      <Image source={image} resizeMode="cover" style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </View>
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
    position: 'relative',
    backgroundColor: colors.cardLight,
  },
  title: {
    fontSize: 16,
    lineHeight: 20,
    ...typography.Inter[600],
    color: colors.primaryDark,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
  },
});
