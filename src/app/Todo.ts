export class Todo {
  sno: number;
  title: string;
  desc: string;
  active: boolean;
todo: any;

  constructor(sno: number, title: string, desc: string, active: boolean){
    this.sno= sno,
    this.active= active,
    this.title= title,
    this.desc= desc
  }
}
