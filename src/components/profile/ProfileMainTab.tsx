import { StyleSheet, View } from 'react-native';
import { profileMainMenu } from '../../data/authorizedProfileData';
import { ProfileCalendarCard } from './ProfileCalendarCard';
import { ProfileMenuItem } from './ProfileMenuItem';

export function ProfileMainTab({
  onOpenSessions,
  onOpenPurchases,
  onOpenReviews,
  onOpenEmergency,
}: {
  onOpenSessions: () => void;
  onOpenPurchases: () => void;
  onOpenReviews: () => void;
  onOpenEmergency: () => void;
}) {
  const getMenuAction = (id: (typeof profileMainMenu)[number]['id']) => {
    switch (id) {
      case 'purchases':
        return onOpenPurchases;
      case 'reviews':
        return onOpenReviews;
      case 'emergency':
        return onOpenEmergency;
      default:
        return () => console.log('profile main menu', id);
    }
  };

  return (
    <View>
      <ProfileCalendarCard onOpenSessions={onOpenSessions} />
      <View style={styles.menu}>
        {profileMainMenu.map((item) => (
          <ProfileMenuItem
            key={item.id}
            title={item.title}
            onPress={getMenuAction(item.id)}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  menu: {
    marginTop: 32,
  },
});
