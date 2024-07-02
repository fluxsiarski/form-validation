const form = document.querySelector("form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("mail");
const textArea = document.getElementById("message");
const consentCheckbox = document.getElementById("consent");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const elements = [firstName, lastName, email, textArea, consentCheckbox];
  let allValid = true;

  elements.forEach((element) => {
    if (
      (element.type === "checkbox" && !element.checked) ||
      element.validity.valueMissing
    ) {
      showError(element);
      allValid = false;
    } else {
      hideError(element);
    }
  });

  if (allValid) {
    form.submit();
  }
});

function showError(elem) {
  const errorSpan = document.getElementById(`error-${elem.id}`);
  if (errorSpan) {
    errorSpan.classList.add("active");
  }
  elem.classList.add("error-border");
  elem.classList.add("error-border:focus");
  elem.classList.add("error-border:hover");
}

function hideError(elem) {
  const errorSpan = document.getElementById(`error-${elem.id}`);
  if (errorSpan) {
    errorSpan.classList.remove("active");
  }
  elem.classList.remove("error-border");
}
