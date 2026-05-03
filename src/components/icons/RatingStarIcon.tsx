import { Image, StyleSheet } from 'react-native';

const ratingStarIcon = require('../../../assets/Vector (6).svg');

type RatingStarIconProps = {
  width?: number;
};

export function RatingStarIcon({ width = 16.5 }: RatingStarIconProps) {
  const height = (16 / 17) * width;

  return (
    <Image
      source={ratingStarIcon}
      style={[styles.icon, { width, height }]}
      resizeMode="contain"
    />
  );
}

const styles = StyleSheet.create({
  icon: {
    flexShrink: 0,
  },
});
