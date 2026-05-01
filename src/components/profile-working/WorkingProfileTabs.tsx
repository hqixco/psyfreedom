import { ProfileTabKey, ProfileTabs } from '../profile/ProfileTabs';

export function WorkingProfileTabs({
  activeTab,
  onChangeTab,
}: {
  activeTab: ProfileTabKey;
  onChangeTab: (tab: ProfileTabKey) => void;
}) {
  return <ProfileTabs activeTab={activeTab} onChangeTab={onChangeTab} />;
}
