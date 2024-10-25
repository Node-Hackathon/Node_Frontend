export interface CheckBoxType {
  children: string;
  id: string;
  name: string;
  checked: boolean;
  onChange: () => void;
}

export interface AnswerType {
  id: number;
  diary_question: string;
}
