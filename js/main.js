Vue.config.devtools = true;

const app = new Vue(
    {
        el: '#root',
        data: {
            newToDo: "",
            toDos: [
                // "Fare i compiti",
                // "Fare la spesa",
                // "Fare il letto",
                {
                    titolo: "fare i compiti",
                    fatto: false,
                    colorClass: ".red"
                },
                {
                    titolo: "fare la spesa",
                    fatto: false,
                    colorClass: ".red"
                },
                {
                    titolo: "fare il bucato",
                    fatto: false,
                    colorClass: ".red"
                }
            ]
        },
        methods: {
            addToDo() {  
                if(this.newToDo != "") {
                    // this.toDos.push(this.newToDo); //Array
                    this.toDos.push({titolo: this.newToDo}); //Oggetti
                    this.newToDo = "";
                }
            },
            removeToDo(index) {
                this.toDos.splice(index,1);
            },
            changeColor() {
                (this.toDos.fatto == false) ? this.toDos.colorClass = ".green" : this.toDos.colorClass = ".red";
            },
        }
    }
)