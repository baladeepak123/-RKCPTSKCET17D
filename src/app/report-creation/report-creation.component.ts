import { Component, OnInit } from '@angular/core';
import { HeadObj } from './report-model';
import { AjaxService } from '../ajax.service';
import { ConditionalExpr } from '@angular/compiler';

@Component({
  selector: 'app-report-creation',
  templateUrl: './report-creation.component.html',
  styleUrls: ['./report-creation.component.css']
})
export class ReportCreationComponent implements OnInit {

  
arrayValue: any[];

constructor(private ajaxService: AjaxService) { }
  ngOnInit() {
    //  this.getReportCategoryName();
    this.viewRecord();
  }
  headobj = new HeadObj();

  createReport()
  {
    alert("comming");
    this.ajaxService.createNew1(this.headobj.reportCategoryName,this.headobj.reportName,this.headobj.reportNumber,"reportBasic/insert").subscribe(
      data=>{
        alert("Successfully Stored");
      }, error => {
        console.log(error);
      }
    )
  }
 
  viewRecord()
  {

    this.ajaxService.findAll("reportBasic/findAll").subscribe(
      data=>{
        console.log(data);
        this.arrayValue = Object.values(data);
        //alert("Successfully Stored");
      }, error => {
        console.log(error);
      }
    )
  }
  

}
