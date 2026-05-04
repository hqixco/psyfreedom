import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../constants/theme';
import { Association } from '../../data/associationsData';

const defaultAssociationIcon = require('../../../assets/institute-author-avatar.svg');
const firstAssociationIcon = require('../../../assets/association-card-icon-1.svg');
const secondAssociationIcon = require('../../../assets/association-card-icon-2.svg');
const thirdAssociationIcon = require('../../../assets/association-card-icon-3.svg');

export function AssociationCard({
  association,
  onPress,
}: {
  association: Association;
  onPress: (id: string) => void;
}) {
  return (
    <Pressable style={styles.card} onPress={() => onPress(association.id)}>
      <View style={styles.content}>
        <Text style={styles.title}>{association.title}</Text>
        <Text style={styles.city}>{association.city}</Text>
      </View>
      <Image
        source={
          association.id === '1'
            ? firstAssociationIcon
            : association.id === '2'
              ? secondAssociationIcon
              : thirdAssociationIcon
        }
        style={styles.icon}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    minHeight: 96,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#EEEFEF',
    backgroundColor: colors.white,
    paddingHorizontal: 16,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 10,
  },
  content: {
    flex: 1,
    paddingRight: 12,
  },
  title: {
    fontSize: 16,
    lineHeight: 20,
    ...typography.Inter[600],
    color: colors.primaryDark,
  },
  city: {
    marginTop: 8,
    fontSize: 13,
    color: colors.muted,
  },
  icon: {
    width: 64,
    height: 64,
    resizeMode: 'contain',
  },
});
