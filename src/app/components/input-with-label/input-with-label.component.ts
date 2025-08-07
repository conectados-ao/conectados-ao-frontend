import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-with-label',
  imports: [],
  templateUrl: './input-with-label.component.html',
  styleUrl: './input-with-label.component.scss'
})
export class InputWithLabelComponent {
  @Input() label:string = ''
  @Input() placeholder:string = ''
}
 