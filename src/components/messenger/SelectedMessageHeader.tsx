import { BackChevronIcon } from '../icons/BackChevronIcon';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { colors, typography } from '../../constants/theme';

const editIconXml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.53999 19.5201C4.92999 19.5201 4.35999 19.31 3.94999 18.92C3.42999 18.43 3.17999 17.69 3.26999 16.89L3.63999 13.65C3.70999 13.04 4.07999 12.23 4.50999 11.79L12.72 3.10005C14.77 0.930049 16.91 0.870049 19.08 2.92005C21.25 4.97005 21.31 7.11005 19.26 9.28005L11.05 17.97C10.63 18.42 9.84999 18.84 9.23999 18.9401L6.01999 19.49C5.84999 19.5 5.69999 19.5201 5.53999 19.5201ZM15.93 2.91005C15.16 2.91005 14.49 3.39005 13.81 4.11005L5.59999 12.8101C5.39999 13.0201 5.16999 13.5201 5.12999 13.8101L4.75999 17.05C4.71999 17.38 4.79999 17.65 4.97999 17.82C5.15999 17.99 5.42999 18.05 5.75999 18L8.97999 17.4501C9.26999 17.4001 9.74999 17.14 9.94999 16.93L18.16 8.24005C19.4 6.92005 19.85 5.70005 18.04 4.00005C17.24 3.23005 16.55 2.91005 15.93 2.91005Z" fill="#031D23"/>
<path d="M17.3404 10.9501C17.3204 10.9501 17.2904 10.9501 17.2704 10.9501C14.1504 10.6401 11.6404 8.27009 11.1604 5.17009C11.1004 4.76009 11.3804 4.38009 11.7904 4.31009C12.2004 4.25009 12.5804 4.53009 12.6504 4.94009C13.0304 7.36009 14.9904 9.22009 17.4304 9.46009C17.8404 9.50009 18.1404 9.87009 18.1004 10.2801C18.0504 10.6601 17.7204 10.9501 17.3404 10.9501Z" fill="#031D23"/>
<path d="M21 22.75H3C2.59 22.75 2.25 22.41 2.25 22C2.25 21.59 2.59 21.25 3 21.25H21C21.41 21.25 21.75 21.59 21.75 22C21.75 22.41 21.41 22.75 21 22.75Z" fill="#031D23"/>
</svg>`;

const deleteIconXml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 6H5H21" stroke="#F8125A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21086 9.46957 2 10 2H14C14.5304 2 15.0391 2.21086 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6" stroke="#F8125A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 11V17" stroke="#F8125A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 11V17" stroke="#F8125A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

export function SelectedMessageHeader({ onClose, onEdit, onDelete }: SelectedMessageHeaderProps) {
  return (
    <View style={styles.container}>
      <Pressable onPress={onClose} style={styles.backButton} hitSlop={12}>
        <BackChevronIcon color={colors.primaryDark} />
      </Pressable>
      <Text style={styles.title}>Выбрано сообщение</Text>
      <Pressable onPress={onEdit} style={styles.editButton}>
        <SvgXml xml={editIconXml} width={24} height={24} />
      </Pressable>
      <Pressable onPress={onDelete} style={styles.deleteButton}>
        <SvgXml xml={deleteIconXml} width={24} height={24} />
      </Pressable>
    </View>
  );
}

type SelectedMessageHeaderProps = {
  onClose: () => void;
  onEdit: () => void;
  onDelete: () => void;
};

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
    width: 44,
    height: 44,
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
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
});
