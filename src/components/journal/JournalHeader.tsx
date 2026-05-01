import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/theme';

type JournalHeaderProps = {
  title: string;
  onBack: () => void;
  onSearch: () => void;
};

export function JournalHeader({ title, onBack, onSearch }: JournalHeaderProps) {
  return (
    <View style={styles.header}>
      <View style={styles.left}>
        <Pressable style={styles.iconButton} onPress={onBack}>
          <Ionicons name="chevron-back" size={24} color={colors.primaryDark} />
        </Pressable>
        <Text style={styles.title}>{title}</Text>
      </View>
      <Pressable style={styles.iconButton} onPress={onSearch}>
        <Ionicons name="search-outline" size={25} color={colors.primaryDark} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 52,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginLeft: 6,
    fontSize: 18,
    lineHeight: 22,
    fontWeight: '600',
    color: '#033542',
  },
});
