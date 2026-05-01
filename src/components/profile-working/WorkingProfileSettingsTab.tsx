import { StyleSheet, Switch, Text, View } from 'react-native';
import { colors } from '../../constants/theme';
import { workingProfileSettingsMenu } from '../../data/workingProfileData';
import { WorkingProfileMenuItem } from './WorkingProfileMenuItem';

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
        <Switch
          value={pushEnabled}
          onValueChange={onTogglePush}
          trackColor={{ false: '#D9D9D9', true: '#B7DCE2' }}
          thumbColor={pushEnabled ? colors.primary : colors.white}
        />
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
    fontSize: 16,
    lineHeight: 21,
    color: colors.text,
    marginTop: 8,
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.primaryDark,
  },
  sectionText: {
    marginTop: 10,
    fontSize: 15,
    color: '#B0B0B0',
  },
  pushRow: {
    marginTop: 26,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  pushLabel: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.primaryDark,
  },
  menu: {
    marginTop: 48,
  },
});
