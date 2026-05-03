import Svg, { Path } from 'react-native-svg';

export function SelectChevronIcon({
  width = 13,
  height = 7,
  color = '#033542',
}: {
  width?: number;
  height?: number;
  color?: string;
}) {
  return (
    <Svg width={width} height={height} viewBox="0 0 13 7" fill="none">
      <Path
        d="M0.5 0.5L6.5 6.5L12.5 0.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
