import { useEffect, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  useFonts,
} from '@expo-google-fonts/inter';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { BottomTabs, TabKey } from './src/components/BottomTabs';
import { getBottomTabsHeight } from './src/components/bottomTabsLayout';
import { HomeScreen } from './src/components/HomeScreen';
import { SplashScreen } from './src/components/SplashScreen';
import { colors, typography } from './src/constants/theme';
import { articles, products, specialists as catalogSpecialists, videos } from './src/data/catalogData';
import { specialists as serviceSpecialists } from './src/data/servicesData';
import { FavoritesScreen } from './src/screens/FavoritesScreen';
import { LoginScreen } from './src/screens/auth/LoginScreen';
import { RegisterScreen } from './src/screens/auth/RegisterScreen';
import { SmsCodeScreen } from './src/screens/auth/SmsCodeScreen';
import { ArticleDetailsScreen } from './src/screens/catalog/ArticleDetailsScreen';
import { CatalogScreen } from './src/screens/catalog/CatalogScreen';
import { JournalScreen } from './src/screens/catalog/JournalScreen';
import { ProductDetailsScreen } from './src/screens/catalog/ProductDetailsScreen';
import { InstituteDetailsScreen } from './src/screens/catalog/InstituteDetailsScreen';
import { ProductsScreen } from './src/screens/catalog/ProductsScreen';
import { ServicesScreen } from './src/screens/catalog/ServicesScreen';
import { SpecialistDetailsScreen } from './src/screens/catalog/SpecialistDetailsScreen';
import { ChatScreen } from './src/screens/messenger/ChatScreen';
import { MessengerScreen } from './src/screens/messenger/MessengerScreen';
import { PaymentScreen } from './src/screens/payment/PaymentScreen';
import { AboutAppScreen } from './src/screens/profile/AboutAppScreen';
import { BecomePartnerScreen } from './src/screens/profile/BecomePartnerScreen';
import { EmergencyHelpScreen } from './src/screens/profile/EmergencyHelpScreen';
import { EditProfileScreen } from './src/screens/profile/EditProfileScreen';
import { FaqScreen } from './src/screens/profile/FaqScreen';
import { MyPurchasesScreen } from './src/screens/profile/MyPurchasesScreen';
import { MyReviewsScreen } from './src/screens/profile/MyReviewsScreen';
import { MySessionsScreen } from './src/screens/profile/MySessionsScreen';
import { ProfileScreen } from './src/screens/profile/ProfileScreen';
import { DatingApprovedHomeScreen } from './src/screens/dating/DatingApprovedHomeScreen';
import { DatingBooksScreen } from './src/screens/dating/DatingBooksScreen';
import { DatingBookedEventsScreen } from './src/screens/dating/DatingBookedEventsScreen';
import { DatingClubScreen } from './src/screens/dating/DatingClubScreen';
import { DatingCollectionsScreen } from './src/screens/dating/DatingCollectionsScreen';
import { DatingEventDetailsScreen } from './src/screens/dating/DatingEventDetailsScreen';
import { DatingEventMapScreen } from './src/screens/dating/DatingEventMapScreen';
import { DatingEventRequestsScreen } from './src/screens/dating/DatingEventRequestsScreen';
import { DatingEventsScreen } from './src/screens/dating/DatingEventsScreen';
import { DatingFavoritesScreen } from './src/screens/dating/DatingFavoritesScreen';
import { DatingProfileViewScreen } from './src/screens/dating/DatingProfileViewScreen';
import { DatingProfilesCatalogScreen } from './src/screens/dating/DatingProfilesCatalogScreen';
import { DatingQuestionnaireScreen } from './src/screens/dating/DatingQuestionnaireScreen';
import { DatingUserProfileScreen } from './src/screens/dating/DatingUserProfileScreen';
import { DatingQuestionnaireStatus } from './src/screens/dating/datingData';
import { CooperationScreen } from './src/screens/profile-working/CooperationScreen';
import {
  CreateProductScreen,
  mapFormToWorkingProduct,
} from './src/screens/profile-working/CreateProductScreen';
import { AssociationDetailsScreen } from './src/screens/profile-working/AssociationDetailsScreen';
import { AssociationsScreen } from './src/screens/profile-working/AssociationsScreen';
import { OfficeRentDetailsScreen } from './src/screens/profile-working/OfficeRentDetailsScreen';
import { OfficeRentScreen } from './src/screens/profile-working/OfficeRentScreen';
import { WorkingProductsScreen } from './src/screens/profile-working/WorkingProductsScreen';
import { WorkingReviewsScreen } from './src/screens/profile-working/WorkingReviewsScreen';
import { WorkingSessionsCalendarScreen } from './src/screens/profile-working/WorkingSessionsCalendarScreen';
import {
  SpecialistApplicationPendingScreen,
  SpecialistQuestionnaireScreen,
} from './src/screens/profile/SpecialistQuestionnaireScreen';
import {
  WorkingProductFormValues,
} from './src/data/workingProductsData';
import { associationsMock } from './src/data/associationsData';
import { institutesMock } from './src/data/institutesData';
import { officeRentItems } from './src/data/officeRentData';
import { useAppNavigationState } from './src/hooks/app/useAppNavigationState';
import { useAuthState } from './src/hooks/app/useAuthState';
import { useProfileState } from './src/hooks/app/useProfileState';
import { useWorkingProfileState } from './src/hooks/app/useWorkingProfileState';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [fontsLoaded, fontError] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <StatusBar style={showSplash ? 'light' : 'dark'} />
        {showSplash || (!fontsLoaded && !fontError) ? <SplashScreen /> : <AppShell />}
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

function AppShell() {
  const insets = useSafeAreaInsets();
  const bottomTabsHeight = getBottomTabsHeight(insets.bottom);
  const [datingQuestionnaireStatus, setDatingQuestionnaireStatus] =
    useState<DatingQuestionnaireStatus>('approved');
  const {
    route,
    setRoute,
    bottomTabsVisible,
    setBottomTabsVisible,
    articleReturnRoute,
    setArticleReturnRoute,
    paymentReturnRoute,
    setPaymentReturnRoute,
    productReturnRoute,
    instituteReturnRoute,
    specialistReturnRoute,
    datingFavoritesReturnRoute,
    openDatingSection,
    openProductDetails,
    openInstituteDetails,
    openSpecialistDetails,
    activeTab,
    openTab,
  } = useAppNavigationState({ datingQuestionnaireStatus });
  const {
    isAuthorized,
    setIsAuthorized,
    authPhone,
    setAuthPhone,
    authConsent,
    setAuthConsent,
    registerName,
    setRegisterName,
    registerPhone,
    setRegisterPhone,
    registerPassword,
    setRegisterPassword,
    registerRepeatPassword,
    setRegisterRepeatPassword,
    registerConsent,
    setRegisterConsent,
    authFlowSource,
    setAuthFlowSource,
  } = useAuthState();
  const {
    userProfile,
    setUserProfile,
    selectedProfileType,
    setSelectedProfileType,
    pushEnabled,
    setPushEnabled,
    workPushEnabled,
    setWorkPushEnabled,
  } = useProfileState();
  const {
    specialistApplicationStatus,
    setSpecialistApplicationStatus,
    specialistQuestionnaireStep,
    setSpecialistQuestionnaireStep,
    specialistApplicationForm,
    setSpecialistApplicationForm,
    workingProducts,
    setWorkingProducts,
  } = useWorkingProfileState();

  const handleProfileTypeChange = (type: 'main' | 'work') => {
    if (type === 'main') {
      setSelectedProfileType('main');
      if (route.name !== 'profile') {
        setRoute({ name: 'profile' });
      }
      return;
    }

    if (specialistApplicationStatus === 'approved') {
      setSelectedProfileType('work');
      if (route.name !== 'profile') {
        setRoute({ name: 'profile' });
      }
      return;
    }

    if (
      specialistApplicationStatus === 'notStarted' ||
      specialistApplicationStatus === 'inProgress' ||
      specialistApplicationStatus === 'rejected'
    ) {
      if (specialistApplicationStatus === 'notStarted') {
        setSpecialistQuestionnaireStep(1);
      }
      setRoute({ name: 'specialist-questionnaire' });
      return;
    }

    if (specialistApplicationStatus === 'submitted') {
      setRoute({ name: 'specialist-application-pending' });
    }
  };

  const commonScreenProps = {
    bottomTabsHeight,
    onOpenCatalog: () => setRoute({ name: 'catalog' }),
    onOpenProducts: () => setRoute({ name: 'products' }),
    onOpenProductsSection: (categoryId: string, title: string) => setRoute({ name: 'products', categoryId, title }),
    onOpenServices: (title?: string, topicId?: string) => setRoute({ name: 'services', title, topicId }),
    onOpenServicesSection: (categoryId: string, title: string) => setRoute({ name: 'services', categoryId, title }),
    onOpenJournal: () => setRoute({ name: 'journal' }),
    onOpenProductDetails: openProductDetails,
    onOpenInstituteDetails: openInstituteDetails,
    onOpenSpecialistDetails: openSpecialistDetails,
    onOpenAssociationDetails: (associationId: string) => setRoute({ name: 'association-details', associationId }),
    onOpenArticleDetails: (articleId: string) => {
      switch (route.name) {
        case 'home':
          setArticleReturnRoute({ name: 'home' });
          break;
        case 'catalog':
          setArticleReturnRoute({ name: 'catalog' });
          break;
        case 'journal':
          setArticleReturnRoute({ name: 'journal' });
          break;
        default:
          setArticleReturnRoute({ name: 'journal' });
          break;
      }
      setRoute({ name: 'article-details', articleId });
    },
    onOpenPaymentScreen: (context?: { title?: string; price?: string }) => {
      if (route.name === 'product-details') {
        setPaymentReturnRoute({ name: 'product-details', productId: route.productId });
      } else if (route.name === 'specialist-details') {
        setPaymentReturnRoute({ name: 'specialist-details', specialistId: route.specialistId });
      } else {
        setPaymentReturnRoute({ name: 'catalog' });
      }

      console.log('open payment screen', context);
      setRoute({ name: 'payment' });
    },
    onBack: () => setRoute({ name: 'catalog' }),
    setBottomTabsVisible,
  };

  const selectedProduct = route.name === 'product-details'
    ? products.find((item) => item.id === route.productId) ?? products[0]
    : products[0];
  const selectedInstitute =
    route.name === 'institute-details'
      ? institutesMock.find((item) => item.id === route.instituteId) ?? institutesMock[0]
      : institutesMock[0];
  const selectedSpecialist = route.name === 'specialist-details'
    ? catalogSpecialists.find((item) => item.id === route.specialistId)
      ?? serviceSpecialists.find((item) => item.id === route.specialistId.replace(/^specialist-/, ''))
      ?? serviceSpecialists.find((item) => item.id === route.specialistId)
      ?? catalogSpecialists[0]
      ?? serviceSpecialists[0]
    : catalogSpecialists[0] ?? serviceSpecialists[0];
  const selectedArticle = route.name === 'article-details'
    ? [...articles, ...videos].find((item) => item.id === route.articleId) ?? articles[0]
    : articles[0];
  const selectedWorkingProduct =
    route.name === 'create-product' && route.productId
      ? workingProducts.find((item) => item.id === route.productId) ?? null
      : null;
  const selectedAssociation =
    route.name === 'association-details'
      ? associationsMock.find((item) => item.id === route.associationId) ?? associationsMock[0]
      : associationsMock[0];
  const selectedOfficeRent =
    route.name === 'office-rent-details'
      ? officeRentItems.find((item) => item.id === route.officeId) ?? officeRentItems[0]
      : officeRentItems[0];

  let content = (
    <HomeScreen
      showBottomTabs={false}
      bottomTabsHeight={bottomTabsHeight}
      onOpenDating={openDatingSection}
      onOpenArticleFromSearch={(articleId) => {
        setArticleReturnRoute({ name: 'home' });
        setRoute({ name: 'article-details', articleId });
      }}
      onOpenJournal={() => setRoute({ name: 'journal' })}
      onOpenProducts={() => setRoute({ name: 'products' })}
      onOpenSpecialists={() => setRoute({ name: 'services' })}
      onOpenServicesFromSearch={(topicId) => setRoute({ name: 'services', topicId })}
      onOpenSpecialistDetails={openSpecialistDetails}
      onOpenProductDetails={openProductDetails}
    />
  );

  switch (route.name) {
    case 'catalog':
      content = <CatalogScreen {...commonScreenProps} />;
      break;
    case 'products':
      content = (
        <ProductsScreen
          {...commonScreenProps}
          initialCategoryId={route.categoryId}
          initialCategoryTitle={route.title}
          onBack={() => setRoute(route.categoryId ? { name: 'products' } : { name: 'catalog' })}
        />
      );
      break;
    case 'services':
      content = (
        <ServicesScreen
          {...commonScreenProps}
          onBack={() => setRoute(route.categoryId || route.topicId || route.title ? { name: 'services' } : { name: 'catalog' })}
          initialCategoryId={route.categoryId}
          initialCategoryTitle={route.title}
          initialTopicId={route.topicId}
        />
      );
      break;
    case 'journal':
      content = <JournalScreen {...commonScreenProps} />;
      break;
    case 'messenger':
      content = <MessengerScreen onOpenChat={(chatId) => setRoute({ name: 'chat', chatId })} />;
      break;
    case 'chat':
      content = (
        <ChatScreen
          chatId={route.chatId}
          onBack={() => setRoute({ name: 'messenger' })}
          setBottomTabsVisible={setBottomTabsVisible}
        />
      );
      break;
    case 'product-details':
      content = (
        <ProductDetailsScreen
          {...commonScreenProps}
          onBack={() => setRoute(productReturnRoute)}
          product={selectedProduct}
        />
      );
      break;
    case 'institute-details':
      content = (
        <InstituteDetailsScreen
          institute={selectedInstitute}
          onBack={() => setRoute(instituteReturnRoute)}
          setBottomTabsVisible={setBottomTabsVisible}
        />
      );
      break;
    case 'specialist-details':
      content = (
        <SpecialistDetailsScreen
          {...commonScreenProps}
          onBack={() => setRoute(specialistReturnRoute)}
          specialist={selectedSpecialist}
        />
      );
      break;
    case 'article-details':
      content = (
        <ArticleDetailsScreen
          {...commonScreenProps}
          article={selectedArticle}
          onBack={() => setRoute(articleReturnRoute)}
        />
      );
      break;
    case 'payment':
      content = (
        <PaymentScreen
          onBack={() => setRoute(paymentReturnRoute)}
          setBottomTabsVisible={setBottomTabsVisible}
        />
      );
      break;
    case 'like':
      content = (
        <FavoritesScreen
          onOpenCatalog={() => setRoute({ name: 'catalog' })}
          onOpenProductDetails={openProductDetails}
          onOpenSpecialistDetails={openSpecialistDetails}
          onOpenArticleDetails={(articleId) => {
            setArticleReturnRoute({ name: 'like' });
            setRoute({ name: 'article-details', articleId });
          }}
        />
      );
      break;
    case 'profile':
      content = (
        <ProfileScreen
          isAuthorized={isAuthorized}
          specialistApplicationStatus={specialistApplicationStatus}
          onOpenLogin={() => setRoute({ name: 'login' })}
          onOpenRegister={() => setRoute({ name: 'register' })}
          selectedProfileType={selectedProfileType}
          pushEnabled={pushEnabled}
          workPushEnabled={workPushEnabled}
          onChangeProfileType={handleProfileTypeChange}
          onTogglePush={setPushEnabled}
          onToggleWorkPush={setWorkPushEnabled}
          onOpenSessions={() => setRoute({ name: 'my-sessions' })}
          onOpenWorkingSessions={() => setRoute({ name: 'working-sessions-calendar' })}
          onOpenCooperation={() => setRoute({ name: 'cooperation' })}
          onOpenWorkingReviews={() => setRoute({ name: 'working-reviews' })}
          onOpenWorkingProducts={() => setRoute({ name: 'working-products' })}
          onOpenAssociations={() => setRoute({ name: 'associations' })}
          onOpenOfficeRent={() => setRoute({ name: 'office-rent' })}
          onOpenPurchases={() => setRoute({ name: 'my-purchases' })}
          onOpenReviews={() => setRoute({ name: 'my-reviews' })}
          onOpenEmergency={() => setRoute({ name: 'emergency-help' })}
          onOpenEditProfile={() => setRoute({ name: 'edit-profile' })}
          onOpenAboutApp={() => setRoute({ name: 'about-app' })}
          onOpenFaq={() => setRoute({ name: 'faq' })}
          onOpenBecomePartner={() => setRoute({ name: 'become-partner' })}
          onOpenPayment={() => setRoute({ name: 'payment' })}
          onOpenEditWorkingProfile={() => {
            setSpecialistQuestionnaireStep(1);
            setRoute({ name: 'specialist-questionnaire' });
          }}
          onLogout={() => {
            setIsAuthorized(false);
            setRoute({ name: 'profile' });
          }}
          onDeleteProfile={() => {
            setIsAuthorized(false);
            setRoute({ name: 'profile' });
          }}
          onDeleteWorkingProfile={() => {
            setSelectedProfileType('main');
            setSpecialistApplicationStatus('notStarted');
            setSpecialistQuestionnaireStep(1);
            setRoute({ name: 'profile' });
          }}
        />
      );
      break;
    case 'login':
      content = (
        <LoginScreen
          phone={authPhone}
          consent={authConsent}
          onBack={() => setRoute({ name: 'profile' })}
          onChangePhone={setAuthPhone}
          onToggleConsent={() => setAuthConsent((prev) => !prev)}
          onSubmit={() => {
            console.log('request sms', authPhone);
            setAuthFlowSource('login');
            setRoute({ name: 'sms-code' });
          }}
        />
      );
      break;
    case 'sms-code':
      content = (
        <SmsCodeScreen
          phone={registerPhone || authPhone || '+7 (987) 654-32-10'}
          onBack={() => {
            if (authFlowSource === 'register') {
              setRoute({ name: 'register' });
            } else {
              setRoute({ name: 'login' });
            }
          }}
          onSubmit={() => {
            setIsAuthorized(true);
            setRoute({ name: 'profile' });
          }}
        />
      );
      break;
    case 'register':
      content = (
        <RegisterScreen
          name={registerName}
          phone={registerPhone}
          password={registerPassword}
          repeatPassword={registerRepeatPassword}
          consent={registerConsent}
          onBack={() => setRoute({ name: 'profile' })}
          onChangeName={setRegisterName}
          onChangePhone={setRegisterPhone}
          onChangePassword={setRegisterPassword}
          onChangeRepeatPassword={setRegisterRepeatPassword}
          onToggleConsent={() => setRegisterConsent((prev) => !prev)}
          onSubmit={() => {
            console.log('register');
            setAuthPhone(registerPhone);
            setAuthConsent(true);
            setAuthFlowSource('register');
            setRoute({ name: 'sms-code' });
          }}
        />
      );
      break;
    case 'edit-profile':
      content = (
        <EditProfileScreen
          profile={userProfile}
          onBack={() => setRoute({ name: 'profile' })}
          onSave={setUserProfile}
        />
      );
      break;
    case 'about-app':
      content = <AboutAppScreen onBack={() => setRoute({ name: 'profile' })} />;
      break;
    case 'faq':
      content = <FaqScreen onBack={() => setRoute({ name: 'profile' })} />;
      break;
    case 'become-partner':
      content = <BecomePartnerScreen onBack={() => setRoute({ name: 'profile' })} />;
      break;
    case 'emergency-help':
      content = <EmergencyHelpScreen onBack={() => setRoute({ name: 'profile' })} />;
      break;
    case 'my-sessions':
      content = (
        <MySessionsScreen
          onBack={() => setRoute({ name: 'profile' })}
          onOpenServices={() => setRoute({ name: 'services' })}
          onOpenChat={() => setRoute({ name: 'chat', chatId: 'maria' })}
        />
      );
      break;
    case 'my-purchases':
      content = (
        <MyPurchasesScreen
          onBack={() => setRoute({ name: 'profile' })}
          onGoToCatalog={() => setRoute({ name: 'catalog' })}
          onOpenPurchase={(purchaseId) =>
            openProductDetails(purchaseId === '1' ? 'product-1' : 'product-6')
          }
        />
      );
      break;
    case 'my-reviews':
      content = <MyReviewsScreen onBack={() => setRoute({ name: 'profile' })} />;
      break;
    case 'dating-club':
      content = (
        <DatingClubScreen
          onBack={() => setRoute({ name: 'home' })}
          onOpenQuestionnaire={() => setRoute({ name: 'dating-questionnaire' })}
          setBottomTabsVisible={setBottomTabsVisible}
        />
      );
      break;
    case 'dating-approved-home':
      content = (
        <DatingApprovedHomeScreen
          onOpenCatalog={() => setRoute({ name: 'dating-profiles-catalog' })}
          onOpenBooks={() => setRoute({ name: 'dating-books' })}
          onOpenEvents={() => setRoute({ name: 'dating-events' })}
          onOpenSpecialists={() => setRoute({ name: 'services', title: 'Специалисты' })}
        />
      );
      break;
    case 'dating-books':
      content = <DatingBooksScreen onBack={() => setRoute({ name: 'dating-approved-home' })} />;
      break;
    case 'dating-collections':
      content = (
        <DatingCollectionsScreen
          onBack={() => setRoute({ name: 'dating-user-profile' })}
          onOpenProfile={(profileId) => setRoute({ name: 'dating-profile-view', profileId })}
        />
      );
      break;
    case 'dating-events':
      content = (
        <DatingEventsScreen
          onBack={() => setRoute({ name: 'dating-approved-home' })}
          onOpenEvent={(eventId) => setRoute({ name: 'dating-event-details', eventId })}
        />
      );
      break;
    case 'dating-event-details':
      content = (
        <DatingEventDetailsScreen
          eventId={route.eventId}
          onBack={() => setRoute({ name: 'dating-events' })}
          onOpenMap={() => setRoute({ name: 'dating-event-map', eventId: route.eventId })}
          setBottomTabsVisible={setBottomTabsVisible}
        />
      );
      break;
    case 'dating-event-map':
      content = (
        <DatingEventMapScreen
          onBack={() => setRoute({ name: 'dating-event-details', eventId: route.eventId })}
          setBottomTabsVisible={setBottomTabsVisible}
        />
      );
      break;
    case 'dating-favorites':
      content = <DatingFavoritesScreen onBack={() => setRoute(datingFavoritesReturnRoute)} />;
      break;
    case 'dating-profiles-catalog':
      content = (
        <DatingProfilesCatalogScreen
          onBack={() => setRoute({ name: 'dating-approved-home' })}
          onOpenProfile={(profileId) => setRoute({ name: 'dating-profile-view', profileId })}
        />
      );
      break;
    case 'dating-profile-view':
      content = (
        <DatingProfileViewScreen
          onBack={() => setRoute({ name: 'dating-profiles-catalog' })}
        />
      );
      break;
    case 'dating-user-profile':
      content = (
        <DatingUserProfileScreen
          onOpenCollections={() => setRoute({ name: 'dating-collections' })}
          onOpenBookedEvents={() => setRoute({ name: 'dating-booked-events' })}
          onOpenEventRequests={() => setRoute({ name: 'dating-event-requests' })}
        />
      );
      break;
    case 'dating-booked-events':
      content = (
        <DatingBookedEventsScreen
          onBack={() => setRoute({ name: 'dating-user-profile' })}
          setBottomTabsVisible={setBottomTabsVisible}
        />
      );
      break;
    case 'dating-event-requests':
      content = (
        <DatingEventRequestsScreen
          onBack={() => setRoute({ name: 'dating-user-profile' })}
          setBottomTabsVisible={setBottomTabsVisible}
        />
      );
      break;
    case 'dating-questionnaire':
      content = (
        <DatingQuestionnaireScreen
          onBackToClub={() => setRoute({ name: 'dating-club' })}
          onSubmitQuestionnaire={() => setDatingQuestionnaireStatus('submitted')}
          setBottomTabsVisible={setBottomTabsVisible}
        />
      );
      break;
    case 'working-sessions-calendar':
      content = <WorkingSessionsCalendarScreen onBack={() => setRoute({ name: 'profile' })} />;
      break;
    case 'working-reviews':
      content = <WorkingReviewsScreen onBack={() => setRoute({ name: 'profile' })} />;
      break;
    case 'working-products':
      content = (
        <WorkingProductsScreen
          products={workingProducts}
          onBack={() => setRoute({ name: 'profile' })}
          onOpenCreate={() => setRoute({ name: 'create-product' })}
          onOpenEdit={(product) => setRoute({ name: 'create-product', productId: product.id })}
          onUpdateStatus={(productId, status) =>
            setWorkingProducts((prev) =>
              prev.map((item) => (item.id === productId ? { ...item, status } : item))
            )
          }
        />
      );
      break;
    case 'create-product':
      content = (
        <CreateProductScreen
          mode={route.productId ? 'edit' : 'create'}
          product={selectedWorkingProduct}
          onBack={() => setRoute({ name: 'working-products' })}
          setBottomTabsVisible={setBottomTabsVisible}
          onSubmit={(values: WorkingProductFormValues) => {
            if (route.productId) {
              setWorkingProducts((prev) =>
                prev.map((item) =>
                  item.id === route.productId
                    ? { ...mapFormToWorkingProduct(values, route.productId), status: item.status }
                    : item
                )
              );
            } else {
              setWorkingProducts((prev) => [mapFormToWorkingProduct(values), ...prev]);
            }

            setRoute({ name: 'working-products' });
          }}
        />
      );
      break;
    case 'cooperation':
      content = <CooperationScreen onBack={() => setRoute({ name: 'profile' })} />;
      break;
    case 'associations':
      content = (
        <AssociationsScreen
          onBack={() => setRoute({ name: 'profile' })}
          onOpenAssociation={(associationId) => setRoute({ name: 'association-details', associationId })}
        />
      );
      break;
    case 'association-details':
      content = (
        <AssociationDetailsScreen
          association={selectedAssociation}
          onBack={() => setRoute({ name: 'associations' })}
        />
      );
      break;
    case 'office-rent':
      content = (
        <OfficeRentScreen
          onBack={() => setRoute({ name: 'profile' })}
          onOpenDetails={(officeId) => setRoute({ name: 'office-rent-details', officeId })}
        />
      );
      break;
    case 'office-rent-details':
      content = (
        <OfficeRentDetailsScreen
          office={selectedOfficeRent}
          onBack={() => setRoute({ name: 'office-rent' })}
        />
      );
      break;
    case 'specialist-questionnaire':
      content = (
        <SpecialistQuestionnaireScreen
          currentStep={specialistQuestionnaireStep}
          status={specialistApplicationStatus}
          form={specialistApplicationForm}
          onBackToProfile={() => setRoute({ name: 'profile' })}
          onChangeStep={setSpecialistQuestionnaireStep}
          onChangeForm={setSpecialistApplicationForm}
          onChangeStatus={setSpecialistApplicationStatus}
          onSubmit={() => {
            setSpecialistApplicationStatus('submitted');
            setSelectedProfileType('main');
            setRoute({ name: 'profile' });
          }}
          setBottomTabsVisible={setBottomTabsVisible}
        />
      );
      break;
    case 'specialist-application-pending':
      content = <SpecialistApplicationPendingScreen onBack={() => setRoute({ name: 'profile' })} />;
      break;
    default:
      break;
  }

  return (
    <View style={styles.shell}>
      {content}
      {bottomTabsVisible ? <BottomTabs bottomInset={insets.bottom} activeTab={activeTab} onTabPress={openTab} /> : null}
    </View>
  );
}

function PlaceholderScreen({
  title,
  subtitle,
  bottomTabsHeight,
}: {
  title: string;
  subtitle: string;
  bottomTabsHeight: number;
}) {
  return (
    <SafeAreaView style={styles.placeholderSafeArea} edges={['top']}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.placeholderContent, { paddingBottom: bottomTabsHeight + 32 }]}
      >
        <Text style={styles.placeholderTitle}>{title}</Text>
        <View style={styles.placeholderCard}>
          <Text style={styles.placeholderText}>{subtitle}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  shell: {
    flex: 1,
    backgroundColor: colors.background,
  },
  placeholderSafeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  placeholderContent: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  placeholderTitle: {
    fontSize: 28,
    ...typography.Inter[700],
    color: colors.text,
  },
  placeholderCard: {
    marginTop: 20,
    borderRadius: 14,
    padding: 18,
    backgroundColor: colors.cardLight,
  },
  placeholderText: {
    fontSize: 15,
    lineHeight: 22,
    color: colors.primaryDark,
  },
});
