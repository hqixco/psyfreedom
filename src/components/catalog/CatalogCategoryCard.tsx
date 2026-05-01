import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/theme';

type CatalogCategoryCardProps = {
  title: string;
  image: number;
  width: number;
  colorsSet: [string, string];
};

export function CatalogCategoryCard({ title, image, width, colorsSet }: CatalogCategoryCardProps) {
  return (
    <ImageBackground source={image} resizeMode="cover" style={[styles.card, { width }]} imageStyle={styles.cardImage}>
      <View style={[styles.content, { backgroundColor: colorsSet[0] ? 'rgba(0,0,0,0.14)' : 'transparent' }]}>
        <Text style={styles.title}>{title}</Text>
        <View />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 118,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: colors.primary,
  },
  cardImage: {
    borderRadius: 10,
  },
  content: {
    flex: 1,
    padding: 16,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.white,
  },
});
