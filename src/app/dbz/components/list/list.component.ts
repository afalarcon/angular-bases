import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

@Input()
public characterList: Character[] = [];

@Output()
public onDeleteItems: EventEmitter<string> = new EventEmitter();


onDeleteCharacter(index?: string): void {
if( !index) return;

   this.onDeleteItems.emit(index);
}



//
}
