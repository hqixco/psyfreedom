import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { ProfileAuthPrompt } from '../../components/profile/ProfileAuthPrompt';
import { ProfileBanner } from '../../components/profile/ProfileBanner';
import { ProfileMenuList } from '../../components/profile/ProfileMenuList';
import { ProfileQuickLinks } from '../../components/profile/ProfileQuickLinks';
import { colors } from '../../constants/theme';
import { SpecialistApplicationStatus } from '../../data/specialistQuestionnaireData';
import { profileBanners } from '../../data/profileData';
import { AuthorizedProfileScreen } from './AuthorizedProfileScreen';
import { WorkingProfileScreen } from './WorkingProfileScreen';

type ProfileScreenProps = {
  isAuthorized: boolean;
  specialistApplicationStatus?: SpecialistApplicationStatus;
  onOpenLogin: () => void;
  onOpenRegister: () => void;
  selectedProfileType?: 'main' | 'work';
  pushEnabled?: boolean;
  workPushEnabled?: boolean;
  onChangeProfileType?: (type: 'main' | 'work') => void;
  onTogglePush?: (value: boolean) => void;
  onToggleWorkPush?: (value: boolean) => void;
  onOpenSessions?: () => void;
  onOpenWorkingSessions?: () => void;
  onOpenCooperation?: () => void;
  onOpenWorkingReviews?: () => void;
  onOpenWorkingProducts?: () => void;
  onOpenAssociations?: () => void;
  onOpenOfficeRent?: () => void;
  onOpenPurchases?: () => void;
  onOpenReviews?: () => void;
  onOpenEmergency?: () => void;
  onOpenEditProfile?: () => void;
  onOpenAboutApp?: () => void;
  onOpenFaq?: () => void;
  onOpenBecomePartner?: () => void;
  onOpenPayment?: () => void;
  onOpenEditWorkingProfile?: () => void;
  onLogout?: () => void;
  onDeleteProfile?: () => void;
  onDeleteWorkingProfile?: () => void;
};

export function ProfileScreen({
  isAuthorized,
  specialistApplicationStatus = 'notStarted',
  onOpenLogin,
  onOpenRegister,
  selectedProfileType = 'main',
  pushEnabled = true,
  workPushEnabled = true,
  onChangeProfileType = () => undefined,
  onTogglePush = () => undefined,
  onToggleWorkPush = () => undefined,
  onOpenSessions = () => undefined,
  onOpenWorkingSessions = () => undefined,
  onOpenCooperation = () => undefined,
  onOpenWorkingReviews = () => undefined,
  onOpenWorkingProducts = () => undefined,
  onOpenAssociations = () => undefined,
  onOpenOfficeRent = () => undefined,
  onOpenPurchases = () => undefined,
  onOpenReviews = () => undefined,
  onOpenEmergency = () => undefined,
  onOpenEditProfile = () => undefined,
  onOpenAboutApp = () => undefined,
  onOpenFaq = () => undefined,
  onOpenBecomePartner = () => undefined,
  onOpenPayment = () => undefined,
  onOpenEditWorkingProfile = () => undefined,
  onLogout = () => undefined,
  onDeleteProfile = () => undefined,
  onDeleteWorkingProfile = () => undefined,
}: ProfileScreenProps) {
  const insets = useSafeAreaInsets();

  if (isAuthorized) {
    if (selectedProfileType === 'work' && specialistApplicationStatus === 'approved') {
      return (
        <WorkingProfileScreen
          workPushEnabled={workPushEnabled}
          onToggleWorkPush={onToggleWorkPush}
          onSelectMainProfile={() => onChangeProfileType('main')}
          onOpenSessions={onOpenSessions}
          onOpenWorkingSessions={onOpenWorkingSessions}
          onOpenCooperation={onOpenCooperation}
          onOpenWorkingReviews={onOpenWorkingReviews}
          onOpenWorkingProducts={onOpenWorkingProducts}
          onOpenAssociations={onOpenAssociations}
          onOpenOfficeRent={onOpenOfficeRent}
          onOpenAboutApp={onOpenAboutApp}
          onOpenFaq={onOpenFaq}
          onOpenPayment={onOpenPayment}
          onEditWorkingProfile={onOpenEditWorkingProfile}
          onDeleteWorkingProfile={onDeleteWorkingProfile}
        />
      );
    }

    return (
      <AuthorizedProfileScreen
        selectedProfileType={selectedProfileType}
        pushEnabled={pushEnabled}
        onChangeProfileType={onChangeProfileType}
        onTogglePush={onTogglePush}
        onOpenSessions={onOpenSessions}
        onOpenPurchases={onOpenPurchases}
        onOpenReviews={onOpenReviews}
        onOpenEmergency={onOpenEmergency}
        onOpenEditProfile={onOpenEditProfile}
        onOpenAboutApp={onOpenAboutApp}
        onOpenFaq={onOpenFaq}
        onOpenBecomePartner={onOpenBecomePartner}
        onLogout={onLogout}
        onDeleteProfile={onDeleteProfile}
      />
    );
  }

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 + insets.bottom }}
      >
        <View style={styles.topSection}>
          <ProfileAuthPrompt onLogin={onOpenLogin} onRegister={onOpenRegister} />
        </View>

        <View style={styles.content}>
          <ProfileQuickLinks />
          <View style={styles.bannerSpacing}>
            <ProfileBanner {...profileBanners[0]} />
          </View>
          <View style={styles.secondBannerSpacing}>
            <ProfileBanner {...profileBanners[1]} />
          </View>
          <ProfileMenuList onOpenFaq={onOpenFaq} />
        </View>
      </ScrollView>
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
    paddingHorizontal: 16,
    paddingTop: 56,
    paddingBottom: 52,
  },
  content: {
    marginTop: -28,
    backgroundColor: colors.white,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingTop: 24,
    paddingHorizontal: 16,
  },
  bannerSpacing: {
    marginTop: 20,
  },
  secondBannerSpacing: {
    marginTop: 12,
  },
});
