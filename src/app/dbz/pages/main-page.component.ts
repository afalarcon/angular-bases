import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

constructor(private dbzServices: DbzService){}


get characteres(): Character[]{
  return [...this.dbzServices.characters];
}

onDeletecharacter( id: string ):void {
  this.dbzServices.deleteCharacterById( id);
}

onNewCharacter( character: Character):void {
  this.dbzServices.addCharacter( character);
}



}
