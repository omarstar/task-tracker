import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private taskServ: TaskService) { }

  ngOnInit(): void {
    this.taskServ.getTasks().subscribe((tasksData)=>{this.tasks = tasksData})
  }

}
