import Svg, { Path } from 'react-native-svg';

type BackChevronIconProps = {
  color?: string;
  width?: number;
  height?: number;
};

export function BackChevronIcon({
  color = '#033542',
  width = 7,
  height = 13,
}: BackChevronIconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 7 13" fill="none">
      <Path
        d="M6.25 11.75L0.75 6.25L6.25 0.75"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
