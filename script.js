document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");
  
    const showError = (id, message) => {
      const div = document.getElementById(`error_${id}`);
      div.textContent = message;
      div.style.display = 'block';
    };
  
    const hideError = (id) => {
      const div = document.getElementById(`error_${id}`);
      div.textContent = '';
      div.style.display = 'none';
    };
  
    const isAdult = (birthdate) => {
      const birth = new Date(birthdate);
      const today = new Date();
      const age = today.getFullYear() - birth.getFullYear();
      const m = today.getMonth() - birth.getMonth();
      return age > 18 || (age === 18 && (m > 0 || (m === 0 && today.getDate() >= birth.getDate())));
    };
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      let valid = true;
  
      const fullName = document.getElementById("full_name").value.trim();
      if (!fullName) {
        showError("full_name", "Aquest camp és obligatori.");
        valid = false;
      } else if (/\d|\W{2,}/.test(fullName)) {
        showError("full_name", "El nom només pot contenir lletres i espais.");
        valid = false;
      } else {
        hideError("full_name");
      }
  
      const username = document.getElementById("username").value.trim();
      if (!username) {
        showError("username", "Aquest camp és obligatori.");
        valid = false;
      } else if (
        username.length < 5 ||
        username.length > 15 ||
        !/^[a-zA-Z]/.test(username) ||
        /[^a-zA-Z0-9_.]/.test(username)
      ) {
        showError("username", "El nom d'usuari ha de començar per una lletra i tenir entre 5 i 15 caràcters.");
        valid = false;
      } else {
        hideError("username");
      }
  
      const email = document.getElementById("email").value.trim();
      if (!email) {
        showError("email", "Aquest camp és obligatori.");
        valid = false;
      } else if (!email.includes("@") || !email.includes(".")) {
        showError("email", "Introdueix un correu electrònic vàlid.");
        valid = false;
      } else {
        hideError("email");
      }
  
      const phone = document.getElementById("phone").value.trim();
      if (!phone) {
        showError("phone", "Aquest camp és obligatori.");
        valid = false;
      } else if (phone.length !== 9 || isNaN(phone)) {
        showError("phone", "Introdueix un número de telèfon vàlid de 9 xifres.");
        valid = false;
      } else {
        hideError("phone");
      }
  
      const birthdate = document.getElementById("birthdate").value;
      if (!birthdate) {
        showError("birthdate", "Aquest camp és obligatori.");
        valid = false;
      } else if (!isAdult(birthdate)) {
        showError("birthdate", "Has de ser major d’edat per poder registrar-te.");
        valid = false;
      } else {
        hideError("birthdate");
      }
  
      const postal = document.getElementById("postal_code").value.trim();
      if (!postal) {
        showError("postal_code", "Aquest camp és obligatori.");
        valid = false;
      } else if (postal.length !== 5 || isNaN(postal)) {
        showError("postal_code", "Introdueix un codi postal vàlid de 5 xifres.");
        valid = false;
      } else {
        hideError("postal_code");
      }
  
      const address = document.getElementById("address").value.trim();
      if (!address) {
        showError("address", "Aquest camp és obligatori.");
        valid = false;
      } else if (address.length > 100) {
        showError("address", "L'adreça no pot superar els 100 caràcters.");
        valid = false;
      } else {
        hideError("address");
      }
  
      const password = document.getElementById("password").value;
      if (!password) {
        showError("password", "Aquest camp és obligatori.");
        valid = false;
      } else if (
        password.length < 8 ||
        !/[a-z]/.test(password) ||
        !/[A-Z]/.test(password) ||
        !/[0-9]/.test(password) ||
        !/[^a-zA-Z0-9\s]/.test(password) ||
        password.includes(" ")
      ) {
        showError("password", "La contrasenya ha de tenir almenys 8 caràcters, amb majúscules, minúscules, números i símbols especials.");
        valid = false;
      } else {
        hideError("password");
      }
  
      const confirmPassword = document.getElementById("confirm_password").value;
      if (!confirmPassword) {
        showError("confirm_password", "Aquest camp és obligatori.");
        valid = false;
      } else if (confirmPassword !== password) {
        showError("confirm_password", "Les contrasenyes no coincideixen.");
        valid = false;
      } else {
        hideError("confirm_password");
      }
  
      const terms = document.getElementById("terms").checked;
      if (!terms) {
        showError("terms", "Has d'acceptar els termes i condicions per continuar.");
        valid = false;
      } else {
        hideError("terms");
      }
  
      if (valid) {
        alert("Formulari enviat correctament.");
      }
    });
  });
  