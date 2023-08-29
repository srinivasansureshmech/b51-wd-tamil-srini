class Movie {
    constructor(title,studio,rating){
        this.Title=title;
        this.Studio=studio;
        this.Rating=rating;
    }
    display(){
        console.log(`Title: ${this.Title}`);
        console.log(`Studio: ${this.Studio}`);
        console.log(`Rating: ${this.Rating}`);
    }
     getPG(Movie){
            if(this.Rating==null){
              return 'PG'
            }

        }
    

}
let film = new Movie("Casino Royale","Eon Productions","PG13")
film.display();
film.getPG();