import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {
  myForm:FormGroup;      // reference created not memory.
  msg?:string;
  questions=[
    {question:"5+6",ans1:"4",ans2:"11",ans3:"10",ans4:"9",correcAns:"11"},
    {question:"10-5",ans1:"5",ans2:"4",ans3:"3",ans4:"2",correcAns:"5"},
    {question:"5*6",ans1:"40",ans2:"10",ans3:"30",ans4:"20",correcAns:"30"}
  ]
   // DI for FormBuild which help to create the reference of form group 
  constructor(public form:FormBuilder) {  // DI 
    this.myForm=form.group({});
  }   
  ngOnInit(): void {
    this.questions.forEach(q=>{
      if(this.myForm!=undefined){
            this.myForm?.addControl(q.question,this.form.control("",[Validators.required]));
      }
    });

  }

  submitAnswer(examRef:NgForm){
    let exam = examRef.value;
    console.log(exam);
  }  

}
