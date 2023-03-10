 import db from "./db.js";

 const USUARIOS_SCHEMA = `
 CREATE TABLE IF NOT EXISTS "USUARIOS" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(64),
    "EMAIL" varchar(64),
    "SENHA" varchar(64)
 );`;

 const ADD_USUARIOS_DATA = `
 INSERT INTO USUARIOS  (ID, NOME, EMAIL, SENHA)
 VALUES
      (1, 'Eugênio oliveira', 'eugenio.oliveira@bol.com.br', '12345678')
      (2, 'Olívia Ribeiro', 'olivia.ribeiro@gmail.com.br', '34567890')
      (3, 'Mirtes Faria Lima', 'mirtes_fl@yahoo.com.br', '45678901')
      `

      function criaTabelaUsr(){
        db.run(USUARIOS_SCHEMA, (error) => {
            if (error) console.log("Erro ao criar tabela de usuários");
        });
      }
      
      function populaTabelaUsr(){
        db.run(ADD_USUARIOS_DATA, (error) => {
            if (error) console.log("Erro ao popular tabela de usuários");
        });
      }

      const TAREFAS_SCHEMA = `
      CREATE TABLE IF NOT EXISTS TAREFAS (
        ID INTEGER PRIMARY KEY AUTOINCREMENT,
        TITULO VARCHAR(64),
        DESCRICAO TEXT,
        STATUS VARCHAR(32),
        ID_USUARIO INTEGER,
        FOREIGN KEY(ID_USUARIO) REFERENCES USUARIOD(ID)
      );`;

      const ADD_TAREFAS_DATA = `
      INSERT INTO TAREFAS (TITULO, DESCRICAO, STATUS, DATACRIACAO, ID_USUARIO)
      VALUES 
             ('Yoga', 'Fazer yoga segunda e quarta', 'Continuo', '2021-01-10', 2),
             ('Médico', 'Consulta com Dr. Ayrton sexta', 'TODO', '2021-01-13', 1),
             ('Pagar contas', 'Pagar boletos de água e luz', 'DOING', '2021-01-02', 2),
             ('Mercado', 'Pegar lista na geladeira e fazer compras', 'TODO', '2021-01-08', 2),
             ('Dentista', 'Consulta com Dra Andrea sexta', 'TODO', '2021-01-11', 1),
             ('Pagar financiamento carro', 'Pagar parcela do mês do financiamento', 'Contínuo', '2021-01-05', 3)
             ;`;

         function criaTarefaTabelas(){
           db.run(TAREFAS_SCHEMA, (error) => {
               if (error) console.log("Erro ao criar tabela de Tarefas");
           });
         } 
         function populaTabelaTarefas(){
            db.run(ADD_TAREFAS_DATA, (error) => {
                if (error) console.log("Erro ao popular tabela de Tarefas");
            });
          }  
          
          db.serialize( ()=> {
           criaTabelaUsr();
           populaTabelaUsr();
           criaTabelaUsr();
           populaTabelaTarefas();
          });


       