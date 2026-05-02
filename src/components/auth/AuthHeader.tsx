import { Ionicons } from '@expo/vector-icons';
import { BackChevronIcon } from '../icons/BackChevronIcon';
import { Pressable, StyleSheet, View } from 'react-native';
import { colors } from '../../constants/theme';

type AuthHeaderProps = {
  onBack: () => void;
};

export function AuthHeader({ onBack }: AuthHeaderProps) {
  return (
    <View style={styles.container}>
      <Pressable onPress={onBack}>
        <BackChevronIcon color={colors.primaryDark} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
