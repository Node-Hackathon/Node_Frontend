import { BlockReturnType } from '../../../services/4d/types';
import { ResultType } from '../types';

export interface BlockResultType extends ResultType {
  data: BlockReturnType | null;
}
