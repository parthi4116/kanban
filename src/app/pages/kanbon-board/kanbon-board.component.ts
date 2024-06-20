import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatSort, Sort } from '@angular/material/sort';

export interface itemNames {
  description: any,
  done: boolean;
  date: any,
  title: any,
  priority: any
}
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-kanbon-board',
  templateUrl: './kanbon-board.component.html',
  styleUrls: ['./kanbon-board.component.scss']
})

export class KanbonBoardComponent implements OnInit {
  stockForm: FormGroup;
  todoList: any = [];
  inprogress: any = [];
  doneList: any = [];
  testList: any = [];
  deployList: any = [];
  updateIndex: any;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  isEditEnabled: boolean = false;
  checktype: any;
  tasks: any;
  searchdata: any = '';
  constructor(private fb: FormBuilder, private modelservice: NgbModal) { }
  @ViewChild('add', { static: false }) add: ElementRef;

  ngOnInit() {
    this.sortData({ active: 'date', direction: 'asc' });

    this.stockForm = this.fb.group({
      title: [' ', Validators.required],
      desc: [' ', Validators.required],
      date: [' ', Validators.required],
      priority: [' ', Validators.required]
    })
  };
  opendia() {
    this.modelservice.open(this.add, { centered: true, size: 'md' });
  }
  addList() {
    this.todoList.push({
      description: this.stockForm.value.desc,
      date: this.stockForm.value.date,
      title: this.stockForm.value.title,
      priority: this.stockForm.value.priority,
      done: false
    });
    this.stockForm.reset()
    this.modelservice.dismissAll()
  }
  deleteItem(index: number, checktype: any) {
    if (checktype == 'inprgress') {
      this.inprogress.splice(index, 1);
    } else if (checktype == 'stack') {
      this.todoList.splice(index, 1)
    } else if (checktype == 'done') {
      this.doneList.splice(index, 1)
    } else if (checktype == 'test') {
      this.testList.splice(index, 1)
    } else if (checktype == 'deploy') {
      this.deployList.splice(index, 1)
    }
  }

  onEdit(item: itemNames, index: number, type: any) {
    this.checktype = type
    this.opendia();
    this.stockForm.controls['title'].setValue(item.title)
    this.stockForm.controls['priority'].setValue(item.priority)
    this.stockForm.controls['date'].setValue(item.date)
    this.stockForm.controls['desc'].setValue(item.description)
    this.updateIndex = index;
    this.isEditEnabled = true;
  };

  updateList(type: any) {
    if (this.checktype == 'inprgress') {
      this.inprogress[this.updateIndex].title = this.stockForm.value.title;
      this.inprogress[this.updateIndex].date = this.stockForm.value.date;
      this.inprogress[this.updateIndex].description = this.stockForm.value.desc;
      this.inprogress[this.updateIndex].priority = this.stockForm.value.priority;
    } else if (this.checktype == 'stack') {
      this.todoList[this.updateIndex].priority = this.stockForm.value.priority;
      this.todoList[this.updateIndex].title = this.stockForm.value.title;
      this.todoList[this.updateIndex].date = this.stockForm.value.date;
      this.todoList[this.updateIndex].description = this.stockForm.value.desc;
    } else if (this.checktype == 'done') {
      this.doneList[this.updateIndex].title = this.stockForm.value.title;
      this.doneList[this.updateIndex].priority = this.stockForm.value.priority;
      this.doneList[this.updateIndex].date = this.stockForm.value.date;
      this.doneList[this.updateIndex].description = this.stockForm.value.desc;
    } else if (this.checktype == 'test') {
      this.testList[this.updateIndex].title = this.stockForm.value.title;
      this.testList[this.updateIndex].priority = this.stockForm.value.priority;
      this.testList[this.updateIndex].date = this.stockForm.value.date;
      this.testList[this.updateIndex].description = this.stockForm.value.desc;
    } else if (this.checktype == 'deploy') {
      this.deployList[this.updateIndex].title = this.stockForm.value.title;
      this.deployList[this.updateIndex].priority = this.stockForm.value.priority;
      this.deployList[this.updateIndex].date = this.stockForm.value.date;
      this.deployList[this.updateIndex].description = this.stockForm.value.desc;
    }
    this.stockForm.reset()
    this.modelservice.dismissAll()
  }
  drop(event: CdkDragDrop<itemNames[]>) {
    console.log(event);

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  };

  search(type: any) {

    if (type == 'priority') {
      this.todoList = this.todoList.filter((task: any) => task.priority.includes(this.searchdata));
      this.inprogress = this.inprogress.filter((task: any) => task.priority.includes(this.searchdata));
      this.doneList = this.doneList.filter((task: any) => task.priority.includes(this.searchdata));
      this.testList = this.testList.filter((task: any) => task.priority.includes(this.searchdata));
      this.deployList = this.deployList.filter((task: any) => task.priority.includes(this.searchdata));
    } else {
      this.todoList = this.todoList.filter((task: any) => task.title.toLowerCase().includes(this.searchdata.toLowerCase()));
      this.inprogress = this.inprogress.filter((task: any) => task.title.toLowerCase().includes(this.searchdata.toLowerCase()));
      this.doneList = this.doneList.filter((task: any) => task.title.toLowerCase().includes(this.searchdata.toLowerCase()));
      this.testList = this.testList.filter((task: any) => task.title.toLowerCase().includes(this.searchdata.toLowerCase()));
      this.deployList = this.deployList.filter((task: any) => task.title.toLowerCase().includes(this.searchdata.toLowerCase()));

    }


  }

  sortData(sort: Sort) {
    let sort1 = sort
    let sort2 = sort
    let sort3 = sort
    let sort4 = sort
    let sort5 = sort
    // Todolist 
    const todo = this.todoList.slice();
    if (!sort1.active || sort1.direction === '') {
      this.todoList = todo;
      return;
    }

    this.todoList = todo.sort((a: any, b: any) => {
      const isAsc = sort1.direction === 'asc';
      switch (sort1.active) {
        case 'date': return compare(a.date, b.date, isAsc);
        default: return 0;
      }
    });

    // in-progress 
    const inprgress = this.inprogress.slice();
    if (!sort2.active || sort2.direction === '') {
      this.inprogress = inprgress;
      return;
    }

    this.inprogress = inprgress.sort((a: any, b: any) => {
      const isAsc = sort2.direction === 'asc';
      switch (sort2.active) {
        case 'date': return compare(a.date, b.date, isAsc);
        default: return 0;
      }
    });
    // done 
    const done = this.doneList.slice();
    if (!sort3.active || sort.direction === '') {
      this.doneList = done;
      return;
    }

    this.doneList = done.sort((a: any, b: any) => {
      const isAsc = sort1.direction === 'asc';
      switch (sort3.active) {
        case 'date': return compare(a.date, b.date, isAsc);
        default: return 0;
      }
    });
    // Test 
    const test = this.testList.slice();
    if (!sort4.active || sort4.direction === '') {
      this.testList = test;
      return;
    }

    this.testList = test.sort((a: any, b: any) => {
      const isAsc = sort4.direction === 'asc';
      switch (sort4.active) {
        case 'date': return compare(a.date, b.date, isAsc);
        default: return 0;
      }
    });
    // deploy 
    const deploy = this.deployList.slice();
    if (!sort5.active || sort5.direction === '') {
      this.deployList = deploy;
      return;
    }

    this.deployList = deploy.sort((a: any, b: any) => {
      const isAsc = sort5.direction === 'asc';
      switch (sort5.active) {
        case 'date': return compare(a.date, b.date, isAsc);
        default: return 0;
      }
    });
  }

}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);


}