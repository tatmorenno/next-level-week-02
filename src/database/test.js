const Database = require('./db')
const createProffy = require('./createProffy')
Database.then(async (db) => {
    // Inserção de dados

    proffyValue = {
        name:"Tatiana Moreno",
        avatar:"https://avatars2.githubusercontent.com/u/23190643?s=460&u=7ee8575090545bf843fe138ef2f37ad0fb277697&v=4",
        whatsapp:"81999999999",
        bio:"Entusiasta das melhores tecnologias de programação avançada.<br><br>Apaixonada por trazer ideias para a vida real e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    }

    classValue = {
        subject:"Programação",
        cost:"20",
       
    }

    classScheduleValues = [
        //class_id virá pelo banco de dados automaticamente
        {
        weekday: 1,
        time_from:720,
        time_to:1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
]

   // await createProffy(db, {proffyValue, classValue, classScheduleValues})

        //Consultar dados inseridos

        // todos os proffys

        const selectedProffys = await db.all("SELECT * FROM proffys")
        console.log(selectedProffys)

})