export interface FDBlockFormType {
  blockImage: File | null;
}

export interface BlockResultsType {
  name: string;
  accuracy: string;
}

export interface BlockReturnType {
  count: number;
  imageUrl: string;
  results: BlockResultsType[];
}
