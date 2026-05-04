import { ImageBackground, ScrollView, StyleSheet, View } from 'react-native';
import { ImageSourcePropType } from 'react-native';
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
  mainProfilePhoto?: ImageSourcePropType | null;
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
  onOpenFeedback?: () => void;
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
  mainProfilePhoto = null,
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
  onOpenFeedback = () => undefined,
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
          selectedProfileType={selectedProfileType}
          onChangeProfileType={onChangeProfileType}
          onOpenSessions={onOpenSessions}
          onOpenWorkingSessions={onOpenWorkingSessions}
          onOpenCooperation={onOpenCooperation}
          onOpenWorkingReviews={onOpenWorkingReviews}
          onOpenWorkingProducts={onOpenWorkingProducts}
          onOpenAssociations={onOpenAssociations}
          onOpenOfficeRent={onOpenOfficeRent}
          onOpenAboutApp={onOpenAboutApp}
          onOpenFaq={onOpenFaq}
          onOpenFeedback={onOpenFeedback}
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
          mainProfilePhoto={mainProfilePhoto}
        onChangeProfileType={onChangeProfileType}
        onTogglePush={onTogglePush}
        onOpenSessions={onOpenSessions}
        onOpenPurchases={onOpenPurchases}
        onOpenReviews={onOpenReviews}
          onOpenEmergency={onOpenEmergency}
          onOpenEditProfile={onOpenEditProfile}
          onOpenAboutApp={onOpenAboutApp}
          onOpenFaq={onOpenFaq}
          onOpenFeedback={onOpenFeedback}
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
        <ImageBackground
          source={require('../../../assets/profile-header-bg.jpg')}
          resizeMode="cover"
          style={styles.topSection}
        >
          <ProfileAuthPrompt onLogin={onOpenLogin} onRegister={onOpenRegister} />
        </ImageBackground>

        <View style={styles.content}>
          <ProfileQuickLinks />
          <View style={styles.bannerSpacing}>
            <ProfileBanner {...profileBanners[0]} />
          </View>
          <View style={styles.secondBannerSpacing}>
            <ProfileBanner {...profileBanners[1]} />
          </View>
          <ProfileMenuList
            onOpenAboutApp={onOpenAboutApp}
            onOpenFaq={onOpenFaq}
            onOpenFeedback={onOpenFeedback}
          />
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
    height: 315,
    paddingHorizontal: 20,
    paddingTop: 24,
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
  bannerSpacing: {
    marginTop: 20,
  },
  secondBannerSpacing: {
    marginTop: 10,
  },
});
