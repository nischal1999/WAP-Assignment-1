window.onload=function(){
    const checkElderyPatients=document.getElementById('chkElderlyPatients');
    const checkShowOutPatients=document.getElementById('chkShowOutPatients');
    const form=  document.getElementById('patientForm');
  
    form.addEventListener('submit', function (event) {
        event.preventDefault(); 
        const patientId = document.getElementById('patientIdNumber').value;
        const firstName = document.getElementById('firstName').value;
        const middleInitials = document.getElementById('middleInitials').value;
        const lastName = document.getElementById('lastName').value;
        const dateOfBirth = document.getElementById('dateOfBirth').value;
        const department = document.getElementById('ddlDepartment').value;
        const isOutPatientRadioButton=document.getElementById('radioIsOutPatientYes');
        const isOutPatient= isOutPatientRadioButton.checked? "Yes":"No"
        const ageDifference = Date.now() - new Date(dateOfBirth).getTime();
        const ageDate = new Date(ageDifference); 
        const age = (ageDate.getUTCFullYear() - 1970);
        const newRow = document.createElement("tr");

        if(age<65) newRow.classList.add("young");
        if(!isOutPatientRadioButton.checked) newRow.classList.add("in");
        
        newRow.innerHTML = `
        <td>${patientId}</td>
        <td>${firstName}</td>
        <td>${middleInitials}</td>
        <td>${lastName}</td>
        <td>${dateOfBirth}</td>
        <td>${department}</td>
        <td>${isOutPatient}</td>
      `;

      document.getElementById("tbodyPatientsList").appendChild(newRow);
      form.reset();
   
    })

    checkElderyPatients.addEventListener('change',function(event){
      const young = document.getElementsByClassName("young");
      const isChecked = event.currentTarget.checked;
      const chkShowOutPatients = document.getElementById('chkShowOutPatients');

      for (let i = 0; i < young.length; i++) {
          if(isChecked){
              young[i].classList.add("hide");
          }
          else{
              if(!young[i].classList.contains("in") || (young[i].classList.contains("in") && !chkShowOutPatients.checked)) young[i].classList.remove("hide");
      }
    });

    checkShowOutPatients.addEventListener('change',function(event){
      const inPatients = document.getElementsByClassName("in");
      const isChecked = event.currentTarget.checked;
      const elderlyChkbox = document.getElementById('chkElderlyPatients');

      for (let i = 0; i < inPatients.length; i++) {
          if(isChecked){
              inPatients[i].classList.add("hide");
          }
          else{
              if(!inPatients[i].classList.contains("young") || (inPatients[i].classList.contains("young") && !elderlyChkbox.checked))inPatients[i].classList.remove("hide");             
          }
      }
     
    })
};







