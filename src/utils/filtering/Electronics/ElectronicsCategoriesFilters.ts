import { MBData } from "./MT-CAL/mt.data";
import { pc_comps_data } from "./pc-comps/pc-comps.data";
import { CALData } from "./LAA-DAM/cal.data";

export const fullElecCategoriesData = {
  ...CALData,
  ...MBData,
  ...pc_comps_data
};
