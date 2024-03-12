import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MaterialSelectionService {

  public matList = [
    'Stahl',
    'Edelstahl',
    'Gusseisen',
    'Messing',
    'Kupfer',
    'Bronze',
    'Alu',
    'Federstahldraht',
    'Ventilfederdraht',
    'Warmgewalzter Stahl',
    'Kaltband',
    '1.4310',
    '1.4568',
    '1.4401',
    'CuSn6 R950',
    'CuZn36 R700',
    'CuBe2',
    'CuNi18Zn20',
    'CuCo2Be nach EN 12166',
    'Inconel X750',
    'Nimonic 90',
    'Hastelloy C4',
    'Titanleg.ung TiAl6V4',
  ];


  constructor() {
  }

  MatToEmodule(inputMat: string): number {
    if (inputMat === 'Stahl') {
      return 210000;
    } else if (inputMat === 'Edelstahl') {
      return 180000;
    } else if (inputMat === 'Gusseisen') {
      return 135000;
    } else if (inputMat === 'Messing') {
      return 100000;
    } else if (inputMat === 'Kupfer') {
      return 115000;
    } else if (inputMat === 'Bronze') {
      return 80000;
    } else if (inputMat === 'Alu') {
      return 70000;
    } else if (inputMat === 'Federstahldraht') {
      return 206000;
    } else if (inputMat === 'Ventilfederdraht') {
      return 206000;
    } else if (inputMat === 'Warmgewalzter Stahl') {
      return 206000;
    } else if (inputMat === 'Kaltband') {
      return 206000;
    } else if (inputMat === '1.4310') {
      return 185000;
    } else if (inputMat === '1.4568') {
      return 195000;
    } else if (inputMat === '1.4401') {
      return 180000;
    } else if (inputMat === 'CuSn6 R950') {
      return 115000;
    } else if (inputMat === 'CuZn36 R700') {
      return 110000;
    } else if (inputMat === 'CuBe2') {
      return 120000;
    } else if (inputMat === 'CuNi18Zn20') {
      return 135000;
    } else if (inputMat === 'CuCo2Be nach EN 12166') {
      return 130000;
    } else if (inputMat === 'Inconel X750') {
      return 213000;
    } else if (inputMat === 'Nimonic 90') {
      return 213000;
    } else if (inputMat === 'Hastelloy C4') {
      return 210000;
    } else if (inputMat === 'Titanleg.ung TiAl6V4') {
      return 104000;
    } else {
      return 210000;
    }
  }

  MatToGmodule(inputMat: string): number {
    if (inputMat === 'Stahl') {
      return 80000;
    } else if (inputMat === 'Edelstahl') {
      return 68000;
    } else if (inputMat === 'Gusseisen') {
      return 135000;
    } else if (inputMat === 'Messing') {
      return 100000;
    } else if (inputMat === 'Kupfer') {
      return 115000;
    } else if (inputMat === 'Bronze') {
      return 80000;
    } else if (inputMat === 'Alu') {
      return 70000;
    } else if (inputMat === 'Federstahldraht') {
      return 81500;
    } else if (inputMat === 'Ventilfederdraht') {
      return 81500;
    } else if (inputMat === 'Warmgewalzter Stahl') {
      return 78500;
    } else if (inputMat === 'Kaltband') {
      return 78500;
    } else if (inputMat === '1.4310') {
      return 70000;
    } else if (inputMat === '1.4568') {
      return 73000;
    } else if (inputMat === '1.4401') {
      return 68000;
    } else if (inputMat === 'CuSn6 R950') {
      return 42000;
    } else if (inputMat === 'CuZn36 R700') {
      return 39000;
    } else if (inputMat === 'CuBe2') {
      return 47000;
    } else if (inputMat === 'CuNi18Zn20') {
      return 45000;
    } else if (inputMat === 'CuCo2Be nach EN 12166') {
      return 48000;
    } else if (inputMat === 'Inconel X750') {
      return 76000;
    } else if (inputMat === 'Nimonic 90') {
      return 83000;
    } else if (inputMat === 'Hastelloy C4') {
      return 76000;
    } else if (inputMat === 'Titanleg.ung TiAl6V4') {
      return 39000;
    } else {
      return 83000;
    }

    // ValueScale({nominalValue, scaleSelect}: { nominalValue: number, scaleSelect: number }): number {
    //  return (nominalValue * scaleSelect);
  }
}

