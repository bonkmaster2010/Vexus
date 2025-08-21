import { ma_cases, ma_chargers, ma_lens_attachments, ma_mounts, ma_power_banks, ma_screen_protectors, ma_selfie_sticks, mtMa, mtPhone, mtSmartWatch, mtTablet } from "../../image-arrays/electronic.page.cates.imgs";
import type { CategoryPageCategory } from "../../interfaces/components/main.comps.if";

export const MT: CategoryPageCategory[]  = [
    {title: "Mobiles Accessories", src: mtMa, routeType: 'categories', route: "ma"},
    {title: "Mobiles", src: mtPhone, route: "mobiles"},
    {title: "Tablets", src: mtTablet, route: "tablets"},
    {title: "Smart Watches", src: mtSmartWatch, route: "smart-watches"}
];

export const MA: CategoryPageCategory[] = [
    {title: 'Cases & Protectors', src: ma_cases, route: 'casesAndProtectors'},
    {title: 'Chargers & Cables', src: ma_chargers, route: 'chargersAndCables'},
    {title: 'Screen Protectors', src: ma_screen_protectors, route: 'mobilePhoneScreenProtectors'},
    {title: 'Mounts and Holders', src: ma_mounts, route: 'mountsAndHolders'},
    {title: 'Power Banks', src: ma_power_banks, route: 'powerBanks'},
    {title: 'Lens Attachments', src: ma_lens_attachments, route: 'lensAttachments'},
    {title: 'Selfie Sticks', src: ma_selfie_sticks, route: 'selfieSticks'},
];