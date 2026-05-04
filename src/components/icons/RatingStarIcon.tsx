import { Ionicons } from '@expo/vector-icons';

type RatingStarIconProps = {
  size?: number;
};

export function RatingStarIcon({ size = 16.5 }: RatingStarIconProps) {
  return <Ionicons name="star" size={size} color="#FFC93C" />;
}
