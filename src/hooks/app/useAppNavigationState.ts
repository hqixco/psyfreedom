import { useMemo, useState } from 'react';
import { TabKey } from '../../components/BottomTabs';
import { DatingQuestionnaireStatus } from '../../screens/dating/datingData';

export type AppRoute =
  | { name: 'home' }
  | { name: 'catalog' }
  | { name: 'products'; categoryId?: string; title?: string }
  | { name: 'services'; title?: string; topicId?: string; categoryId?: string }
  | { name: 'journal' }
  | { name: 'messenger' }
  | { name: 'chat'; chatId: string }
  | { name: 'product-details'; productId: string }
  | { name: 'institute-details'; instituteId: string }
  | { name: 'specialist-details'; specialistId: string }
  | { name: 'article-details'; articleId: string }
  | { name: 'payment' }
  | { name: 'like' }
  | { name: 'profile' }
  | { name: 'login' }
  | { name: 'sms-code' }
  | { name: 'register' }
  | { name: 'edit-profile' }
  | { name: 'about-app' }
  | { name: 'faq' }
  | { name: 'become-partner' }
  | { name: 'emergency-help' }
  | { name: 'my-sessions' }
  | { name: 'my-purchases' }
  | { name: 'my-reviews' }
  | { name: 'dating-club' }
  | { name: 'dating-approved-home' }
  | { name: 'dating-books' }
  | { name: 'dating-booked-events' }
  | { name: 'dating-collections' }
  | { name: 'dating-event-details'; eventId: string }
  | { name: 'dating-event-map'; eventId: string }
  | { name: 'dating-event-requests' }
  | { name: 'dating-events' }
  | { name: 'dating-favorites' }
  | { name: 'dating-profiles-catalog' }
  | { name: 'dating-profile-view'; profileId: string }
  | { name: 'dating-user-profile' }
  | { name: 'dating-questionnaire' }
  | { name: 'working-sessions-calendar' }
  | { name: 'working-reviews' }
  | { name: 'working-products' }
  | { name: 'create-product'; productId?: string }
  | { name: 'associations' }
  | { name: 'association-details'; associationId: string }
  | { name: 'office-rent' }
  | { name: 'office-rent-details'; officeId: string }
  | { name: 'cooperation' }
  | { name: 'specialist-questionnaire' }
  | { name: 'specialist-application-pending' };

export type ReturnRoute =
  | { name: 'catalog' }
  | { name: 'journal' }
  | { name: 'home' }
  | { name: 'like' }
  | { name: 'product-details'; productId: string }
  | { name: 'specialist-details'; specialistId: string };

export function useAppNavigationState({
  datingQuestionnaireStatus,
}: {
  datingQuestionnaireStatus: DatingQuestionnaireStatus;
}) {
  const [route, setRoute] = useState<AppRoute>({ name: 'home' });
  const [bottomTabsVisible, setBottomTabsVisible] = useState(true);
  const [articleReturnRoute, setArticleReturnRoute] = useState<ReturnRoute>({ name: 'journal' });
  const [paymentReturnRoute, setPaymentReturnRoute] = useState<ReturnRoute>({ name: 'catalog' });
  const [productReturnRoute, setProductReturnRoute] = useState<AppRoute>({ name: 'catalog' });
  const [instituteReturnRoute, setInstituteReturnRoute] = useState<AppRoute>({ name: 'catalog' });
  const [specialistReturnRoute, setSpecialistReturnRoute] = useState<AppRoute>({ name: 'catalog' });
  const [datingFavoritesReturnRoute, setDatingFavoritesReturnRoute] = useState<AppRoute>({
    name: 'dating-approved-home',
  });

  const openDatingSection = () => {
    if (datingQuestionnaireStatus === 'approved') {
      setRoute({ name: 'dating-approved-home' });
      return;
    }

    setRoute({ name: 'dating-club' });
  };

  const openProductDetails = (productId: string) => {
    setProductReturnRoute(route);
    setRoute({ name: 'product-details', productId });
  };

  const openInstituteDetails = (instituteId: string) => {
    setInstituteReturnRoute(route);
    setRoute({ name: 'institute-details', instituteId });
  };

  const openSpecialistDetails = (specialistId: string) => {
    setSpecialistReturnRoute(route);
    setRoute({ name: 'specialist-details', specialistId });
  };

  const isDatingRoute =
    route.name === 'dating-club' ||
    route.name === 'dating-approved-home' ||
    route.name === 'dating-books' ||
    route.name === 'dating-booked-events' ||
    route.name === 'dating-collections' ||
    route.name === 'dating-event-details' ||
    route.name === 'dating-event-map' ||
    route.name === 'dating-event-requests' ||
    route.name === 'dating-events' ||
    route.name === 'dating-favorites' ||
    route.name === 'dating-profiles-catalog' ||
    route.name === 'dating-profile-view' ||
    route.name === 'dating-user-profile' ||
    route.name === 'dating-questionnaire';

  const activeTab: TabKey = useMemo(() => {
    switch (route.name) {
      case 'catalog':
      case 'products':
      case 'services':
      case 'journal':
      case 'product-details':
      case 'institute-details':
      case 'specialist-details':
      case 'article-details':
        return 'catalog';
      case 'messenger':
      case 'chat':
        return 'message';
      case 'payment':
        return 'catalog';
      case 'like':
        return 'like';
      case 'profile':
      case 'login':
      case 'sms-code':
      case 'register':
      case 'edit-profile':
      case 'about-app':
      case 'faq':
      case 'become-partner':
      case 'emergency-help':
      case 'my-sessions':
      case 'my-purchases':
      case 'my-reviews':
      case 'dating-club':
      case 'dating-approved-home':
      case 'dating-books':
      case 'dating-event-details':
      case 'dating-event-map':
      case 'dating-collections':
      case 'dating-events':
      case 'dating-questionnaire':
        return 'home';
      case 'dating-favorites':
      case 'dating-profiles-catalog':
      case 'dating-profile-view':
        return 'like';
      case 'dating-booked-events':
      case 'dating-event-requests':
      case 'dating-user-profile':
        return 'user';
      case 'working-sessions-calendar':
      case 'working-reviews':
      case 'working-products':
      case 'create-product':
      case 'associations':
      case 'association-details':
      case 'office-rent':
      case 'office-rent-details':
      case 'cooperation':
      case 'specialist-questionnaire':
      case 'specialist-application-pending':
        return 'user';
      default:
        return 'home';
    }
  }, [route.name]);

  const openTab = (tab: TabKey) => {
    switch (tab) {
      case 'catalog':
        setRoute({ name: 'catalog' });
        break;
      case 'message':
        setRoute({ name: 'messenger' });
        break;
      case 'like':
        if (isDatingRoute && datingQuestionnaireStatus === 'approved') {
          if (route.name !== 'dating-favorites') {
            setDatingFavoritesReturnRoute(route);
          }
          setRoute({ name: 'dating-favorites' });
        } else {
          setRoute({ name: 'like' });
        }
        break;
      case 'user':
        if (isDatingRoute && datingQuestionnaireStatus === 'approved') {
          setRoute({ name: 'dating-user-profile' });
        } else {
          setRoute({ name: 'profile' });
        }
        break;
      default:
        if (isDatingRoute) {
          openDatingSection();
        } else {
          setRoute({ name: 'home' });
        }
        break;
    }
  };

  return {
    route,
    setRoute,
    bottomTabsVisible,
    setBottomTabsVisible,
    articleReturnRoute,
    setArticleReturnRoute,
    paymentReturnRoute,
    setPaymentReturnRoute,
    productReturnRoute,
    setProductReturnRoute,
    instituteReturnRoute,
    setInstituteReturnRoute,
    specialistReturnRoute,
    setSpecialistReturnRoute,
    datingFavoritesReturnRoute,
    setDatingFavoritesReturnRoute,
    openDatingSection,
    openProductDetails,
    openInstituteDetails,
    openSpecialistDetails,
    isDatingRoute,
    activeTab,
    openTab,
  };
}
