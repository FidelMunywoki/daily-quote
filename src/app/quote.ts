export class Quote {
    id: number;
    authorName: string;
    quoteDescription: string;
    postedBy: string;
    showAuthorName: boolean;
    upVotes:number;
    downVotes: number;


    constructor (id:number, quoteDescription:string, authorName:string, postedBy:string, public postedDate: Date) {
        this.id = id;
        this.authorName = authorName;
        this.quoteDescription = quoteDescription;
        this.postedBy = postedBy;
       this.showAuthorName = false;
       this.upVotes = 0;
       this.downVotes = 0;
    }
}


