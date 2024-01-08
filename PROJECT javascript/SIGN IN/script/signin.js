class UserSignIn {
    constructor() {
        this.inputForm = document.getElementById("signInForm");
        this.emailInput = document.getElementById("emailInput");
        this.passwordInput = document.getElementById("passwordInput");
        this.submitBtn = document.getElementById("submitButton");

        this.inputForm.addEventListener("submit", this.handleFormSubmit.bind(this));
    }

    handleFormSubmit(event) {
        event.preventDefault();

        const mail = this.emailInput.value;
        const pass = this.passwordInput.value;

        let users = JSON.parse(localStorage.getItem('users')) || [];

        if (users.length > 0) {
            const foundUser = users.find(user => user.email === mail && user.password === pass);

            if (foundUser) {
                alert("შესვლა განხორციელდა");
                window.location.href = '/MAIN/index.html';
            } else if (users.some(user => user.email === mail)) {
                alert("პაროლი არ ემთხვევა");
            } else if (users.some(user => user.password === pass)) {
                alert("მცდარია");
            } else {
                alert("მცდარი მონაცემები");
                window.location.href = '/REGISTRATION/registration.html';
            }
        } else {
            alert("ასეთი რეგისტრირებული არ არსებობს");
        }
    }
}

const userSignIn = new UserSignIn();
