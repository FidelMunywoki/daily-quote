export class Quote {
    id: number;
    authorName: string;
    qouteDescription: string;
    //showAuthorName: boolean;


    constructor (id:number, authorName:string, qouteDescription:string) {
        this.id = id;
        this.authorName = authorName;
        this.qouteDescription = qouteDescription;
       // this.showAuthorName = false;
    }
}


