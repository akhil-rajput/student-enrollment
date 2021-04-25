const tbodyEl = document.querySelector('tbody');
const table = document.getElementById('studentTable');

function takeValues() {

  const student = new Object();
  hideDefaultTableRow();
  getStudentBioData(student);
  getStudentGender(student);
  getStudentSkills(student);
  resetForm();
  addStudent(student)
}

function resetForm() {

  document.getElementById("student-form").reset();
}

/*
  This method basically hides the default row of the table i.e No Record Found 
 */
function hideDefaultTableRow() {

  document.getElementById("emptyTableRow").style.display = "none";
}

function getStudentGender(student) {

  document.getElementsByName("gridRadios").forEach(radio => {
    if (radio.checked) {
      student.gender = (radio.value)
    }
  });
}

function getStudentBioData(student) {

  student.name = document.getElementById('exampleInputName1').value;
  student.email = document.getElementById('exampleInputEmail1').value;
  student.website = document.getElementById('exampleInputWebsite1').value;
  student.image = document.getElementById('exampleInputImage1').value;
}

function getStudentSkills(student) {

  var skills = [];
  var java = document.getElementById("gridCheck1");
  var html = document.getElementById("gridCheck2");
  var css = document.getElementById("gridCheck3");
  if (java.checked) {
    skills.push("Java");
  }
  if (html.checked) {
    skills.push("HTML");
  }
  if (css.checked) {
    skills.push("CSS");
  }
  student.skills = skills;
}

/*
  This method adds the student data into the table after submitting the form
   */
function addStudent(student) {

  let newTableRow = document.createElement('tr');
  var websiteUrl = "https://";
  websiteUrl += student.website;
  newTableRow.innerHTML = `   
    <tr >
     <td id="dynamicallyAddedTableRow"> <span style="font-weight:600;">${student.name}</span>
     </br>
     ${student.email}
     </br>
     <a target="_blank" href=${websiteUrl}>${student.website} </a>
     </br>
     ${student.gender}
     </br>
     ${student.skills}
     </td>
      
     <td id="dynamicallyAddedTableRow"><img src=${student.image} alt="Student Picture" ></td>
    </tr>
    `
  tbodyEl.appendChild(newTableRow);
}

/*
 This method will clear all rows of the table
 */
function clearRecords() {

  disableButton();
  deleteTableRows();
  addDefaultTableRow();
}

/*
 This method will  disable clear button for 2 seconds after clicking 
 */
function disableButton() {

  document.getElementById("clearBtn").disabled = true;
  setTimeout(function () { document.getElementById("clearBtn").disabled = false; }, 2000);
}

function deleteTableRows() {

  var tableHeaderRowCount = 1;
  var rowCount = table.rows.length;
  for (var i = tableHeaderRowCount; i < rowCount; i++) {
    table.deleteRow(tableHeaderRowCount);
  }
}

function addDefaultTableRow() {

  tbodyEl.innerHTML += `   
  <tr>
  <td colspan="7" id="emptyTableRow"style="text-align: center;background-color:white;">No Record Found</td>
  </tr>
  `;
}