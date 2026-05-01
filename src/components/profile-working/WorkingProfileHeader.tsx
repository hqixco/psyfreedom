import { View } from 'react-native';
import { WorkingProfileSwitcher } from './WorkingProfileSwitcher';

export function WorkingProfileHeader({ onSelectMain }: { onSelectMain: () => void }) {
  return (
    <View>
      <WorkingProfileSwitcher onSelectMain={onSelectMain} />
    </View>
  );
}
