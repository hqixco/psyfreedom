import { View } from 'react-native';
import { workingProfileInfoMenu } from '../../data/workingProfileData';
import { WorkingProfileMenuItem } from './WorkingProfileMenuItem';

export function WorkingProfileInfoTab({
  onOpenAboutApp,
  onOpenFaq,
}: {
  onOpenAboutApp: () => void;
  onOpenFaq: () => void;
}) {
  return (
    <View>
      {workingProfileInfoMenu.map((item) => {
        let onPress = () => console.log('working info', item.id);

        if (item.id === 'about') {
          onPress = onOpenAboutApp;
        } else if (item.id === 'faq') {
          onPress = onOpenFaq;
        }

        return <WorkingProfileMenuItem key={item.id} title={item.title} onPress={onPress} />;
      })}
    </View>
  );
}
