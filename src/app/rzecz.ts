export class Rzecz{
    tytul:string;
    opis:string;
    polubienia:number;
    constructor(nazwa:string,opis:string) {
        this.tytul =nazwa;
        this.opis = opis;
        this.polubienia =0;
    }
}