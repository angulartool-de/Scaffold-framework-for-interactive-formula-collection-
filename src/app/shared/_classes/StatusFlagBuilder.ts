import {IStatusFlagBuilder} from "src/app/shared/_classesIntefaces/IStatusFlagBuilder";

export class StatusFlagBuilder implements IStatusFlagBuilder {
  public status = false;
  public NameTrue = 'true';
  public NameFalse = 'false';
  public STATUS: string = '';
  public Namen: string = '';

  constructor(
    NameTrue: string,
    NameFalse: string,
    status: boolean = false,
    Namen?: string
  ) {
    this.NameTrue = NameTrue;
    this.NameFalse = NameFalse;
    Namen ? (
      this.Namen = Namen) : (
      this.Namen = '');

    this.status = status;

    if (this.status) {
      this.STATUS = this.NameTrue;
    }
    if (!this.status) {
      this.STATUS = this.NameFalse;
    }
    if (this.status === null) {
      this.STATUS = '';
    }

    if (Namen) {
      this.Namen = Namen.toString();
    }
  }
}
