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
        subject: 1,
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
        // console.log(selectedProffys)

        // consultar as classes de um proffy e trazer juntos os dados dele

        const selectClassesAndProffys = await db.all(`

        SELECT classes.*,proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
        
        `)

        // console.log(selectClassesAndProffys)

        const selectClassesSchedules = await db.all(`
            SELECT class_schedule.*
            FROM class_schedule
            WHERE class_schedule.class_id = "1"
            AND class_schedule.weekday = "0"
            AND class_schedule.time_from <= "1300"
            AND class_schedule.time_to > "1300"
        `)

        // console.log(selectClassesSchedules)



})