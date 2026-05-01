import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/theme';

export function SessionDeletedToast({
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
    <View style={[styles.container, { top }]}>
      <View style={styles.textWrap}>
        <Text style={styles.title}>Запись успешно удалена!</Text>
        <Text style={styles.subtitle}>Деньги вернутся на карту в течении суток</Text>
      </View>
      <Pressable onPress={onClose}>
        <Ionicons name="close" size={22} color={colors.white} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 16,
    right: 16,
    zIndex: 100,
    backgroundColor: colors.primary,
    borderRadius: 6,
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textWrap: {
    flex: 1,
    marginRight: 12,
  },
  title: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '700',
  },
  subtitle: {
    color: 'rgba(255,255,255,0.9)',
    fontSize: 13,
    marginTop: 4,
  },
});
