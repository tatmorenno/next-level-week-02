//Dados
const proffys = [
    {
        name:"Diego Fernandes",
        avatar:"https://avatars.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp:"123456789",
        bio:"Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratórios e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject:"Química",
        cost:"20" ,
        weekday:[0] ,
        time_from:[720] ,
        time_to:[1220]
    },
    {
        name:"Tatiana Moreno",
        avatar:"https://avatars2.githubusercontent.com/u/23190643?s=460&u=7ee8575090545bf843fe138ef2f37ad0fb277697&v=4",
        whatsapp:"81999999999",
        bio:"Entusiasta das melhores tecnologias de programação avançada.<br><br>Apaixonada por trazer ideias para a vida real e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject:"Programação",
        cost:"20" ,
        weekday:[0],
        time_from:[720] ,
        time_to:[1220]
    }
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação Física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

//Funcionalidades

function getSubject(subjectNumber) {
    const position = +subjectNumber - 1 
    return subjects[position]
}

function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    const filters  = req.query
    return res.render("study.html",{ proffys, filters, subjects, weekdays })
}

function pageGiveClasses(req, res) {
    const data = req.query

    const isNotEmpty = Object.keys(data).length > 0
    if (isNotEmpty) {
        data.subject = getSubject(data.subject)
        proffys.push(data)
    return res.redirect("/study")
        
    }
    return res.render("give-classes.html", {subjects, weekdays})
}

//Servidor
const express = require('express')
const server = express()

//Configuração do Nunjucks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views',{
    express: server,
    noCache: true,

})

// Início e configuração do servidor
server
//Configuração de arquivos estáticos (CSS, scripts, imagens...)
.use(express.static("public"))
// Rotas da aplicação
.get("/", pageLanding)

.get("/study", pageStudy)

.get("/give-classes", pageGiveClasses)
// Start do servidor
.listen(5500)