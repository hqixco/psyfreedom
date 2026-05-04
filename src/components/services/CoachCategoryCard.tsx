import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { colors, typography } from '../../constants/theme';
import { CoachCategory } from '../../data/servicesData';

const arrowIconXml = `<svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.75 4.77295C0.335786 4.77295 0 5.10874 0 5.52295C0 5.93716 0.335786 6.27295 0.75 6.27295V5.52295V4.77295ZM19.2803 6.05328C19.5732 5.76039 19.5732 5.28551 19.2803 4.99262L14.5074 0.219648C14.2145 -0.073245 13.7396 -0.073245 13.4467 0.219648C13.1538 0.512542 13.1538 0.987415 13.4467 1.28031L17.6893 5.52295L13.4467 9.76559C13.1538 10.0585 13.1538 10.5334 13.4467 10.8263C13.7396 11.1191 14.2145 11.1191 14.5074 10.8263L19.2803 6.05328ZM0.75 5.52295V6.27295H18.75V5.52295V4.77295H0.75V5.52295Z" fill="#05728F"/>
</svg>`;

type CoachCategoryCardProps = {
  item: CoachCategory;
  width: number;
  onPress: () => void;
};

export function CoachCategoryCard({ item, width, onPress }: CoachCategoryCardProps) {
  return (
    <Pressable style={[styles.card, { width }]} onPress={onPress}>
      <ImageBackground
        source={item.image ?? require('../../../assets/images/coach-category-card-bg.png')}
        resizeMode="cover"
        style={styles.background}
        imageStyle={styles.backgroundImage}
      >
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.arrowBubble}>
          <SvgXml xml={arrowIconXml} width={20} height={12} />
        </View>
      </ImageBackground>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 124,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: colors.mintLight,
  },
  background: {
    flex: 1,
    padding: 14,
  },
  backgroundImage: {
    borderRadius: 12,
  },
  title: {
    fontSize: 14,
    lineHeight: 16,
    ...typography.Inter[600],
    color: colors.primaryDark,
  },
  arrowBubble: {
    position: 'absolute',
    left: 14,
    bottom: 12,
    width: 45,
    height: 22,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
});
