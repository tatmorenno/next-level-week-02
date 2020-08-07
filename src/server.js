//Servidor
const express = require('express')
const server = express()
const { pageLanding, pageStudy, pageGiveClasses } = require('./pages')


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