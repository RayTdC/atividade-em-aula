import {bdTarefas} from '../bd.js'

class tarefaController {
    static rotas(app){
        // Rota para o recurso tarefa
        app.get('/', tarefaController.listar)
        app.post('/', tarefaController.inserir)
    }

    static listar(req, res){
        const tarefa = bdTarefas
        res.send(tarefas)
    }

    static inserir(req, res){
        res.send('Rota ativada com POST e recurso tarefa: tarefa deve ser inserida')
        // Console log do corpo da requisição
        console.log(req.body)
    }
}

export default tarefaController