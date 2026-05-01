import { View } from 'react-native';
import {
  workingProfileExtraMenu,
  workingProfileMainMenu,
} from '../../data/workingProfileData';
import { WorkingBonusCard } from './WorkingBonusCard';
import { WorkingProfileMenuItem } from './WorkingProfileMenuItem';
import { WorkingStatsCard } from './WorkingStatsCard';

export function WorkingProfileMainTab({
  onOpenSessions,
  onOpenWorkingSessions,
  onOpenPayment,
  onOpenCooperation,
  onOpenWorkingReviews,
  onOpenWorkingProducts,
  onOpenAssociations,
  onOpenOfficeRent,
}: {
  onOpenSessions: () => void;
  onOpenWorkingSessions: () => void;
  onOpenPayment: () => void;
  onOpenCooperation: () => void;
  onOpenWorkingReviews: () => void;
  onOpenWorkingProducts: () => void;
  onOpenAssociations: () => void;
  onOpenOfficeRent: () => void;
}) {
  return (
    <View>
      {workingProfileMainMenu.map((item) => {
        let onPress = () => console.log('working main menu', item.id);

        if (item.id === 'sessionsCalendar') {
          onPress = onOpenWorkingSessions;
        } else if (item.id === 'reviewsRating') {
          onPress = onOpenWorkingReviews;
        } else if (item.id === 'myProducts') {
          onPress = onOpenWorkingProducts;
        }

        return <WorkingProfileMenuItem key={item.id} title={item.title} onPress={onPress} />;
      })}

      <WorkingStatsCard />
      <WorkingBonusCard onHistory={() => console.log('working bonus history')} onTopUp={onOpenPayment} />

      <View style={{ marginTop: 18 }}>
        {workingProfileExtraMenu.map((item) => {
          const onPress =
            item.id === 'cooperation'
              ? onOpenCooperation
              : item.id === 'associations'
                ? onOpenAssociations
                : item.id === 'officeRent'
                  ? onOpenOfficeRent
                : () => console.log('working extra menu', item.id);

          return <WorkingProfileMenuItem key={item.id} title={item.title} onPress={onPress} />;
        })}
      </View>
    </View>
  );
}
