import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { colors, typography } from '../../constants/theme';
import { profileQuickLinks } from '../../data/profileData';

const collectionsIconXml = `<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="36" height="36" rx="18" fill="#05728F"/>
<g clip-path="url(#clip0_201_2375)">
<path d="M23.625 8H14.875C14.3207 8.00046 13.7823 8.18478 13.344 8.52409C12.9057 8.8634 12.5924 9.33852 12.4531 9.875H21.3594C22.126 9.875 22.8613 10.1795 23.4034 10.7216C23.9455 11.2637 24.25 11.999 24.25 12.7656V24.6754L25.1094 25.3629C25.2159 25.4482 25.3474 25.4962 25.4838 25.4998C25.6202 25.5033 25.7541 25.4621 25.8648 25.3824C25.9467 25.322 26.013 25.2429 26.0582 25.1517C26.1035 25.0606 26.1264 24.96 26.125 24.8582V10.5C26.125 9.83696 25.8616 9.20107 25.3928 8.73223C24.9239 8.26339 24.288 8 23.625 8V8Z" fill="white"/>
<path d="M20.5001 11.1252H12.3751C11.712 11.1252 11.0761 11.3886 10.6073 11.8575C10.1385 12.3263 9.87507 12.9622 9.87507 13.6252V27.3604C9.87353 27.4617 9.89611 27.562 9.94093 27.6528C9.98576 27.7437 10.0516 27.8226 10.1329 27.8831C10.2459 27.9651 10.3831 28.007 10.5226 28.0019C10.6622 27.9969 10.796 27.9453 10.9028 27.8553L16.4376 23.1924L21.9723 27.8534C22.0784 27.9428 22.2113 27.9943 22.3499 27.9999C22.4885 28.0055 22.625 27.9648 22.738 27.8842C22.8203 27.8239 22.8871 27.7448 22.9327 27.6535C22.9783 27.5622 23.0014 27.4613 23.0001 27.3592V13.6252C23.0001 12.9622 22.7367 12.3263 22.2678 11.8575C21.799 11.3886 21.1631 11.1252 20.5001 11.1252Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_201_2375">
<rect width="20" height="20" fill="white" transform="translate(8 8)"/>
</clipPath>
</defs>
</svg>`;

const servicesIconXml = `<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="36" height="36" rx="18" fill="#05728F"/>
<path d="M24.6665 21.3322V16.3322H26.3332V21.3322C26.3332 21.7742 26.1576 22.1981 25.845 22.5107C25.5325 22.8233 25.1085 22.9989 24.6665 22.9989H14.6665C13.7415 22.9989 12.9998 22.2489 12.9998 21.3322V11.3322C12.9998 10.4072 13.7415 9.66553 14.6665 9.66553H21.3332V11.3322H14.6665V21.3322H24.6665ZM17.0915 13.8989L19.6665 16.4739L25.1582 10.9822L26.3332 12.1655L19.6665 18.8322L15.9165 15.0822L17.0915 13.8989ZM21.3332 24.6655V26.3322H11.3332C10.8911 26.3322 10.4672 26.1566 10.1547 25.844C9.8421 25.5315 9.6665 25.1076 9.6665 24.6655V13.8322H11.3332V24.6655H21.3332Z" fill="white"/>
</svg>`;

export function ProfileQuickLinks() {
  return (
    <View style={styles.row}>
      {profileQuickLinks.map((item) => (
        <Pressable
          key={item.id}
          style={styles.card}
          onPress={() => console.log('profile quick link', item.id)}
        >
          <SvgXml
            xml={item.id === 'collections' ? collectionsIconXml : servicesIconXml}
            width={36}
            height={36}
          />
          <Text style={styles.title}>{item.title}</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: 10,
  },
  card: {
    flex: 1,
    height: 95,
    borderRadius: 12,
    backgroundColor: colors.cardLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 14,
    marginTop: 4,
    ...typography.Inter[600],
    color: colors.primaryDark,
  },
});
