import type { Link } from "../interfaces/Links.interface";
import { MainElecLinks } from "./Electronics/ Electronic.links.main";




export const allCatesLinks: Link[] = [
    {linkName: "COMPUTER & LAPTOPS", route: "cal", dropdown: "cal"},
    {linkName: "MOBILES & TABLETS", route: "mt", dropdown: "mt"}
];

export const allCatesFilters = [...MainElecLinks]