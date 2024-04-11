import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[]= [{
    Id: uuid(),
    name: 'Krillin',
    power: 1000
  },{
    Id: uuid(),
    name:'Goku',
    power: 9500

  },{
    Id: uuid(),
    name:'Trunks',
    power: 7100

  }];


addCharacter(character: Character):void {
 const newCharacter: Character = {  Id: uuid(), ...character}

 this.characters.push(newCharacter);
}

deleteCharacterById(indexItemm: string) {
//  console.log(indexItemm);
  // this.characters.splice(indexItemm,1);
this.characters = this.characters.filter( characte => characte.Id !== indexItemm);
}


//
}
