import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { colors, typography } from '../../constants/theme';
import { JournalCategory } from '../../data/journalData';

const humorIconXml = `<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="36" height="36" rx="18" fill="#05728F"/>
<path d="M15.1875 18C15.7053 18 16.125 17.5803 16.125 17.0625C16.125 16.5447 15.7053 16.125 15.1875 16.125C14.6697 16.125 14.25 16.5447 14.25 17.0625C14.25 17.5803 14.6697 18 15.1875 18Z" fill="white"/>
<path d="M18.0024 23C16.2281 23 14.7359 21.8465 14.2637 20.2723C14.2505 20.2255 14.2484 20.1762 14.2576 20.1284C14.2668 20.0806 14.2871 20.0356 14.3167 19.997C14.3464 19.9584 14.3847 19.9273 14.4285 19.9061C14.4723 19.885 14.5205 19.8743 14.5691 19.875H21.432C21.4807 19.8743 21.5289 19.885 21.5727 19.9061C21.6165 19.9273 21.6548 19.9584 21.6845 19.997C21.7141 20.0356 21.7344 20.0806 21.7436 20.1284C21.7528 20.1762 21.7507 20.2255 21.7375 20.2723C21.2691 21.8465 19.7766 23 18.0024 23Z" fill="white"/>
<path d="M20.8125 18C21.3303 18 21.75 17.5803 21.75 17.0625C21.75 16.5447 21.3303 16.125 20.8125 16.125C20.2947 16.125 19.875 16.5447 19.875 17.0625C19.875 17.5803 20.2947 18 20.8125 18Z" fill="white"/>
<path d="M18 26.125C22.4873 26.125 26.125 22.4873 26.125 18C26.125 13.5127 22.4873 9.875 18 9.875C13.5127 9.875 9.875 13.5127 9.875 18C9.875 22.4873 13.5127 26.125 18 26.125Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10"/>
</svg>`;

const articlesIconXml = `<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="36" height="36" rx="18" fill="#05728F"/>
<g clip-path="url(#clip0_156_4293)">
<path d="M21.3337 8.00122H14.667C13.7503 8.00122 13.0003 8.75122 13.0003 9.66789V23.0012C13.0003 23.9179 13.7503 24.6679 14.667 24.6679H24.667C25.5837 24.6679 26.3337 23.9179 26.3337 23.0012V13.0012L21.3337 8.00122ZM24.667 23.0012H14.667V9.66789H20.5003V13.8346H24.667V23.0012ZM11.3337 11.3346V26.3346H24.667V28.0012H11.3337C10.417 28.0012 9.66699 27.2512 9.66699 26.3346V11.3346H11.3337ZM16.3337 16.3346V18.0012H23.0003V16.3346H16.3337ZM16.3337 19.6679V21.3346H20.5003V19.6679H16.3337Z" fill="white"/>
</g>
<defs><clipPath id="clip0_156_4293"><rect width="20" height="20" fill="white" transform="translate(8 8)"/></clipPath></defs>
</svg>`;

const videoIconXml = `<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="36" height="36" rx="18" fill="#05728F"/>
<path d="M17.3059 21.3763L20.7859 18.4806C20.8564 18.4219 20.9132 18.3485 20.9521 18.2654C20.991 18.1824 21.0112 18.0918 21.0112 18.0001C21.0112 17.9084 20.991 17.8178 20.9521 17.7348C20.9132 17.6517 20.8564 17.5783 20.7859 17.5196L17.3059 14.6239C17.2146 14.548 17.1036 14.4997 16.9859 14.4846C16.8682 14.4695 16.7486 14.4882 16.6411 14.5385C16.5336 14.5889 16.4427 14.6688 16.379 14.769C16.3152 14.8691 16.2813 14.9853 16.2812 15.104V20.8962C16.2813 21.0149 16.3152 21.1311 16.379 21.2312C16.4427 21.3314 16.5336 21.4113 16.6411 21.4617C16.7486 21.512 16.8682 21.5307 16.9859 21.5156C17.1036 21.5005 17.2146 21.4522 17.3059 21.3763Z" fill="white"/>
<path d="M25.5 18C25.5 13.8594 22.1406 10.5 18 10.5C13.8594 10.5 10.5 13.8594 10.5 18C10.5 22.1406 13.8594 25.5 18 25.5C22.1406 25.5 25.5 22.1406 25.5 18Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10"/>
</svg>`;

const announcementsIconXml = `<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="36" height="36" rx="18" fill="#05728F"/>
<path d="M12.375 20.5002C12.375 16.8674 17.2188 14.0549 16.125 9.87524C18.7031 9.87524 23.625 13.6252 23.625 20.5002C23.625 21.9921 23.0324 23.4228 21.9775 24.4777C20.9226 25.5326 19.4918 26.1252 18 26.1252C16.5082 26.1252 15.0774 25.5326 14.0225 24.4777C12.9676 23.4228 12.375 21.9921 12.375 20.5002V20.5002Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.5 22.3752C20.5 24.6295 19.25 25.5002 18 25.5002C16.75 25.5002 15.5 24.6295 15.5 22.3752C15.5 20.1209 17.0625 19.0159 16.75 17.3752C18.3906 17.3752 20.5 20.1209 20.5 22.3752Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const iconMap: Record<string, string> = {
  humor: humorIconXml,
  articles: articlesIconXml,
  video: videoIconXml,
  announcements: announcementsIconXml,
};

type JournalCategoryTileProps = {
  item: JournalCategory;
  width: number;
  onPress: () => void;
};

export function JournalCategoryTile({ item, width, onPress }: JournalCategoryTileProps) {
  const iconXml = iconMap[item.id];

  return (
    <Pressable style={[styles.card, { width }]} onPress={onPress}>
      <View style={styles.iconWrap}>
        {iconXml ? <SvgXml xml={iconXml} width={36} height={36} /> : null}
      </View>
      <Text style={styles.title}>{item.title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 118,
    height: 108,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 6,
    backgroundColor: colors.cardLight,
  },
  iconWrap: {
    width: 38,
    height: 38,
    marginBottom: 10,
    borderRadius: 19,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 12,
    lineHeight: 14,
    ...typography.Inter[500],
    textAlign: 'center',
    color: colors.primaryDark,
  },
});
