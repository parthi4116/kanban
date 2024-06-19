import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
export interface itemNames{
  description: any,
  done:boolean;
  date:any,
      title:any
}
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-kanbon-board',
  templateUrl: './kanbon-board.component.html',
  styleUrls: ['./kanbon-board.component.scss']
})

export class KanbonBoardComponent implements OnInit {
  itemsColumn1 :any= ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
  itemsColumn2 :any= [];
  itemsColumn3 :any= [];
  editingIndex: { column: number, index: number } | null = null;
  stockForm :FormGroup;
taskList: any []=[];
inprogress:any []=[];
  done: any[] = [];
updateIndex!:any;
isEditEnabled:boolean=false;
  constructor(private fb:FormBuilder, private modelservice:NgbModal) { }
  @ViewChild('add', { static: false }) add: ElementRef;

  ngOnInit(): void {
    this.stockForm=this.fb.group({
      title: [' ', Validators.required],
      desc: [' ', Validators.required],
     date: [' ', Validators.required]
    })
  };
  //  this.modalService.open(this.popupChooseCard, { centered: true, size: 'md' });
  opendia(){
    this.modelservice.open(this.add, { centered: true, size: 'md' });
  }
  addList(){
     this.taskList.push({
      description:this.stockForm.value.desc,
      date:this.stockForm.value.date,
      title:this.stockForm.value.title,
      done:false
     })
  }
  deleteItem(index:number){
    this.taskList.splice(index,1);  
  }
  deleteInprogItem(index:number){
     this.inprogress.splice(index,1)
  }
  deleteDoneItem(index:number){
    this.done.splice(index,1)
  }
  onEdit(item:itemNames,index:number){
    console.log(item);
    console.log(this.inprogress);

     this.stockForm.controls['title'].setValue(item.title)
     this.updateIndex=index;
     this.isEditEnabled=true;
  };
  onEdit1(item:itemNames,index:number){
     this.stockForm.controls['title'].setValue(item.title)
     this.updateIndex=index;
     this.isEditEnabled=true;
  }
  updateList(type:any){
    this.inprogress[this.updateIndex].title = this.stockForm.value.title;
    this.taskList[this.updateIndex].title = this.stockForm.value.title;
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
 

  drop1(event: CdkDragDrop<itemNames[]>) {
    console.log(event);
    
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }

  addItem() {
    this.itemsColumn1.push(`Item ${this.itemsColumn1.length + 1}`);
  }

  editItem(column: number, index: number) {
    this.editingIndex = { column, index };
  }

  saveItem(column: number, index: number, newValue: string) {
    if (newValue.trim()) {
      if (column === 1) {
        this.itemsColumn1[index] = newValue;
      } else if (column === 2) {
        this.itemsColumn2[index] = newValue;
      } else if (column === 3) {
        this.itemsColumn3[index] = newValue;
      }
      this.editingIndex = null;
    }
  }

  cancelEdit() {
    this.editingIndex = null;
  }

}