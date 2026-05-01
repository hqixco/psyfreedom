import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/theme';

type VideoJournalHeaderProps = {
  onBack: () => void;
  onSearch: () => void;
};

export function VideoJournalHeader({ onBack, onSearch }: VideoJournalHeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Pressable style={styles.iconButton} onPress={onBack}>
          <Ionicons name="chevron-back" size={24} color={colors.primaryDark} />
        </Pressable>
        <Text style={styles.title}>Видеожурнал</Text>
      </View>
      <Pressable style={styles.iconButton} onPress={onSearch}>
        <Ionicons name="search-outline" size={25} color={colors.primaryDark} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 56,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginRight: 12,
  },
  iconButton: {
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginLeft: 12,
    fontSize: 26,
    lineHeight: 32,
    fontWeight: '700',
    color: colors.primaryDark,
    flexShrink: 1,
  },
});

