export interface CheckType {
  date: string;
  result: string;
}

export interface DiagnosisType {
  Check01: CheckType;
  Check02: CheckType;
  Check03: CheckType;
  Check04: CheckType;
  Check05: CheckType;
  Check06: CheckType;
  Check07: CheckType;
  Check08: CheckType;
  Check09: CheckType;
}

export interface CustomDetailsType {
  Diagnosis: DiagnosisType;
}
