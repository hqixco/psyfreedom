import { Ionicons } from '@expo/vector-icons';
import { BackChevronIcon } from '../icons/BackChevronIcon';
import { Pressable, StyleSheet, View } from 'react-native';
import { colors } from '../../constants/theme';

type HumorDetailsHeaderProps = {
  onBack: () => void;
};

export function HumorDetailsHeader({ onBack }: HumorDetailsHeaderProps) {
  return (
    <View style={styles.container}>
      <Pressable style={styles.iconButton} onPress={onBack}>
        <BackChevronIcon color={colors.primaryDark} />
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
  },
  iconButton: {
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

