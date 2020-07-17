import { Component, OnInit } from '@angular/core';
import{Chart} from 'chart.js';
import * as FusionCharts from 'fusioncharts';

export interface PeriodicElement1 {
  
  material: string;
  materialdesc: string;
  order:string;
  recived:string;
  rejected:string;
  rework:string;

}
const ELEMENT_DATA1: PeriodicElement1[] = [
  {material:'Amaron Tall Battery' , materialdesc: 'AAM-CR-AR150TN54 - AM CR150  ', order:'19,357',recived:'15,896',rejected:'2,895',rework:'1,543'},
  {material:'Amaron Tall Battery' , materialdesc: 'AAM-CR-AR150TN54 - AM CR150  ', order:'19,357',recived:'15,896',rejected:'2,895',rework:'1,543'},
  {material:'Amaron Tall Battery' , materialdesc: 'AAM-CR-AR150TN54 - AM CR150  ', order:'19,357',recived:'15,896',rejected:'2,895',rework:'1,543'},
  {material:'Amaron Tall Battery' , materialdesc: 'AAM-CR-AR150TN54 - AM CR150  ', order:'19,357',recived:'15,896',rejected:'2,895',rework:'1,543'},
  {material:'Amaron Tall Battery' , materialdesc: 'AAM-CR-AR150TN54 - AM CR150  ', order:'19,357',recived:'15,896',rejected:'2,895',rework:'1,543'},
  {material:'Amaron Tall Battery' , materialdesc: 'AAM-CR-AR150TN54 - AM CR150  ', order:'19,357',recived:'15,896',rejected:'2,895',rework:'1,543'}
];


 








@Component({
  selector: 'app-good-receipt',
  templateUrl: './good-receipt.component.html',
  styleUrls: ['./good-receipt.component.css']
})
export class GoodReceiptComponent implements OnInit {
  title = 'Bar Chart Example in Angular 4';
  chartOptions = {
    responsive: true    // THIS WILL MAKE THE CHART RESPONSIVE (VISIBLE IN ANY DEVICE).
  }
  labels =  ['17/04/2020', '18/04/2020', '19/04/2020', '20/04/2020', '21/04/2020'];
  chartData = [
    {
      label: 'planned',
      data: [80, 30, 60, 60, 80] 
    },
    { 
      label: 'actual',
      data: [55, 75, 80, 75, 100]
    }
  ];
  colors = [
    { // 1st Year.
      // backgroundColor: 'rgba(77,83,96,0.2)'
      backgroundColor: '#ff8f3d'
      
    },
    { // 2nd Year.
      backgroundColor: '#1b69d0'
    }
  ];
  // backgroundImage:'linear-gradient(to top, #dc4327, #ff8f3d)' ;
width=[
  innerWidth=10,
 
  // this.width=10
];
height=[
//  innerHeight=4,
 innerHeight=4
];



  
chart=[];
chart2=[];
public Months: any[];
public Flower: any[];
  displayedColumns1: string[] = ['material', 'materialdesc',  'order','recived','rejected','rework'];
  dataSource1 = ELEMENT_DATA1;
  constructor() { }

  ngOnInit(): void {
    
    // height: 435px;
    // width: 688px;

    new Chart('doughnut1',{
      type :'doughnut',
      options:{
        responsive :true,
     cutoutPercentage:40,
      
        title:{
          display:false,
          text:'Doughnut chart'
        
        },
//        dataset1:{
// padding:"10px"
//        },
        legend :{
          display:false,
          position:'top'
        
        },
        animation:{
          animateScale:true,
          animateRotate:true
        }
      },
      data :{
        datasets :[{
          data:[61,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1],
          backgroundColor:["#6dd7d3","#e2e2e2","#e2e2e2","#e2e2e2","#e2e2e2","#e2e2e2","#e2e2e2","#e2e2e2","#e2e2e2","#e2e2e2","#e2e2e2","#e2e2e2","#e2e2e2","#e2e2e2","#e2e2e2","#e2e2e2","#e2e2e2","#e2e2e2","#e2e2e2","#e2e2e2","#e2e2e2","#e2e2e2","#e2e2e2","#e2e2e2","#e2e2e2","#e2e2e2","#e2e2e2","#e2e2e2","#e2e2e2","#e2e2e2","#e2e2e2","#e2e2e2"],
          label:'dataset1'
        }
        ,{
          data:[1],
          backgroundColor:["#ffffff"],
          label:'dataset1'
        },
        {
          data:[0.1],
          backgroundColor:["#6dd7d3"],
          label:'dataset2'
        }
      ],
     
        
        labels:['blue','orange','yellow','blue','pink','orange','orange','orange','orange','orange','orange','orange','orange','orange']
      }
    })
   



this.Months = [
  
    // { Value: 1, Label: "December" },
    // { Value: 1, Label: "January" },
    // { Value: 1, Label: "February" },
    // { Value: 1, Label: "March" },
    { Value: 1, Label: "April" }
    // { Value: 1, Label: "May" },
    // { Value: 1, Label: "June" },
    // { Value: 1, Label: "July" },
    // { Value: 1, Label: "August" },
    // { Value: 1, Label: "September" },
    // { Value: 1, Label: "October" },
    // { Value: 1, Label: "November" },
];
this.Flower = [
    // { Value: 4, Label: "Winter" },
    // { Value: 4, Label: "Spring" },
    { Value: 4, Label: "rose" },
    // { Value: 4, Label: "Fall" },
];
   

FusionCharts.ready(function() {
  var salesChart = new FusionCharts({
      type: "overlappedColumn2d",
      renderAt: "chart-container",
      width: "700",
      height: "400",
      dataFormat: "json",
      dataSource: {
        "chart": {
          "caption": "Healthcare Expenditure per capita (Public vs Private sector)",
          "subCaption": "in 2016",
          "xAxisName": "Country",
          "yAxisName": "Amount (in USD)",
          "showValues": "0",
          "theme": "fusion"
        },
        "categories": [{
          "category": [{
            "label": "Switzerland"
          }, {
            "label": "USA"
          }, {
            "label": "Canada"
          }, {
            "label": "Australia"
          }, {
            "label": "OECD-35"
          }, {
            "label": "Israel"
          }]
        }],
        "dataset": [{
          "seriesname": "Healthcare Expenses per capita (in USD) in Public sector",
          "data": [{
            "value": "5038"
          }, {
            "value": "4860"
          }, {
            "value": "3341"
          }, {
            "value": "3190"
          }, {
            "value": "2937"
          }, {
            "value": "1702"
          }]
        }, {
          "seriesname": "Healthcare Expenses per capita (in USD) in Private sector",
          "data": [{
            "value": "2881"
          }, {
            "value": "5032"
          }, {
            "value": "1412"
          }, {
            "value": "1518"
          }, {
            "value": "1066"
          }, {
            "value": "1120"
          }]
        }]
      }
    })
    .render();
});

  }

}
