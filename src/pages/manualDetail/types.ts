interface Detail {
  img: string;
  text: string;
}

interface SectionDataType {
  title: string;
  details: Detail[];
}

export interface ManualDataType {
  [key: string]: SectionDataType;
}

export interface DetailBoxType extends Detail {
  index: number;
}
