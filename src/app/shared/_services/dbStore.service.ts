import {Injectable, Type} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class dbStoreService {
  public ListOfComponents = [];
  DocumentContentList = [] as {
    component: Type<any>;
    inputs: Record<string, unknown>;
  }[];

  constructor() {
  }

  AddComponent(variableList) {
    // Zusammenbau der Einzelkomponente:
    if (variableList) {
      variableList.forEach((item) => {
        if (typeof item === 'object') {
          for (let eigenschaft in item) {
            let itemStr = item.varName;
            this[itemStr][eigenschaft] = item[eigenschaft];
          }
        }
      });
    }
  }
}
