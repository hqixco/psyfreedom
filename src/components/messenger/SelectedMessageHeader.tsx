import { Ionicons } from '@expo/vector-icons';
import { BackChevronIcon } from '../icons/BackChevronIcon';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../constants/theme';

type SelectedMessageHeaderProps = {
  onClose: () => void;
  onEdit: () => void;
  onDelete: () => void;
};

export function SelectedMessageHeader({ onClose, onEdit, onDelete }: SelectedMessageHeaderProps) {
  return (
    <View style={styles.container}>
      <Pressable onPress={onClose} style={styles.backButton}>
        <BackChevronIcon color={colors.primaryDark} />
      </Pressable>
      <Text style={styles.title}>Выбрано сообщение</Text>
      <Pressable onPress={onEdit} style={styles.editButton}>
        <Ionicons name="create-outline" size={24} color={colors.primaryDark} />
      </Pressable>
      <Pressable onPress={onDelete}>
        <Ionicons name="trash-outline" size={24} color="#F02F6B" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 56,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#F3F3F3',
  },
  backButton: {
    marginRight: 12,
  },
  title: {
    flex: 1,
    fontSize: 22,
    ...typography.Inter[700],
    color: colors.primaryDark,
  },
  editButton: {
    marginRight: 20,
  },
});
