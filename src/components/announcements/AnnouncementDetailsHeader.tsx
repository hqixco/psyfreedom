import { Ionicons } from '@expo/vector-icons';
import { BackChevronIcon } from '../icons/BackChevronIcon';
import { Pressable, StyleSheet, View } from 'react-native';
import { colors } from '../../constants/theme';
import { ShareIcon } from '../icons/ShareIcon';

type AnnouncementDetailsHeaderProps = {
  onBack: () => void;
  onShare: () => void;
};

export function AnnouncementDetailsHeader({
  onBack,
  onShare,
}: AnnouncementDetailsHeaderProps) {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={onBack}>
        <BackChevronIcon color={colors.primaryDark} />
      </Pressable>
      <Pressable style={styles.button} onPress={onShare}>
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
  button: {
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
