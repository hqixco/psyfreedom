import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, View } from 'react-native';
import { colors } from '../../constants/theme';
import { ShareIcon } from '../icons/ShareIcon';

type ArticleDetailsHeaderProps = {
  onBack: () => void;
  onShare: () => void;
};

export function ArticleDetailsHeader({ onBack, onShare }: ArticleDetailsHeaderProps) {
  return (
    <View style={styles.container}>
      <Pressable style={styles.iconButton} onPress={onBack}>
        <Ionicons name="chevron-back" size={24} color={colors.primaryDark} />
      </Pressable>
      <Pressable style={styles.iconButton} onPress={onShare}>
        <ShareIcon size={22} color={colors.primaryDark} />
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
  iconButton: {
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
