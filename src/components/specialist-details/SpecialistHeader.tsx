import { Ionicons } from '@expo/vector-icons';
import { BackChevronIcon } from '../icons/BackChevronIcon';
import { Pressable, StyleSheet, View } from 'react-native';
import { colors } from '../../constants/theme';
import { ShareIcon } from '../icons/ShareIcon';

type SpecialistHeaderProps = {
  onBack: () => void;
  onShare: () => void;
};

export function SpecialistHeader({ onBack, onShare }: SpecialistHeaderProps) {
  return (
    <View style={styles.header}>
      <Pressable style={styles.iconButton} onPress={onBack}>
        <BackChevronIcon color={colors.primaryDark} />
      </Pressable>
      <Pressable style={styles.iconButton} onPress={onShare}>
        <ShareIcon size={22} color={colors.primaryDark} />
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
  iconButton: {
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
