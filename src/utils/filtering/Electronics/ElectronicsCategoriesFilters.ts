import { MBData } from "./MT-CAL/mt.data";
import { pc_comps_data } from "./pc-comps/pc-comps.data";
import { LAAData } from "./LAA-DAM/laa.data";

export const fullElecData = {
  ...LAAData,
  ...MBData,
  ...pc_comps_data
};
