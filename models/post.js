const db = require("./banco")

// db.authenticate().then(function(){
//     console.log("Conectado")
// }).catch(function(erro){
//     console.log("Falha: " + erro)
// })



const Agendamentos = db.sequelize.define('agendamentos',{
    nome:{
        type: db.Sequelize.STRING
    },
    endereco:{
        type: db.Sequelize.STRING
    
    },
    bairro:{
        type: db.Sequelize.STRING
    
    },
    cep:{
        type: db.Sequelize.STRING
    
    },
    cidade:{
        type: db.Sequelize.STRING
    
    },
    estado:{
        type: db.Sequelize.STRING
    
    },
    telefone:{
        type: db.Sequelize.STRING
    
    },
    celular:{
        type: db.Sequelize.STRING
    
    }
})


// Agendamentos.create({
//     nome:"Jeferson",
//     endereco: "AV aguia",
//     bairro: "São Miguel",
//     cep:"10",
//     cidade: "São Paulo",
//     estado:"SP",
//     telefone:"989898760",
//     celular:"878798289"
// })

module.exports = Agendamentos