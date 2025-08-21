import { pcc1, pcc2, pcc3, pcc4, pcc5, pcc6, pcc7, pcc9, pcc8} from "../../image-arrays/electronic.page.cates.imgs";
import type { CategoryPageCategory } from "../../interfaces/components/main.comps.if";

const PCC: CategoryPageCategory[] = [
    {title: 'Data Storage', src: pcc1, route: 'storage'},
    {title: 'Fan & Cooling', src: pcc5, route: 'fan_cooling'},
    {title: 'Memory / RAM', src: pcc9, route: 'ram'},
    {title: 'Computer Cases', src: pcc3, route: 'cases'},
    {title: 'Motherboards', src: pcc7, route: 'motherboards'},
    {title: 'Power Supplies', src: pcc8, route: 'ps'},
    {title: 'Video / Graphics Card', src: pcc6, route: 'gpus'},
    {title: 'CPU', src: pcc4, route: 'cpu'},
    {title: 'Case Accessories', src: pcc2, route: 'case_accessories'},
];

export { PCC }