export class Quote {
    id: number;
    authorName: string;
    quoteDescription: string;
    //showAuthorName: boolean;


    constructor (id:number, authorName:string, quoteDescription:string) {
        this.id = id;
        this.authorName = authorName;
        this.quoteDescription = quoteDescription;
       // this.showAuthorName = false;
    }
}


