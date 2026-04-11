document.addEventListener("DOMContentLoaded", function () {
  const joinForm = document.getElementById("joinForm");
  const resultTableBody = document.querySelector("#resultTable tbody");

  if (joinForm) {
    joinForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const fullName = document.getElementById("fullName").value.trim();
      const email = document.getElementById("email").value.trim();
      const age = document.getElementById("age").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const plan = document.getElementById("plan").value;
      const visitTime = document.getElementById("visitTime").value;
      const message = document.getElementById("message").value.trim();

      const genderInput = document.querySelector('input[name="gender"]:checked');
      const gender = genderInput ? genderInput.value : "Not selected";

      const interestInputs = document.querySelectorAll('input[name="interests"]:checked');
      const interestsArray = [];

      interestInputs.forEach(function (item) {
        interestsArray.push(item.value);
      });

      const interests = interestsArray.length > 0 ? interestsArray.join(", ") : "None selected";

      const formData = [
        { field: "Full Name", value: fullName },
        { field: "Email Address", value: email },
        { field: "Age", value: age },
        { field: "Phone Number", value: phone },
        { field: "Gender", value: gender },
        { field: "Fitness Interests", value: interests },
        { field: "Membership Plan", value: plan },
        { field: "Preferred Visit Time", value: visitTime },
        { field: "Fitness Goal", value: message }
      ];

      localStorage.setItem("fitzoneFormData", JSON.stringify(formData));
      window.location.href = "page5.html";
    });
  }

  if (resultTableBody) {
    const savedData = localStorage.getItem("fitzoneFormData");

    if (savedData) {
      const parsedData = JSON.parse(savedData);

      parsedData.forEach(function (item) {
        const row = document.createElement("tr");

        const fieldCell = document.createElement("td");
        fieldCell.textContent = item.field;

        const valueCell = document.createElement("td");
        valueCell.textContent = item.value;

        row.appendChild(fieldCell);
        row.appendChild(valueCell);
        resultTableBody.appendChild(row);
      });
    } else {
      const row = document.createElement("tr");
      const cell1 = document.createElement("td");
      const cell2 = document.createElement("td");

      cell1.textContent = "Notice";
      cell2.textContent = "No submitted form data found.";

      row.appendChild(cell1);
      row.appendChild(cell2);
      resultTableBody.appendChild(row);
    }
  }
});
