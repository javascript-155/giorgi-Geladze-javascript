class ContactForm {
    constructor() {
        this.form = document.getElementById("contactForm");
        this.form.addEventListener("submit", this.handleSubmit.bind(this));
    }

    handleSubmit(e) {
        e.preventDefault();
        this.justReceive();
    }

    justReceive() {
        const name = document.getElementById("name").value;
        const lastname = document.getElementById("lastname").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const comment = document.getElementById("comment").value;

        const True = true;
        if (True) {
            if (name === '') {
                alert("სახელის ველი ცარიელია!");
            } else if (lastname === '') {
                alert("იაკობს გვარი არააქვს?!");
            } else if (email === '') {
                alert("მაილის ველი ცარიელია!");
            } else if (phone === '') {
                alert("შეიყვანე ნომერი!");
            } else if (comment === '') {
                alert("კომენტარი თუ არ გააკეთე ცარიელს რას მიგზავნი, შენი გაცნობა კი არ მინდა");
            } else {
                const storedContacts = JSON.parse(localStorage.getItem("contactInfo")) || [];

                storedContacts.push({
                    name: name,
                    lastname: lastname,
                    email: email,
                    phone: phone,
                    comment: comment
                });

                localStorage.setItem("contactInfo", JSON.stringify(storedContacts));

                alert("მონაცემები გაიგზავნა!");
    
                // name.value = '';
                // lastname.value = '';
                // email.value = '';
                // phone.value = '';
                // comment.value = '';
                this.form.reset();
            }
        }
    }
}

const contactFormInstance = new ContactForm();