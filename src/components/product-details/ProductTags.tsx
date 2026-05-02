import { StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../constants/theme';

type ProductTagsProps = {
  tags?: string[];
};

export function ProductTags({ tags }: ProductTagsProps) {
  if (!tags?.length) {
    return null;
  }

  return (
    <View style={styles.row}>
      {tags.map((tag) => (
        <View key={tag} style={styles.chip}>
          <Text style={styles.text}>{tag}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    marginTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  chip: {
    height: 28,
    marginRight: 8,
    marginBottom: 8,
    paddingHorizontal: 12,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EAF8FA',
  },
  text: {
    fontSize: 13,
    ...typography.Inter[600],
    color: colors.primary,
  },
});
