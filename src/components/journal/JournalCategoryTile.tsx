import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { colors, typography } from '../../constants/theme';
import { JournalCategory } from '../../data/journalData';

const humorIconXml = require('../../../assets/humor.svg');
const articlesIconXml = require('../../../assets/statji.svg');
const videoIconXml = require('../../../assets/videojurnal.svg');
const announcementsIconXml = require('../../../assets/anonsy.svg');

const iconMap: Record<string, string> = {
  humor: humorIconXml,
  articles: articlesIconXml,
  video: videoIconXml,
  announcements: announcementsIconXml,
};

type JournalCategoryTileProps = {
  item: JournalCategory;
  width: number;
  onPress: () => void;
};

export function JournalCategoryTile({ item, width, onPress }: JournalCategoryTileProps) {
  const iconPath = iconMap[item.id];

  return (
    <Pressable style={[styles.card, { width }]} onPress={onPress}>
      <View style={styles.iconWrap}>
        {iconPath ? (
          <Image source={iconPath} style={styles.icon} resizeMode="contain" />
        ) : null}
      </View>
      <Text style={styles.title}>{item.title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 118,
    height: 108,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 6,
    backgroundColor: colors.cardLight,
  },
  iconWrap: {
    width: 38,
    height: 38,
    marginBottom: 10,
    borderRadius: 19,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  icon: {
    width: 36,
    height: 36,
  },
  title: {
    fontSize: 12,
    lineHeight: 14,
    ...typography.Inter[500],
    textAlign: 'center',
    color: colors.primaryDark,
  },
});
