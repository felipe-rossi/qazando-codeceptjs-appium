module.exports = {

    //Executa antes do projeto começar
    start: function(){
        console.log("Bootstrap no server.js")
    },

    //Executa Depois do projeto terminar
    stop: function(){
        console.log("Teardown no server.js")
    }
}