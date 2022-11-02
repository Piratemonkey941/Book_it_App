export class Book {
  constructor (
    public author: string,
    public title: string,
    public coverImagePath: string,
    public genre?: string,
    public price?: number,
    public firstPublishYear?: number,
    public isbn?: number,
    ){}
}


