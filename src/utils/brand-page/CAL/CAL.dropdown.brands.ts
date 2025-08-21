import { asus, msi, intel, amd, razer, corsair, bnq, hp, lenovo } from "../../image-arrays/CAL-brands.imgs";
import { v4 as uuidv4 } from 'uuid';

export const dropdownCalbrands = [
    {title: 'asus', src: asus, route: 'asus', id: uuidv4()},
    {title: 'msi', src: msi, route: 'msi', id: uuidv4()},
    {title: 'intel', src: intel, route: 'intel', id: uuidv4()},
    {title: 'amd', src: amd, route: 'amd', id: uuidv4()},
    {title: 'razer', src: razer, route: 'razer', id: uuidv4()},
    {title: 'corsair', src: corsair, route: 'corsair', id: uuidv4()},
    {title: 'bnq', src: bnq, route: 'bnq', id: uuidv4()},
    {title: 'hp', src: hp, route: 'hp', id: uuidv4()},
    {title: 'lenovo', src: lenovo, route: 'lenovo', id: uuidv4()},
];