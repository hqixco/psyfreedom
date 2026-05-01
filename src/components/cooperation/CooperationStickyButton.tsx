import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../../constants/theme';

export function CooperationStickyButton({ onPress }: { onPress: () => void }) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingBottom: 10 + insets.bottom }]}>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Начать сотрудничество</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.white,
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  button: {
    height: 52,
    borderRadius: 26,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '700',
  },
});
