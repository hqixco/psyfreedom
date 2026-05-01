import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/theme';
import { CooperationBannerItem } from '../../data/cooperationData';

export function CooperationBanner({
  item,
  onPress,
}: {
  item: CooperationBannerItem;
  onPress: () => void;
}) {
  const backgroundColor =
    item.variant === 'blue'
      ? colors.blueLight
      : item.variant === 'mint'
        ? colors.mintLight
        : '#EAF0FF';

  return (
    <Pressable style={[styles.banner, { backgroundColor }]} onPress={onPress}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      {item.image ? <Image source={item.image} style={styles.image} /> : null}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  banner: {
    height: 76,
    borderRadius: 12,
    paddingHorizontal: 16,
    justifyContent: 'center',
    overflow: 'hidden',
    marginBottom: 8,
  },
  title: {
    fontSize: 17,
    lineHeight: 21,
    fontWeight: '700',
    color: colors.primaryDark,
    maxWidth: 190,
  },
  description: {
    marginTop: 4,
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
