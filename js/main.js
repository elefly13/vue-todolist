Vue.config.devtools = true;

const app = new Vue(
    {
        el: '#root',
        data: {
            daFare: "red",
            giaFatto: "green",
            newToDo: "",
            toDos: [
                // "Fare i compiti",
                // "Fare la spesa",
                // "Fare il letto",
                {
                    titolo: "fare i compiti",
                    fatto: false,
                    
                },
                {
                    titolo: "fare la spesa",
                    fatto: false,
                    
                },
                {
                    titolo: "fare il bucato",
                    fatto: false,
                    
                }
            ]
        },
        methods: {
            addToDo() {  
                if(this.newToDo != "") {
                    // this.toDos.push(this.newToDo); //Array
                    this.toDos.push({titolo: this.newToDo, fatto: false}); //Oggetti
                    this.newToDo = "";
                }
            },
            // funzione per rimuovere dalla lista la riga 
            removeToDo(index) {
                this.toDos.splice(index,1);
            },
            check(index) {
                this.toDos[index].fatto = !this.toDos[index].fatto;
            },
        }
    }
)