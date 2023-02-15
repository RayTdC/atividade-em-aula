import {bdUsuarios} from '../bd.js'

class usuarioController {
    static rotas(app){
        // Rota para o recurso usuario
        app.get('/', usuarioController.listar)
        app.get('email/email:', usuarioController.buscarPorEmail)
        app.post('/', usuarioController.inserir)
    }

    static listar(req, res){
        const usuario = bdUsuarios
        res.send(usuario)
  
    }

    static inserir(req, res){
        res.send('Rota ativada com POST e recurso usuario: usuario deve ser inserido')
        // Console log do corpo da requisição
        console.log(req.body)        
    }

    static buscarPorEmail(req, res){
        const usuario = bdUsuarios.find(usuario => usuario.email === req.params.email)
        if(!usuario){
            res.status(404).send('Usuário não encontrado')
        }
        res.send(usuario)
    }
}

export default usuarioController