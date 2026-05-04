import { AuthorizedProfileHeader } from '../profile/AuthorizedProfileHeader';

export function WorkingProfileHeader({
  selectedProfileType,
  onSelectProfileType,
}: {
  selectedProfileType: 'main' | 'work';
  onSelectProfileType: (type: 'main' | 'work') => void;
}) {
  return (
    <AuthorizedProfileHeader
      selectedProfileType={selectedProfileType}
      onSelectProfileType={onSelectProfileType}
    />
  );
}
