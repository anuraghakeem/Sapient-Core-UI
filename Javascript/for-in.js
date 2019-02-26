// var person = {"Anurag":"22", "Vaishnavi":"2","Bhavika":"30","Abishek":"21","Dhruva":"27"};
// var person = [{name:"Anurag",age:"22"}, {name:"Vaishnavi",age:"2"}];

// for (x of person) {
//   console.log(x);
// }

// Basic Algo
// function createElement(){
//     create document.createElement();
// }

// 1. Create a row ie: true
// 2. create a column ie: td

(function () {
    'use strict';
    var students,columnNames=[];
    students = [{
            name: "Kiran",
            age: 30,
            gender:"M"
        },
        {
            gender:"M",
            name: "John",
            age: 20,
           
        },
        {
            gender:"F",
            name: "Bhavika",
            age: 49,
           
        }
    ];
    

    function createElement(elementType) {
        return document.createElement(elementType);
    }

    function createHeaderRow() {
        var headerRow = createElement('tr');
        for (var i in students[0]) {
            var column = createElement('td');
            column.innerHTML = i;
            headerRow.appendChild(column);
            columnNames.push(i);
        }
        console.log(headerRow);
        return headerRow;
    }

    function createDataRow(x) {
            var dataRow = createElement('tr');
            for(var columns=0;columns<columnNames.length;columns++){
                var dataColumn = createElement('td');
                dataColumn.innerHTML = students[x][columnNames[columns]];
                dataRow.appendChild(dataColumn);
            }

            var tdForButton=createElement("td");

            var button = createElement('button');
            button.className="btn btn-danger";
            button.innerHTML="Delete";
            tdForButton.appendChild(button);
            dataRow.appendChild(tdForButton);
        
        console.log(dataRow);
        return dataRow;
    }
    function createTable(){
        var tbl = document.getElementById('tblEmployees');
        tbl.className="table table-striped";
        tbl.appendChild(createHeaderRow());
        for(var x=0;x<students.length;x++){
          tbl.appendChild(createDataRow(x));
        };
        var buttons=document.getElementsByClassName("btn");
        for(var r=0;r<buttons.length;r++){
            buttons[r].addEventListener("click",function(){
                console.log(x["rowNumber"]);
                console.log(this["rowNumber"]);
                this.parentNode.parentNode.remove();
            })
        }
    }
    createTable();
})();