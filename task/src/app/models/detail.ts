export class Detail{
    title:string;
    poster:string;
    year:Date;
    rating:number;
    releaseDate:Date;
    language:string;
    country:string;
    type:string;

    constructor(title:string,poster:string,year:Date,rating:number,releaseDate:Date,language:string,
                country:string,type:string){
                     this.title=title;
                     this.poster=poster;
                     this.year=year;
                     this.rating=rating;
                     this.releaseDate=releaseDate;
                     this.language=language;
                     this.country=country;
                     this.type=type;
        }
}