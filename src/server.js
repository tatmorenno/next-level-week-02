// Servidor
const express = require('express')
const server = express()
const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages')


// Configuração do Nunjucks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', { express: server, noCache: true, })

// Início e configuração do servidor
server
// Receber os dados do req.body

.use(express.urlencoded({extended: true}))

// Configuração de arquivos estáticos (CSS, scripts, imagens...)
.use(express.static("public"))
// Rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
// Start do servidor
.listen(5500)