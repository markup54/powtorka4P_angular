import { Component,Input } from '@angular/core';
import { Rzecz } from '../rzecz';

@Component({
  selector: 'app-szczeg',
  templateUrl: './szczeg.component.html',
  styleUrls: ['./szczeg.component.css']
})
export class SzczegComponent {
  @Input() rzecz!:Rzecz;
polub():void{
    this.rzecz.polubienia++;
  }
}
