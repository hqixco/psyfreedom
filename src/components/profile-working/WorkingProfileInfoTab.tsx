import { View } from 'react-native';
import { workingProfileInfoMenu } from '../../data/workingProfileData';
import { WorkingProfileMenuItem } from './WorkingProfileMenuItem';

export function WorkingProfileInfoTab({
  onOpenAboutApp,
  onOpenFaq,
  onOpenFeedback,
}: {
  onOpenAboutApp: () => void;
  onOpenFaq: () => void;
  onOpenFeedback: () => void;
}) {
  return (
    <View>
      {workingProfileInfoMenu.map((item) => {
        let onPress = () => console.log('working info', item.id);

        if (item.id === 'about') {
          onPress = onOpenAboutApp;
        } else if (item.id === 'faq') {
          onPress = onOpenFaq;
        } else if (item.id === 'feedback') {
          onPress = onOpenFeedback;
        }

        return <WorkingProfileMenuItem key={item.id} title={item.title} onPress={onPress} />;
      })}
    </View>
  );
}
