import Svg, { Path } from 'react-native-svg';

type FavoriteHeartIconProps = {
  filled: boolean;
  filledColor?: string;
  emptyColor?: string;
};

export function FavoriteHeartIcon({
  filled,
  filledColor = '#FF6B6B',
  emptyColor = '#F5F9FD',
}: FavoriteHeartIconProps) {
  return (
    <Svg width={20} height={19} viewBox="0 0 20 19" fill="none">
      <Path
        d="M10 18.35L8.55 17.03C3.4 12.36 0 9.27 0 5.5C0 2.41 2.42 0 5.5 0C7.24 0 8.91 0.81 10 2.08C11.09 0.81 12.76 0 14.5 0C17.58 0 20 2.41 20 5.5C20 9.27 16.6 12.36 11.45 17.03L10 18.35Z"
        fill={filled ? filledColor : emptyColor}
      />
    </Svg>
  );
}
