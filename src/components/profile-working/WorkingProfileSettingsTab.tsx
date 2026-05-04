import { StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../constants/theme';
import { workingProfileSettingsMenu } from '../../data/workingProfileData';
import { WorkingProfileMenuItem } from './WorkingProfileMenuItem';
import { AppSwitch } from '../shared/AppSwitch';

export function WorkingProfileSettingsTab({
  pushEnabled,
  onTogglePush,
  onEditProfile,
  onExitToMain,
  onDeleteProfile,
}: {
  pushEnabled: boolean;
  onTogglePush: (value: boolean) => void;
  onEditProfile: () => void;
  onExitToMain: () => void;
  onDeleteProfile: () => void;
}) {
  return (
    <View>
      <Text style={styles.description}>
        Вы можете выбрать, какие уведомления и email-рассылки хотите получать
      </Text>

      <Text style={styles.sectionTitle}>Напоминания в календаре записей</Text>
      <Text style={styles.sectionText}>Напоминать за 1 день о запланированной сессии</Text>

      <View style={styles.pushRow}>
        <Text style={styles.pushLabel}>Push-уведомления</Text>
        <AppSwitch value={pushEnabled} onValueChange={onTogglePush} />
      </View>

      <View style={styles.menu}>
        {workingProfileSettingsMenu.map((item) => {
          let onPress = () => console.log('working settings', item.id);

          if (item.id === 'edit') {
            onPress = onEditProfile;
          } else if (item.id === 'logout') {
            onPress = onExitToMain;
          } else if (item.id === 'delete') {
            onPress = onDeleteProfile;
          }

          return <WorkingProfileMenuItem key={item.id} title={item.title} onPress={onPress} />;
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  description: {
    fontSize: 14,
    lineHeight: 18,
    color: colors.text,
    marginTop: 8,
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 16,
    ...typography.Inter[600],
    color: colors.primaryDark,
  },
  sectionText: {
    marginTop: 10,
    fontSize: 14,
    color: '#B0B0B0',
  },
  pushRow: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  pushLabel: {
    fontSize: 16,
    ...typography.Inter[500],
    color: colors.primary,
  },
  menu: {
    marginTop: 48,
  },
});
