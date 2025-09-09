import { ma_cases, ma_chargers, ma_lens_attachments, ma_mounts, ma_power_banks, ma_screen_protectors, ma_selfie_sticks, mtMa, mtPhone, mtSmartWatch, mtTablet } from "../../image-arrays/electronic.page.cates.imgs";
import type { CategoryPageCategory } from "../../interfaces/components/main.comps.if";

export const MT: CategoryPageCategory[]  = [
    {title: "Mobiles Accessories", src: mtMa, routeType: 'categories', route: "ma"},
    {title: "Mobiles", src: mtPhone, route: "mobiles"},
    {title: "Tablets", src: mtTablet, route: "tablets"},
    {title: "Smart Watches", src: mtSmartWatch, route: "smart-watches"}
];

export const MA: CategoryPageCategory[] = [
    {title: 'Cases & Protectors', src: ma_cases, route: 'cases_covers'},
    {title: 'Chargers & Cables', src: ma_chargers, route: 'chargers'},
    {title: 'Screen Protectors', src: ma_screen_protectors, route: 'screen_protectors'},
    {title: 'Mounts and Holders', src: ma_mounts, route: 'carmounts_holders'},
    {title: 'Power Banks', src: ma_power_banks, route: 'powerbanks'},
    {title: 'Lens Attachments', src: ma_lens_attachments, route: 'lens_attachments'},
    {title: 'Selfie Sticks', src: ma_selfie_sticks, route: 'selfie_sticks'},
];