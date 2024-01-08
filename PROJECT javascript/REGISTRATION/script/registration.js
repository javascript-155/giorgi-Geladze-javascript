class UserRegistration {
    constructor() {
        this.inputForm = document.querySelector(".inputForm");
        this.emailInput = document.querySelector(".email");
        this.passwordInput = document.querySelector(".password");
        this.submitBtn = document.querySelector(".submitbtn");

        this.inputForm.addEventListener("submit", this.handleFormSubmit.bind(this));
    }

    handleFormSubmit(event) {
        event.preventDefault();

        const emailValue = this.emailInput.value;
        const passwordValue = this.passwordInput.value;

    if (this.validateEmail(emailValue) && this.validatePassword(passwordValue)) {

        if (!this.isUserExist(emailValue)) {
            const users = this.getUsers();
            users.push({ email: emailValue, password: passwordValue });
            this.saveUsers(users);

            alert("რეგისტრაციამ წარმატებით ჩაიარა!");

            this.emailInput.value = "";
            this.passwordInput.value = "";
        } else {
            alert("ეს ემაილი უკვე გამოყენებულია. ცადეთ სხვა");
        }

    } else {
      alert("შეიყვანეთ სწორი ელფოსტა და პაროლი მინ: 8 და მაქს: 24 სიმბოლოთი.");
    }
  }

  validateEmail(email) {
    const emailRegex = /^[\w.-]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,6})+$/;
    return emailRegex.test(email);
  }

  validatePassword(password) {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\S{8,24}$/;
    return passwordRegex.test(password);
  }

  getUsers() {
    const storedUsers = localStorage.getItem("users");

    if (storedUsers) {
        return JSON.parse(storedUsers);
    } else {
        return [];
    }
  }

  saveUsers(users) {
    localStorage.setItem("users", JSON.stringify(users));
  }

  isUserExist(email) {
    const users = this.getUsers();
    return users.some((user) => user.email === email);
  }
}
const userRegistration = new UserRegistration();

class Smile {
    constructor() {
        this.smile = document.querySelector("#smile");
        this.face = document.querySelector("#face");
        this.inputElement = document.querySelector(".email");
        this.facing();
    }

    facing() {
        const inputValue = this.inputElement.value.trim();

    if (inputValue === "" || /\s/g.test(inputValue)) {
        this.smile.style.visibility = "hidden";
        this.face.style.visibility = "visible";
    } else {
        this.smile.style.visibility = "visible";
        this.face.style.visibility = "hidden";
    }
  }
}
const smiles = new Smile();

function smile() {
  smiles.facing();
}

class Visibility {
    constructor() {
        this.visible = false;
        this.visibleIcon = document.querySelector("#visible");
        this.hiddenIcon = document.querySelector("#unvisible");
        this.toggle();
    }

  toggle() {
        let x = document.querySelector(".password");
        this.visible = !this.visible;

    if (this.visible) {
        x.type = "password";
        this.visibleIcon.style.visibility = "hidden";
        this.hiddenIcon.style.visibility = "visible";
    } else {
        x.type = "text";
        this.visibleIcon.style.visibility = "visible";
        this.hiddenIcon.style.visibility = "hidden";
    }
  }
}
const visibilityInstance = new Visibility();
function toggleVisibility() {
  visibilityInstance.toggle();
}