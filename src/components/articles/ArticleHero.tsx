import { Image, StyleSheet } from 'react-native';
import { ImageSourcePropType } from 'react-native';
import { colors } from '../../constants/theme';

type ArticleHeroProps = {
  image: ImageSourcePropType;
};

export function ArticleHero({ image }: ArticleHeroProps) {
  return <Image source={image} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    marginHorizontal: 16,
    marginTop: 8,
    width: 'auto',
    height: 166,
    borderRadius: 10,
    resizeMode: 'cover',
    backgroundColor: colors.cardLight,
  },
});

