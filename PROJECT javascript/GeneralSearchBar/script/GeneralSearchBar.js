class Filter {
    constructor() {
        this.init();
    }

    init() {
        this.setupListeners();
    }

    search() {
        const input = document.getElementById("input");
        const filter = input.value.toUpperCase();
        const items = document.querySelectorAll("#items li");

        items.forEach(item => {
            const name = item.getAttribute("data-name").toUpperCase();
            const displayStyle = name.includes(filter) ? "block" : "none";
            item.style.display = displayStyle;
        });

        // if (filter === "") {
        //     this.hideAllItems(items);
        // }
    }

    // hideAllItems(items) {
    //     items.forEach(item => {
    //         item.style.display = "none";
    //     });
    // }

    setupListeners() {
        const input = document.getElementById("input");
        input.addEventListener("input", () => this.search());
    }
}

const filter = new Filter();
