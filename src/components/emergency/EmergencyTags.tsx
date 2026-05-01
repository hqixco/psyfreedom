import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/theme';

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
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16,
  },
  tag: {
    height: 26,
    borderRadius: 13,
    backgroundColor: '#EAF8FA',
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
    marginBottom: 8,
  },
  tagText: {
    fontSize: 13,
    color: colors.primaryDark,
    fontWeight: '500',
  },
});
