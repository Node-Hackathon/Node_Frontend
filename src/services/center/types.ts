export interface CenterReturnType {
  center_address: string;
  center_name: string;
  center_phone_num: string;
  center_type: string;
  id: number;
  latitude: number;
  longitude: number;
}

export interface GetAllCentersType {
  centers: CenterReturnType[];
}
