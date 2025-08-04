const input = document.querySelector("#thir");
const button = document.querySelector("#four");




button.addEventListener("click", async () => {
  const value = input.value.trim();

  if (/^\d{12}$/.test(value)) {
     const response = await fetch("data.json");//access the json data here first
     const data = await response.json();//convert json file to useful format
     
     const user = data.find(person => person.aadhaar === value);

     if (user) {
          document.querySelector(".result").innerHTML = `
          <p>Fetched Details From Aadhar</p>
          <p><strong>Name:</strong> ${user.name}</p>
          <p><strong>DOB:</strong> ${user.DOB}</p>
          <img src = "${user.photo}" alt="User photo">
          `;
     } 

  }
  else {
    alert("Invalid Aadhaar number. Please enter 12 digits.");
  }

});