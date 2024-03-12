export interface IT_ISO {
  maxD: number;
  IT1: number;
  IT2: number;
  IT3: number;
  IT4: number;
  IT5: number;
  IT6: number;
  IT7: number;
  IT8: number;
  IT9: number;
  IT10: number;
  IT11: number;
  IT12: number;
  IT13: number;
  IT14: number;
  IT15: number;
  IT16: number;
  IT17: number;
  IT18: number;
}

export interface IPassungWelle {
  Klasse: string;
  IT: number;
  Dmax: number;
  es: number;
  ei: number;
}

export interface IPassungBohrung {
  Klasse: string;
  IT: number;
  Dmax: number;
  ES: number;
  EI: number;
}

export interface IPassNr {
  value: number;
  viewValue: string;
}

export interface IPassBuchstabe {
  value: string;
  viewValue: string;
}


export interface IPassNrBuilderLoop {
  PassBuchstabe: string;
  Reihe: number[];
}


// export interface PassNrBuilder {
//   PassBuchstabe: string;
//   Reihe: IPassNr[];
// }
