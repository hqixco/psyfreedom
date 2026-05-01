import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, View } from 'react-native';

export function StarsRating({
  rating,
  onChange,
  size = 34,
  gap = 8,
  activeColor = '#FFC93C',
  inactiveColor = '#EEF3F5',
}: {
  rating: number;
  onChange?: (value: number) => void;
  size?: number;
  gap?: number;
  activeColor?: string;
  inactiveColor?: string;
}) {
  return (
    <View style={[styles.row, { columnGap: gap }]}>
      {Array.from({ length: 5 }).map((_, index) => {
        const value = index + 1;
        const active = value <= rating;
        const content = <Ionicons name="star" size={size} color={active ? activeColor : inactiveColor} />;

        if (!onChange) {
          return <View key={value}>{content}</View>;
        }

        return (
          <Pressable key={value} onPress={() => onChange(value)}>
            {content}
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
