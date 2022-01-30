import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListTaskComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
