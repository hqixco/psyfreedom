import { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { AuthorizedProfileHeader } from '../../components/profile/AuthorizedProfileHeader';
import { DeleteProfileSheet } from '../../components/profile/DeleteProfileSheet';
import { ProfileInfoTab } from '../../components/profile/ProfileInfoTab';
import { ProfileMainTab } from '../../components/profile/ProfileMainTab';
import { ProfileSettingsTab } from '../../components/profile/ProfileSettingsTab';
import { ProfileTabs, ProfileTabKey } from '../../components/profile/ProfileTabs';
import { colors } from '../../constants/theme';

type AuthorizedProfileScreenProps = {
  selectedProfileType: 'main' | 'work';
  pushEnabled: boolean;
  onChangeProfileType: (type: 'main' | 'work') => void;
  onTogglePush: (value: boolean) => void;
  onOpenSessions: () => void;
  onOpenPurchases: () => void;
  onOpenReviews: () => void;
  onOpenEmergency: () => void;
  onOpenEditProfile: () => void;
  onOpenAboutApp: () => void;
  onOpenFaq: () => void;
  onOpenBecomePartner: () => void;
  onLogout: () => void;
  onDeleteProfile: () => void;
};

export function AuthorizedProfileScreen({
  selectedProfileType,
  pushEnabled,
  onChangeProfileType,
  onTogglePush,
  onOpenSessions,
  onOpenPurchases,
  onOpenReviews,
  onOpenEmergency,
  onOpenEditProfile,
  onOpenAboutApp,
  onOpenFaq,
  onOpenBecomePartner,
  onLogout,
  onDeleteProfile,
}: AuthorizedProfileScreenProps) {
  const insets = useSafeAreaInsets();
  const [activeTab, setActiveTab] = useState<ProfileTabKey>('profile');
  const [isDeleteSheetOpen, setIsDeleteSheetOpen] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 + insets.bottom }}
      >
        <View style={styles.topSection}>
          <AuthorizedProfileHeader
            selectedProfileType={selectedProfileType}
            onSelectProfileType={onChangeProfileType}
          />
        </View>

        <View style={styles.content}>
          <ProfileTabs activeTab={activeTab} onChangeTab={setActiveTab} />

          {activeTab === 'profile' ? (
            <ProfileMainTab
              onOpenSessions={onOpenSessions}
              onOpenPurchases={onOpenPurchases}
              onOpenReviews={onOpenReviews}
              onOpenEmergency={onOpenEmergency}
            />
          ) : null}
          {activeTab === 'settings' ? (
            <ProfileSettingsTab
              pushEnabled={pushEnabled}
              onTogglePush={onTogglePush}
              onEditProfile={onOpenEditProfile}
              onLogout={onLogout}
              onDeleteProfile={() => setIsDeleteSheetOpen(true)}
            />
          ) : null}
          {activeTab === 'info' ? (
            <ProfileInfoTab
              onOpenAboutApp={onOpenAboutApp}
              onOpenFaq={onOpenFaq}
              onOpenBecomePartner={onOpenBecomePartner}
            />
          ) : null}
        </View>
      </ScrollView>

      <DeleteProfileSheet
        visible={isDeleteSheetOpen}
        onClose={() => setIsDeleteSheetOpen(false)}
        onDelete={() => {
          console.log('delete profile');
          setIsDeleteSheetOpen(false);
          onDeleteProfile();
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
  },
  topSection: {
    backgroundColor: colors.blueLight,
    paddingTop: 24,
    paddingHorizontal: 20,
    paddingBottom: 56,
  },
  content: {
    marginTop: -28,
    backgroundColor: colors.white,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
});
