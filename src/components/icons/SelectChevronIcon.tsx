import { Image } from 'react-native';

export function SelectChevronIcon({
  width = 13,
  height = 7,
}: {
  width?: number;
  height?: number;
}) {
  return (
    <Image
      source={require('../../../assets/online-consultation-arrow.svg')}
      style={{ width, height, resizeMode: 'contain' }}
    />
  );
}
