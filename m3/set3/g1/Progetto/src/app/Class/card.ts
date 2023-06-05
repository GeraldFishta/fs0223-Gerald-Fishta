export class Card {

  id: number = 0 ;
  title: string;
  picture: string;
  url: string;

  constructor(title:string, picture:string, url : string, id:number = 0  ){

      this.title = title;
      this.picture = picture;
      this.url = url;
      this.id = id;

  }

}
