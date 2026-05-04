import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../constants/theme';

export function PartnerRequestToast({
  visible,
  top,
  onClose,
}: {
  visible: boolean;
  top: number;
  onClose: () => void;
}) {
  if (!visible) {
    return null;
  }

  return (
    <View style={[styles.wrapper, { top }]}>
      <View style={styles.toast}>
        <Text style={styles.text}>Ваша заявка отправлена!</Text>
        <Pressable onPress={onClose}>
          <Ionicons name="close" size={22} color={colors.white} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    left: 16,
    right: 16,
    zIndex: 100,
  },
  toast: {
    minHeight: 48,
    borderRadius: 6,
    backgroundColor: colors.primary,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    color: colors.white,
    fontSize: 14,
    ...typography.Inter[600],
  },
});
