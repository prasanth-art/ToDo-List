import { Component } from '@angular/core';
import {trigger, style, animate, transition, state} from '@angular/animations';
import { ToastrService } from 'ngx-toastr';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(1000)),
    ])
  ]
})
export class AppComponent {

	/* An empty array that is responsible
	to add a division */
	public items = [];

	/* A two-way binding performed which
	pushes text on division */
	public newTask
  constructor(private toastr: ToastrService) {

  }


	/* When input is empty, it will
	not create a new division */
	public addToList() {
		if (!this.newTask) {
      this.toastr.error('Please enter To-Do List');
		}
		else {
			this.items.push(this.newTask);
			this.newTask = '';
		}
	}

	/* This function takes to input the
	task, that has to be deleted*/
	public deleteTask(index) {
		this.items.splice(index, 1);
	}
}
