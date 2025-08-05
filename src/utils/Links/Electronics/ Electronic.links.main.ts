import vergil from '../../../images/navbar-dropdown/microless-cal-img.webp';
import mt from '../../../images/navbar-dropdown/nd-main-mt.webp'
import { dropdownCalbrands } from '../../brand-page/CAL/CAL.dropdown.brands';
import { dropdownMtbrands } from '../../brand-page/MT/MT.dropdown.brands';
import { CALLinks, MBLinks } from "./ElectronicLinks";


export const MainElecLinks = [
    {mainLinks: CALLinks, type: 'cal', src: vergil, route: '/b/msi', brandArr: dropdownCalbrands, key: 'cal'},
    {mainLinks: MBLinks, type: 'mt', src: mt, route: '', brandArr: dropdownMtbrands, key: 'mt'},
];