import { useState } from 'react';
import { ImageBackground, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { DeleteProfileSheet } from '../../components/profile/DeleteProfileSheet';
import { ProfileTabKey } from '../../components/profile/ProfileTabs';
import { WorkingProfileHeader } from '../../components/profile-working/WorkingProfileHeader';
import { WorkingProfileInfoTab } from '../../components/profile-working/WorkingProfileInfoTab';
import { WorkingProfileMainTab } from '../../components/profile-working/WorkingProfileMainTab';
import { WorkingProfileSettingsTab } from '../../components/profile-working/WorkingProfileSettingsTab';
import { WorkingProfileTabs } from '../../components/profile-working/WorkingProfileTabs';
import { colors } from '../../constants/theme';

export function WorkingProfileScreen({
  workPushEnabled,
  onToggleWorkPush,
  onSelectMainProfile,
  selectedProfileType,
  onChangeProfileType,
  onOpenSessions,
  onOpenWorkingSessions,
  onOpenCooperation,
  onOpenWorkingReviews,
  onOpenWorkingProducts,
  onOpenAssociations,
  onOpenOfficeRent,
  onOpenAboutApp,
  onOpenFaq,
  onOpenFeedback,
  onOpenPayment,
  onEditWorkingProfile,
  onDeleteWorkingProfile,
}: {
  workPushEnabled: boolean;
  onToggleWorkPush: (value: boolean) => void;
  onSelectMainProfile: () => void;
  selectedProfileType: 'main' | 'work';
  onChangeProfileType: (type: 'main' | 'work') => void;
  onOpenSessions: () => void;
  onOpenWorkingSessions: () => void;
  onOpenCooperation: () => void;
  onOpenWorkingReviews: () => void;
  onOpenWorkingProducts: () => void;
  onOpenAssociations: () => void;
  onOpenOfficeRent: () => void;
  onOpenAboutApp: () => void;
  onOpenFaq: () => void;
  onOpenFeedback: () => void;
  onOpenPayment: () => void;
  onEditWorkingProfile: () => void;
  onDeleteWorkingProfile: () => void;
}) {
  const insets = useSafeAreaInsets();
  const [activeTab, setActiveTab] = useState<ProfileTabKey>('profile');
  const [isDeleteSheetOpen, setIsDeleteSheetOpen] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 + insets.bottom }}>
        <ImageBackground
          source={require('../../../assets/profile-header-bg.jpg')}
          resizeMode="cover"
          style={styles.topSection}
        >
          <WorkingProfileHeader
            selectedProfileType={selectedProfileType}
            onSelectProfileType={onChangeProfileType}
          />
        </ImageBackground>

        <View style={styles.content}>
          <WorkingProfileTabs activeTab={activeTab} onChangeTab={setActiveTab} />

          {activeTab === 'profile' ? (
            <WorkingProfileMainTab
              onOpenSessions={onOpenSessions}
              onOpenWorkingSessions={onOpenWorkingSessions}
              onOpenPayment={onOpenPayment}
              onOpenCooperation={onOpenCooperation}
              onOpenWorkingReviews={onOpenWorkingReviews}
              onOpenWorkingProducts={onOpenWorkingProducts}
              onOpenAssociations={onOpenAssociations}
              onOpenOfficeRent={onOpenOfficeRent}
            />
          ) : null}
          {activeTab === 'settings' ? (
            <WorkingProfileSettingsTab
              pushEnabled={workPushEnabled}
              onTogglePush={onToggleWorkPush}
              onEditProfile={onEditWorkingProfile}
              onExitToMain={onSelectMainProfile}
              onDeleteProfile={() => setIsDeleteSheetOpen(true)}
            />
          ) : null}
          {activeTab === 'info' ? (
            <WorkingProfileInfoTab
              onOpenAboutApp={onOpenAboutApp}
              onOpenFaq={onOpenFaq}
              onOpenFeedback={onOpenFeedback}
            />
          ) : null}
        </View>
      </ScrollView>

      <DeleteProfileSheet
        visible={isDeleteSheetOpen}
        onClose={() => setIsDeleteSheetOpen(false)}
        onDelete={() => {
          console.log('delete working profile');
          setIsDeleteSheetOpen(false);
          onDeleteWorkingProfile();
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
