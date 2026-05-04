import { Image, Linking, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../constants/theme';
import { Association } from '../../data/associationsData';

const associationCover = require('../../../assets/association-cover-4.png');

export function AssociationInfoSection({ association }: { association: Association }) {
  return (
    <View style={styles.container}>
      <Image source={associationCover} style={styles.cover} />
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
    marginTop: 6,
  },
  cover: {
    width: 185,
    height: 185,
    borderRadius: 12,
    resizeMode: 'cover',
    backgroundColor: colors.cardLight,
  },
  title: {
    marginTop: 14,
    fontSize: 20,
    lineHeight: 24,
    ...typography.Inter[600],
    color: colors.primaryDark,
  },
  description: {
    marginTop: 14,
    fontSize: 16,
    lineHeight: 22,
    color: colors.text,
  },
  website: {
    marginTop: 14,
    fontSize: 14,
    lineHeight: 18,
    ...typography.Inter[600],
    color: colors.primary,
  },
});
