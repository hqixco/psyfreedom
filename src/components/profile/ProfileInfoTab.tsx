import { Fragment } from 'react';
import { StyleSheet, View } from 'react-native';
import { profileInfoMenu, profilePartnerBanner } from '../../data/authorizedProfileData';
import { profileBanners } from '../../data/profileData';
import { ProfileBanner } from './ProfileBanner';
import { ProfileMenuItem } from './ProfileMenuItem';

type ProfileInfoTabProps = {
  onOpenAboutApp: () => void;
  onOpenFaq: () => void;
  onOpenFeedback: () => void;
  onOpenBecomePartner: () => void;
};

export function ProfileInfoTab({
  onOpenAboutApp,
  onOpenFaq,
  onOpenFeedback,
  onOpenBecomePartner,
}: ProfileInfoTabProps) {
  return (
    <View>
      {profileInfoMenu.map((item) => (
        <Fragment key={item.id}>
          <ProfileMenuItem
            title={item.title}
            onPress={() => {
              if (item.id === 'about') {
                onOpenAboutApp();
                return;
              }

              if (item.id === 'faq') {
                onOpenFaq();
                return;
              }

              if (item.id === 'feedback') {
                onOpenFeedback();
                return;
              }

              console.log('profile info', item.id);
            }}
          />
        </Fragment>
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
