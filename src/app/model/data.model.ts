export class Data {
  public id: number;
  public date: Date;
  public acdate: Date;
  public event: string;
  public details: string;
  public url: string;
public selected?:boolean;

  public updateFrom(src: Data): void {
    this.id = src.id;
    this.date = src.date;
    this.acdate = src.acdate;
    this.event = src.event;
    this.details = src.details;
    this.url = src.url;
    this.selected=src.selected;
  }
}
