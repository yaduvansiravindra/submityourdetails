document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("myForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    let isValid = true;

    // Clear previous error messages and styles
    document.querySelectorAll(".error-msg").forEach(e => e.innerText = "");
    document.querySelectorAll("input, textarea").forEach(e => e.classList.remove("error"));
    document.getElementById("success").innerText = "";

    const fields = ["fname", "lname", "email", "number", "message"];

    fields.forEach(id => {
      const field = document.getElementById(id);
      const errorDiv = document.getElementById(`${id}-error`);

      // ✅ Paste your code here
      field.classList.remove("error"); // remove old error style

      if (field.value.trim() === "") {
        errorDiv.innerText = `${field.previousElementSibling.innerText} cannot be blank!`;
        field.classList.add("error"); // apply light red styling
        isValid = false;
      }
    });

    if (isValid) {
      document.getElementById("success").innerText = "✅ Form submitted successfully!";
      form.submit();
    }
  });
});