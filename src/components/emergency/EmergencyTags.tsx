import { StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../constants/theme';

export function EmergencyTags({ tags }: { tags: string[] }) {
  return (
    <View style={styles.container}>
      {tags.map((tag) => (
        <View key={tag} style={styles.tag}>
          <Text style={styles.tagText}>{tag}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 220,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 9,
  },
  tag: {
    height: 18,
    borderRadius: 360,
    backgroundColor: '#EAF8FA',
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
    marginBottom: 8,
  },
  tagText: {
    fontSize: 12,
    lineHeight: 18,
    color: colors.primaryDark,
    ...typography.Inter[400],
  },
});
