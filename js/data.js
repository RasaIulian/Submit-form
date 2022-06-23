const submitBTN = document.querySelector("#btn1");
const emailConst = document.querySelector("#email");
const nameConst = document.querySelector("#name");
const age = document.querySelector("#age");
const phoneNr = document.querySelector("#phone");
var termsCond = document.querySelector("#remember");
const er = document.querySelector("#error");
const select = document.querySelector("#select");

submitBTN.addEventListener("click", function (e) {
  e.preventDefault(); // anulam submit-ul predefinit
  const regExEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const regExName = /([a-zA-Z]+\s)+[a-zA-Z]/;
  const regExPhone =
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  const emailValue = emailConst.value; // luam doar valoare din field
  const nameValue = nameConst.value; // luam doar valoare din field
  const ageValue = age.value;
  const phoneValue = phoneNr.value;

  const validateEmail = () => {
    if (emailValue.match(regExEmail)) {
      // daca este un email valid
      return true; // returnam true daca adresa e valida
    } else {
      // daca adresa nu se potriveste cu RegEx
      return false; // returnam false daca adresa e invalida
    }
  };

  const validateName = () => {
    if (nameValue.match(regExName)) {
      return true;
    } else {
      return false;
    }
  };

  const validatePhone = () => {
    if (phoneValue.match(regExPhone)) {
      return true;
    } else {
      return false;
    }
  };

  // verificare acceptare termeni si conditii
  function termsCondChecked() {
    if (!termsCond.checked) {
      er.style.display = "inline-block";
      er.style.color = "red";
      er.innerHTML = "Please agree to the terms and conditions";
    } else {
      alert("Registry successful!");
    }
  }

  // inregistrare daca nume, email, telefon, varsta corecte
  if (
    nameValue === "" ||
    emailValue === "" ||
    ageValue === "" ||
    phoneValue === ""
  ) {
    // verificam daca avem valori goale
    er.style.display = "inline-block";
    er.style.color = "red";
    er.innerHTML = "Please fill in all fields!";
  } else if (!validateName()) {
    er.innerHTML = "";
    return alert("Name not valid");
  } else if (!validateEmail()) {
    er.innerHTML = "";
    return alert("e-mail not valid");
  } else if (!validatePhone()) {
    er.innerHTML = "";
    alert("Phone number not valid.");
  } else {
    er.innerHTML = "";
    termsCondChecked();
  }
});

// alert la select fara valoare
const handlePrintSelectValue = ({ value }) => {
  if (value === "") {
    alert("Please select an option.");
  }
};
