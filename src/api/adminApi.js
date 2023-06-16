import { API_URL } from './config';
import axios from 'axios';

const api = axios.create({
    baseURL: API_URL
})


export async function Login(email, senha){
    const resposta = await api.post('/admin/login', {
        email: email,
        senha: senha
    });
    return resposta.data;
}


export async function cadastrarProduto(nome, descricacao, statusProduto, categoria, admin){
    const resposta = await api.post('/admin/produto', {
        admin:admin,
        nome: nome,
        descricacao: descricacao,
        statusProduto: statusProduto,
        categoria:categoria
        
    });

    return resposta.data;
}

export async function deletarProduto(id){
    const resposta = await api.delete(`/admin/produto/${id}`);
    return resposta.data
}


export async function enviarImagemProduto(id, imagem){
    const formData = new FormData();
    formData.append('imagem', imagem);
    const resposta = await api.put(`/admin/produto/${id}/imagem`, formData, {
        headers: {
            "Content-Type": "multipart/form/data"
        },
    })
    return resposta.status;
}


export async function alterarProduto(id, nome, descricacao, status, categoria, admin){
    const resposta = await api.put(`/admin/produto/${id}`, {
        nome:nome,
        descricacao:descricacao,
        status:status,
        categoria:categoria,
        admin:admin
    })
    return resposta.data;
}

export async function listarCategoria(){
    const resposta = await api.get('/admin/categoria');
    return resposta.data;
}

export async function listarProdutos(){
    const resposta = await api.get('/admin/produto');
    return resposta.data;
}

export async function listarPorNome(nome){
    const resposta = await api.get(`/admin/produto/busca?nome=${nome}`);
    return resposta.data;
}

export async function listarProdutoPorId(id){
    const resposta = await api.get(`/admin/produto/busca/${id}`);
    return resposta.data;
}

export function buscarImagem(imagem) {
    return `${api.getUri()}/${imagem}`
}

export async function enviarEmail(nome,de,assunto,texto, telefone){
    const resposta = await api.post('/enviarEmail', {
        nome:nome,
        from:de,
        subject:assunto,
        text:texto,
        telefone:telefone,
        to:"franciscosantos29@gmail.com"
    })
    return resposta.data;
}