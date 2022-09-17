// Este es el 2do paso para crear un parametro.
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pooky',
  templateUrl: './pooky.component.html',
  styleUrls: ['./pooky.component.scss']
})
export class PookyComponent implements OnInit {
  
  // Este es el 1er paso para crear un parametro.
  @Input() nombreCompleto?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
