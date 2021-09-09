Vue.config.devtools = true;

const app = new Vue(
    {
        el: '#root',
        data: {
            toDos: [
                "fare i compiti",
                "fare la spesa",
                "fare il letto",
            ]
        }
    }
)