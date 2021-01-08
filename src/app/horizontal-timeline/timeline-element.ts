export interface TimelineElement {
  id:number;
  caption: string;
  date: Date;
   acdate: Date;
  title: string;
  selected?: boolean;
  content: string;
  url:string;
}
