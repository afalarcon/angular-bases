import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

//crear la instancia para el observable
@Output()
public onNewCharacter: EventEmitter<Character> = new EventEmitter();


public character: Character ={
  Id: '0',
  name: '',
  power:0
};


emitCharacter(): void{

  if( this.character.name.length === 0 ) return;

  this.onNewCharacter.emit(this.character);



}


}
