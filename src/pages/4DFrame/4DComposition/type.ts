import { CompositionReturnType } from '../../../services/4d/types';
import { ResultType } from '../types';

export interface CompositionResultType extends ResultType {
  data: CompositionReturnType | null;
}
