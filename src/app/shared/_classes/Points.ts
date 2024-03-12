import {IPoints} from "src/app/shared/_classesIntefaces/IPoints";

export class Points implements IPoints {

  public X: number = 0
  public Y: number = 0

  constructor(X: number, Y: number,) {
    this.X = X;
    this.Y = Y;
  }


}




