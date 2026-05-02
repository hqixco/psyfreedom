import { Linking, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../constants/theme';
import { Association } from '../../data/associationsData';

export function AssociationInfoSection({ association }: { association: Association }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{association.title}</Text>
      <Text style={styles.description}>{association.description}</Text>
      <Pressable
        onPress={() => {
          Linking.openURL(association.website).catch(() => console.log('open association website'));
        }}
      >
        <Text style={styles.website}>{association.website}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginTop: 14,
  },
  title: {
    fontSize: 24,
    lineHeight: 30,
    ...typography.Inter[700],
    color: colors.primaryDark,
  },
  description: {
    marginTop: 18,
    fontSize: 17,
    lineHeight: 24,
    color: colors.text,
  },
  website: {
    marginTop: 18,
    fontSize: 17,
    lineHeight: 22,
    ...typography.Inter[700],
    color: colors.primary,
  },
});
