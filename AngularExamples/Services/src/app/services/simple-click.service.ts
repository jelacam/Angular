import {Injectable} from "@angular/core"

// Ako imamo tendenciju da ubacimo nesto npr service i hocemo da se angular
// stara o tome onda stavimo @Injectable()
@Injectable()
export class SimpleClick{

    doAlert():void{
        alert("Im in a simple service!");
    }
}

// ako servi stavimo u app.module onda svi mogu da mu pristupe
// ako stavimo u komponente [providers] onda samo ta komponenta moze pristupiti tom servisu
