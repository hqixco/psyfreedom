import { Image, StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../constants/theme';

export function PartnerHeroBanner({
  title,
  image,
}: {
  title: string;
  image: number;
}) {
  return (
    <View style={styles.banner}>
      <Text style={styles.title}>{title}</Text>
      <Image source={image} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    height: 112,
    borderRadius: 12,
    backgroundColor: colors.blueLight,
    overflow: 'hidden',
    paddingLeft: 20,
    paddingRight: 130,
    justifyContent: 'center',
  },
  title: {
    fontSize: 19,
    lineHeight: 23,
    ...typography.Inter[700],
    color: colors.primaryDark,
  },
  image: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 130,
    height: 112,
    resizeMode: 'contain',
  },
});
