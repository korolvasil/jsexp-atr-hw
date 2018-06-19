import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent{
  value:string='';
  @Output() searchChanged = new EventEmitter();

  toParent(){
    this.value.length>3 ?
      this.searchChanged.emit(this.value) : this.searchChanged.emit('');
  };
}
