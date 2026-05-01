import { StyleSheet, View } from 'react-native';
import { profileInfoMenu, profilePartnerBanner } from '../../data/authorizedProfileData';
import { profileBanners } from '../../data/profileData';
import { ProfileBanner } from './ProfileBanner';
import { ProfileMenuItem } from './ProfileMenuItem';

type ProfileInfoTabProps = {
  onOpenAboutApp: () => void;
  onOpenFaq: () => void;
  onOpenBecomePartner: () => void;
};

export function ProfileInfoTab({ onOpenAboutApp, onOpenFaq, onOpenBecomePartner }: ProfileInfoTabProps) {
  return (
    <View>
      {profileInfoMenu.map((item) => (
        <ProfileMenuItem
          key={item.id}
          title={item.title}
          onPress={
            item.id === 'about'
              ? onOpenAboutApp
              : item.id === 'faq'
                ? onOpenFaq
                : () => console.log('profile info', item.id)
          }
        />
      ))}

      <View style={styles.bannerSpacing}>
        <ProfileBanner {...profileBanners[0]} />
      </View>
      <View style={styles.bannerSpacing}>
        <ProfileBanner {...profileBanners[1]} />
      </View>
      <View style={styles.bannerSpacing}>
        <ProfileBanner {...profilePartnerBanner} onPress={onOpenBecomePartner} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bannerSpacing: {
    marginTop: 16,
  },
});
