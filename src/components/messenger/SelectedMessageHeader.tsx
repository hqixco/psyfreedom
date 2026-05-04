import { BackChevronIcon } from '../icons/BackChevronIcon';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
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
        <Image source={require('../../../assets/chat-edit-icon.svg')} style={styles.editIcon} />
      </Pressable>
      <Pressable onPress={onDelete} style={styles.deleteButton}>
        <Image source={require('../../../assets/chat-delete-icon.svg')} style={styles.deleteIcon} />
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
    marginRight: 20,
  },
  title: {
    flex: 1,
    fontSize: 18,
    ...typography.Inter[600],
    color: colors.primaryDark,
  },
  editButton: {
    marginRight: 20,
  },
  deleteButton: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  editIcon: {
    width: 24,
    height: 24,
  },
  deleteIcon: {
    width: 24,
    height: 24,
  },
});
