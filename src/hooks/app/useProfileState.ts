import { useState } from 'react';
import { EditableProfile } from '../../components/profile/EditProfileForm';
import { userProfileMock } from '../../data/authorizedProfileData';

export function useProfileState() {
  const [userProfile, setUserProfile] = useState<EditableProfile>({
    name: userProfileMock.name,
    phone: userProfileMock.phone,
    email: userProfileMock.email,
    birthDate: userProfileMock.birthDate,
    photo: null,
  });
  const [selectedProfileType, setSelectedProfileType] = useState<'main' | 'work'>(userProfileMock.selectedProfileType);
  const [pushEnabled, setPushEnabled] = useState(userProfileMock.pushEnabled);
  const [workPushEnabled, setWorkPushEnabled] = useState(true);

  return {
    userProfile,
    setUserProfile,
    selectedProfileType,
    setSelectedProfileType,
    pushEnabled,
    setPushEnabled,
    workPushEnabled,
    setWorkPushEnabled,
  };
}
