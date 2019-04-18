import { AbstractControl } from '@angular/forms';
import { INTERNATIONAL_MANADATORY_DOCUMENTS, DOMESTIC_MANADATORY_DOCUMENTS} from '../constants'

export function DocumentValidator(control: AbstractControl): { [key: string]: boolean } | null {
  const category = control.get("category");
  const documents = control.get("documents");

  if (category.pristine) {
    return null;
  }

  var categoryMisMatch = false;

  if(category.value === 1){
    for (let index = 0; index < DOMESTIC_MANADATORY_DOCUMENTS.length; index++) {
        if(documents.value[DOMESTIC_MANADATORY_DOCUMENTS[index]] === false){
            categoryMisMatch = true;
            break;
        }        
    }
  }
  if(category.value === 2){
    for (let index = 0; index < INTERNATIONAL_MANADATORY_DOCUMENTS.length; index++) {
        if(documents.value[INTERNATIONAL_MANADATORY_DOCUMENTS[index]] === false){
            categoryMisMatch = true;
            break;
        }        
    }
  }
  return categoryMisMatch ? { 'misMatch': categoryMisMatch } : null;
}