import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/theme';
import { JournalCategory } from '../../data/journalData';

type JournalCategoryTileProps = {
  item: JournalCategory;
  width: number;
  onPress: () => void;
};

export function JournalCategoryTile({ item, width, onPress }: JournalCategoryTileProps) {
  return (
    <Pressable style={[styles.card, { width }]} onPress={onPress}>
      <View style={styles.iconWrap}>
        <Ionicons name={item.icon as never} size={19} color={colors.white} />
      </View>
      <Text style={styles.title}>{item.title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 86,
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
  title: {
    fontSize: 14,
    lineHeight: 16,
    fontWeight: '700',
    textAlign: 'center',
    color: colors.primaryDark,
  },
});
