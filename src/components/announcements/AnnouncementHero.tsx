import { Image, StyleSheet } from 'react-native';
import { Announcement } from '../../data/announcementsData';

type AnnouncementHeroProps = {
  image: Announcement['image'];
};

export function AnnouncementHero({ image }: AnnouncementHeroProps) {
  return <Image source={image} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 230,
    borderRadius: 12,
    resizeMode: 'cover',
    backgroundColor: '#F3F7FB',
  },
});
