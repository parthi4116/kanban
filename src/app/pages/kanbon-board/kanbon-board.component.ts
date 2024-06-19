import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
export interface itemNames {
  description: any,
  done: boolean;
  date: any,
  title: any
}
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-kanbon-board',
  templateUrl: './kanbon-board.component.html',
  styleUrls: ['./kanbon-board.component.scss']
})

export class KanbonBoardComponent implements OnInit {
  stockForm: FormGroup;
  todoList: any[] = [];
  inprogress: any[] = [];
  doneList: any[] = [];
  testList: any[] = [];
  deployList: any[] = [];
  updateIndex!: any;
  isEditEnabled: boolean = false;
  checktype: any;
  constructor(private fb: FormBuilder, private modelservice: NgbModal) { }
  @ViewChild('add', { static: false }) add: ElementRef;

  ngOnInit(): void {
    this.stockForm = this.fb.group({
      title: [' ', Validators.required],
      desc: [' ', Validators.required],
      date: [' ', Validators.required]
    })
  };
  //  this.modalService.open(this.popupChooseCard, { centered: true, size: 'md' });
  opendia() {
    this.modelservice.open(this.add, { centered: true, size: 'md' });
  }
  addList() {
    this.todoList.push({
      description: this.stockForm.value.desc,
      date: this.stockForm.value.date,
      title: this.stockForm.value.title,
      done: false
    });
    this.stockForm.reset()
    this.modelservice.dismissAll()
  }
  deleteItem(index: number,checktype:any) {
     if (checktype== 'inprgress') {
      this.inprogress.splice(index, 1);
    } else if (checktype == 'stack') {
      this.todoList.splice(index, 1)
    }else if (checktype == 'done') {
      this.doneList.splice(index, 1)
    }else if (checktype== 'test') {
      this.testList.splice(index, 1)
    }else if (checktype == 'deploy') {
      this.deployList.splice(index, 1)
    }
  }
   
  onEdit(item: itemNames, index: number, type: any) {
    this.checktype = type
    this.opendia();
    this.stockForm.controls['title'].setValue(item.title)
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
    } else if (this.checktype == 'stack') {
      this.todoList[this.updateIndex].title = this.stockForm.value.title;
      this.todoList[this.updateIndex].date = this.stockForm.value.date;
      this.todoList[this.updateIndex].description = this.stockForm.value.desc;
    }else if (this.checktype == 'done') {
      this.doneList[this.updateIndex].title = this.stockForm.value.title;
      this.doneList[this.updateIndex].date = this.stockForm.value.date;
      this.doneList[this.updateIndex].description = this.stockForm.value.desc;
    }else if (this.checktype == 'test') {
      this.testList[this.updateIndex].title = this.stockForm.value.title;
      this.testList[this.updateIndex].date = this.stockForm.value.date;
      this.testList[this.updateIndex].description = this.stockForm.value.desc;
    }else if (this.checktype == 'deploy') {
      this.deployList[this.updateIndex].title = this.stockForm.value.title;
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
  }


}