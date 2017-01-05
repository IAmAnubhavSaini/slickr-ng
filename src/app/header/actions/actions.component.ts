import { Component } from '@angular/core';

@Component({
  selector: 'header-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class HeaderActionsComponent { 
  reloadButtonTitle = 'reload'
  tagsToggleButtonTitle = 'tags'
  titlesToggleButtonTitle = 'titles'
}
