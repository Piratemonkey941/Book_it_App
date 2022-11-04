import {
          Component,
          EventEmitter,
          Input,
          OnInit,
          Output
        } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  @Input() alertMsg: string;

  @Output() closeModal = new EventEmitter<void>();

  onCloseModal(){
    this.closeModal.emit();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
