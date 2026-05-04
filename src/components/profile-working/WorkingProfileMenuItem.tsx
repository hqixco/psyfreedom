import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, ViewStyle, type StyleProp } from 'react-native';
import { colors, typography } from '../../constants/theme';

export function WorkingProfileMenuItem({
  title,
  onPress,
  itemStyle,
  textStyle,
}: {
  title: string;
  onPress: () => void;
  itemStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<any>;
}) {
  return (
    <Pressable style={[styles.item, itemStyle]} onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
      <Ionicons name="chevron-forward" size={15} color={colors.primaryDark} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  item: {
    height: 48,
    borderRadius: 12,
    backgroundColor: colors.cardLight,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  text: {
    fontSize: 14,
    ...typography.Inter[600],
    color: colors.primaryDark,
  },
});
