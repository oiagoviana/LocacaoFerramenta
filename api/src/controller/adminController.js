import { alterarImagem, atualizarProduto, deletarProduto, inserirProduto, listarCategoria, listarPorId, listarPorNome, listarProduto, login } from '../repository/adminRepository.js';
import { Router } from 'express';
import multer from 'multer'


const server = Router();
const upload = multer({dest: 'storage/imagensProduto'})


server.post('/admin/login', async (req, resp) => {
    try {
        const { email, senha } = req.body;

        const resposta = await login(email, senha);
        if (!resposta) {
            throw new Error("Credenciais inválidas");
        }

        resp.send(resposta);
    } catch (err) {
        resp.status(401).send({
            erro: err.message
        })
    }
})


server.post('/admin/produto', async (req, resp) => {
    try {
        const novoProduto = req.body;

        console.log(novoProduto);

        
       
        const produtoInserido = await inserirProduto(novoProduto);

        resp.send(produtoInserido);


    } catch (err) {
        resp.status(401).send({
            erro: err.message
        })
    }
})

server.delete('/admin/produto/:id', async (req, resp) => {
    try {
        const id = req.params.id;

        await deletarProduto(id);

        resp.status(204).send();
        
    } catch(err){
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.put('/admin/produto/:id', async (req, resp) => {
    try{
        const { id } = req.params;
        const produto = req.body;


        const resposta = await atualizarProduto(id, produto);
        if (resposta != 1)
        throw new Error("Produto não pode ser alterado!")
    else
        resp.status(204).send();

    } catch(err) {
        resp.status(401).send({
            erro:err.message
        })
    }
})


server.put('/admin/produto/:id/imagem', upload.single('imagem'), async (req, resp) => {
    try{    
        if(!req.file){
            throw new Error("Escolha a imagem do produto");
        }
        const { id } = req.params;
        const imagem = req.file.path;

        const resposta = await alterarImagem(imagem,id);
        if(resposta != 1) 
			throw new Error('A imagem não pôde ser salva.');


        resp.status(204).send();

    } catch(err){
        resp.status(401).send({
            erro: err.message
        })
    }
})

server.get('/admin/categoria', async (req, resp) => {
    try{
        const resposta = await listarCategoria();
        resp.send(resposta);
        
    } catch(err){
        resp.status(401).send({
            erro: err.message
        })
    }
})

server.get('/admin/produto', async (req, resp) => {
    try{
        const resposta = await listarProduto();
        resp.send(resposta);
    } catch(err){
        resp.status(401).send({
            erro: err.message
        })
    }
})

server.get('/admin/produto/busca/:id', async (req, resp) => {
    try{
        const id = Number(req.params.id);
        const resposta = await listarPorId(id);

        if(!resposta){
            resp.status(404).send([]);
        } else{
            resp.send(resposta);
        }
        
    } catch(err){
        resp.status(401).send({
            erro: err.message
        })
    }
})

server.get('/admin/produto/busca', async (req, resp) => {
    try{
        const { nome } = req.query;
        const resposta = await listarPorNome(nome);

        if(!resposta){
            resp.status(404).send([]);
        } else{
            resp.send(resposta);
        }

    } catch(err){
        resp.status(401).send({
            erro: err.message
        })
    }
})


export default server;