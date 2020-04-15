import { imprimivel } from './imprimivel';
import { igualavel } from './igualavel';

export interface MeuObjeto<T> extends imprimivel, igualavel<T>{
    
}