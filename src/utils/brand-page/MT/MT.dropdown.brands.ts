import { v4 as uuidv4 } from 'uuid';
import { apple, huawei, micro, nokia, oppo, samsung, sha, sony, ubl } from '../../image-arrays/MT.brands.imgs';

export const dropdownMtbrands = [
    {title: 'apple', src: apple, route: 'apple', id: uuidv4()},
    {title: 'samsung', src: samsung, route: 'samsung', id: uuidv4()},
    {title: 'shawmi', src: sha, route: 'shawmi', id: uuidv4()},
    {title: 'huawei', src: huawei, route: 'huawei', id: uuidv4()},
    {title: 'nokia', src: nokia, route: 'nokia', id: uuidv4()},
    {title: 'microsoft', src: micro, route: 'microsoft', id: uuidv4()},
    {title: 'oppo', src: oppo, route: 'oppo', id: uuidv4()},
    {title: 'ubl', src: ubl, route: 'ubl', id: uuidv4()},
    {title: 'sony', src: sony, route: 'sony', id: uuidv4()},
];