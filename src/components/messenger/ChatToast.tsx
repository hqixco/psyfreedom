import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../constants/theme';

type ChatToastProps = {
  visible: boolean;
  top: number;
  message: string;
  onClose: () => void;
};

export function ChatToast({ visible, top, message, onClose }: ChatToastProps) {
  if (!visible) {
    return null;
  }

  return (
    <View style={[styles.container, { top }]}>
      <Text style={styles.text}>{message}</Text>
      <Pressable onPress={onClose}>
        <Ionicons name="close" size={22} color={colors.white} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 20,
    right: 20,
    zIndex: 100,
    minHeight: 48,
    borderRadius: 6,
    backgroundColor: colors.primary,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 14,
    ...typography.Inter[600],
    color: colors.white,
  },
});
