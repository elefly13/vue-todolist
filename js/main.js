Vue.config.devtools = true;

const app = new Vue(
    {
        el: '#root',
        data: {
            newToDo: "",
            toDos: [
                "Fare i compiti",
                "Fare la spesa",
                "Fare il letto",
            ]
        },
        methods: {
            addToDo() {
                if(this.newToDo != "") {
                    this.toDos.push(this.newToDo);
                    this.newToDo = "";
                }
                
            }
           
        }
    }
)