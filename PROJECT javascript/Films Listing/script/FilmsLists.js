class FavoritesListing {
    constructor() {
        //! selectors
        this.Input = document.querySelector(".input-container");
        this.AddButton = document.querySelector(".add-button");
        this.ALLcleaner = document.querySelector(".cleaner-button");
        this.FilmList = document.querySelector(".Film-list");
        this.ListFilter = document.querySelector(".filter-List");

        //! alerts
        this.alertWarning = document.querySelector(".alert-warning");
        this.alertSuccess = document.querySelector(".alert-success");

        //! events 
        this.AddButton.addEventListener("click", this.addToList.bind(this));
        this.ALLcleaner.addEventListener("click", this.cleaner.bind(this));
        this.FilmList.addEventListener("click", this.deleteCheck.bind(this));
        this.ListFilter.addEventListener("click", this.filterTodo.bind(this));
    }

    //! functions
    addToList(e) {
        e.preventDefault();

        const inputValue = this.Input.value;

        if (inputValue === '') {
            this.alertWarning.style.display = "block";
            setTimeout(() => {
                this.alertWarning.style.display = "none";
            }, 3000);

            // input ველის მნიშვნელობის გაცარიელება
            this.Input.value = "";

            return;
        } else {
            this.alertSuccess.style.display = "block";
            setTimeout(() => {
                this.alertSuccess.style.display = "none";
            }, 3000);

            this.saveInLocalStorage(this.Input.value);

            // სიის ul-ში div-ის შექმნა
            const todoDIv = document.createElement("div");
            todoDIv.classList.add("todo");

            // მონიშვნის ღილაკის შექმნა
            const completedButton = document.createElement("button");
            completedButton.innerHTML = "<i class='fas fa-check-circle'></i>";
            completedButton.classList.add("complete-btn");
            todoDIv.appendChild(completedButton);

            // li-ის შექმნა
            const newTodo = document.createElement("li");
            newTodo.innerText = this.Input.value;
            newTodo.classList.add("todo-item");
            todoDIv.appendChild(newTodo);

            // წაშლის ღილაკის შექმნა
            const trashButton = document.createElement("button");
            trashButton.innerHTML = "<i class='fa fa-minus-circle'></i>";
            trashButton.classList.add("trash-btn");
            todoDIv.appendChild(trashButton);

            // სიაში ჩამატება
            this.FilmList.appendChild(todoDIv);

            // input ველის მნიშვნელობის გაცარიელება
            this.Input.value = "";
        }
    }

    //! ელემენტების ცალკეული წაშლა
    deleteCheck(e) {
        const item = e.target;

        // მოცემული ელემენტის წაშლა
        if (item.classList[0] === "trash-btn") {
            const todo = item.parentElement;
            todo.classList.add("fall");
            this.removeFromLocaleStorage(todo)
            todo.addEventListener("transitionend", function () {
                todo.remove();
            })
        }

        // მოცემული ელემენტის ხაზგასმა
        if (item.classList[0] === "complete-btn") {
            const todo = item.parentElement;
            todo.classList.toggle("completed")
        }
    }

    //! მონაცემების გადარჩევა
    filterTodo(e) {
        const todos = this.FilmList.childNodes;
        todos.forEach(function (item) {
            switch (e.target.value) {
                case "all":
                    item.style.display = "flex";
                    break;
                case "completed":
                    if (item.classList.contains("completed")) {
                        item.style.display = "flex";
                    } else {
                        item.style.display = "none";
                    }
                    break;
                case "uncompleted":
                    if (!item.classList.contains("completed")) {
                        item.style.display = "flex";
                    } else {
                        item.style.display = "none";
                    }
                    break;
            }
        });
    }

    //! local Storage-ში შენახვა
    saveInLocalStorage(todo) {
        let todos;
        if (localStorage.getItem("Lists") === null) {
            todos = [];
        } else {
            todos = JSON.parse(localStorage.getItem("Lists"));
        }

        todos.push(todo);
        localStorage.setItem("Lists", JSON.stringify(todos))
    }

    //! გვერდის განახლების შემდგომ მონაცემების წამოღება და
    //! თავდაპირველი სახით დაბრუნება/შენარჩუნება
    tabRefreshaUptade() {
        let todos;
        if (localStorage.getItem("Lists") === null) {
            todos = [];
        } else {
            todos = JSON.parse(localStorage.getItem("Lists"));
        }

        todos.forEach((todo) => {
            // div-ის შექმნა
            const todoDIv = document.createElement("div");
            todoDIv.classList.add("todo");

            // მონიშვნის ღილაკი
            const completedButton = document.createElement("button");
            completedButton.innerHTML = "<i class='fas fa-check-circle'></i>";
            completedButton.classList.add("complete-btn");
            todoDIv.appendChild(completedButton);

            // li-ის შექმნა
            const newTodo = document.createElement("li");
            newTodo.innerText = todo;
            newTodo.classList.add("todo-item");
            todoDIv.appendChild(newTodo);

            // წაშლის ღილაკის შექმნა
            const trashButton = document.createElement("button");
            trashButton.innerHTML = "<i class='fa fa-minus-circle'></i>";
            trashButton.classList.add("trash-btn");
            todoDIv.appendChild(trashButton);

            // დამატება სიაში
            this.FilmList.appendChild(todoDIv);
        });
    }

    // ! locastorage-დან ამოღება
    removeFromLocaleStorage(todo) {
        let todos;
        if (localStorage.getItem("Lists") === null) {
            todos = [];
        } else {
            todos = JSON.parse(localStorage.getItem("Lists"));
        }
        const todoIndex = todo.children[1].innerText;
        todos.splice(todos.indexOf(todoIndex), 1);
        localStorage.setItem("Lists", JSON.stringify(todos));
    }

    // ! ყველაფრის წაშლა, localStorage-ის გათავისუფლება სრულად
    cleaner() {
        // გადამოწმება, უნდა წავშალოთ თუ არა ყველაფერი
        if (confirm("ნამდვილად გსურთ ყველაფრის წაშლა?")) {
            alert("ეს შენ გინდოდა!");
            const cleaner = localStorage.clear();
        } else {
            alert("სად გადარჩი!");
        }
        
    }   
}

const FavoritesListingProgram = new FavoritesListing();
FavoritesListingProgram.tabRefreshaUptade();