import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, View } from 'react-native';
import { colors } from '../../constants/theme';

type AuthHeaderProps = {
  onBack: () => void;
};

export function AuthHeader({ onBack }: AuthHeaderProps) {
  return (
    <View style={styles.container}>
      <Pressable onPress={onBack}>
        <Ionicons name="chevron-back" size={24} color={colors.primaryDark} />
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
