import { Image, ImageSourcePropType, StyleSheet, View } from 'react-native';
import { colors } from '../../constants/theme';

type SpecialistHeroProps = {
  image: ImageSourcePropType;
};

export function SpecialistHero({ image }: SpecialistHeroProps) {
  return (
    <View style={styles.wrap}>
      <Image source={image} style={styles.image} resizeMode="cover" />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    marginHorizontal: 16,
    marginTop: 8,
  },
  image: {
    width: '100%',
    height: 368,
    borderRadius: 12,
    backgroundColor: colors.cardLight,
  },
});
