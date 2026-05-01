import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, View } from 'react-native';
import { colors } from '../../constants/theme';
import { ShareIcon } from '../icons/ShareIcon';

export function AssociationDetailsHeader({
  onBack,
  onShare,
}: {
  onBack: () => void;
  onShare: () => void;
}) {
  return (
    <View style={styles.container}>
      <Pressable onPress={onBack}>
        <Ionicons name="chevron-back" size={24} color={colors.primaryDark} />
      </Pressable>
      <Pressable onPress={onShare}>
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
});
