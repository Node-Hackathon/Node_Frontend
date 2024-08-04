export interface DiaryWrittenType {
  message: string;
  status: boolean;
}

export interface DiaryFormType {
  answer1: string;
  answer2: string;
  answer3: string;
  answer4: string;
  answer5: string;
}

export interface DiaryReturnType extends DiaryFormType {
  date: string;
  id: number;
  userId: number;
}

export interface DiaryResultType {
  id: number;
  date: string;
  userId: number;
  answer1: string;
  answer2: string;
  answer3: string;
  answer4: string;
  answer5: string;
}
