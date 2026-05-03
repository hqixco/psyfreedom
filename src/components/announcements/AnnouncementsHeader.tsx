import { BackChevronIcon } from '../icons/BackChevronIcon';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../constants/theme';

type AnnouncementsHeaderProps = {
  onBack: () => void;
};

export function AnnouncementsHeader({ onBack }: AnnouncementsHeaderProps) {
  return (
    <View style={styles.container}>
      <Pressable style={styles.backButton} onPress={onBack}>
        <BackChevronIcon color={colors.primaryDark} />
      </Pressable>
      <Text style={styles.title}>Анонсы</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 52,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  backButton: {
    width: 28,
    height: 28,
    marginRight: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    lineHeight: 22,
    ...typography.Inter[600],
    color: '#033542',
  },
});

