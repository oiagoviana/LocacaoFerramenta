import { con } from './connection.js'


export async function login(email, senha){
    const comando = 
    `SELECT     id_admin        id,
                nm_admin        nome,
                ds_email        email
       FROM     tb_admin
      WHERE     ds_email = ?
        AND     ds_senha = ?`;
    const [resposta] = await con.query(comando,[email,senha]);
    return resposta[0];
}


export async function inserirProduto(produto){
    const comando = 
    `INSERT INTO tb_produto	(id_admin, nm_produto, ds_produto, bt_status, dt_produto, id_produto_categoria )
          VALUES 			(?,?,?,?,curdate(),?);`
    
    const [resposta] = await con.query(comando, 
        [produto.admin,
         produto.nome,
         produto.descricacao,
         produto.statusProduto,
         produto.categoria]);

    produto.id = resposta.insertId;
    return produto;
}

export async function deletarProduto(id){
    const comando = 
    ` DELETE FROM tb_produto
            WHERE id_produto = ?`;

    const [resposta] = await con.query(comando, [id]);
    return resposta.affectedRows;
}

export async function atualizarProduto(id, produto){
    const comando = 
    `UPDATE     tb_produto
        SET     id_produto_categoria    = ?,
                nm_produto              = ?,
                ds_produto              = ?,
                bt_status               = ?,
                id_admin                = ?
      WHERE     id_produto              = ?`
    const [resposta] = await con.query(comando, 
        [produto.nome,
        produto.descricacao,
        produto.status,
        produto.categoria,
        produto.admin,
        id]);
    return resposta.affectedRows; 
}


export async function alterarImagem(imagem, id){
    const comando = 
    `UPDATE     tb_produto
        SET     img_produto = ?
      WHERE     id_produto  = ?`

    const [resposta] = await con.query(comando, [imagem, id]);
    return resposta.affectedRows;
}


export async function listarCategoria(){
    const comando = 
    `SELECT     id_produto_categoria    id,
                nm_categoria            categoria
       FROM     tb_produto_categoria`
    
    const [resposta] = await con.query(comando);
    return resposta;
}

export async function listarProduto(){
    const comando =
    `SELECT		id_produto		id,
                nm_produto		nome,
                ds_produto		descricacao,
                bt_status		status,
                date_format(dt_produto, '%d/%m/%Y') data,
                nm_categoria	categoria,
                img_produto		img,
                id_admin        admin
       FROM		tb_produto
 INNER JOIN		tb_produto_categoria on tb_produto.id_produto_categoria = tb_produto_categoria.id_produto_categoria;`

    const [resposta] = await con.query(comando);
    return resposta;

}



export async function listarPorNome(nome){
    const comando = 
    `SELECT		id_produto		id,
				nm_produto		nome,
				ds_produto		descricacao,
                bt_status		status,
                date_format(dt_produto, '%d/%m/%Y'),
                nm_categoria	categoria,
                img_produto		img,
                id_admin        admin
	   FROM		tb_produto
 INNER JOIN		tb_produto_categoria on tb_produto.id_produto_categoria = tb_produto_categoria.id_produto_categoria
      WHERE     nm_produto      like ?`

    const [resposta] = await con.query(comando, [`%${nome}%`]);
    return resposta;
}


export async function listarPorId(id){
    const comando = 
    `SELECT		id_produto		id,
				nm_produto		nome,
				ds_produto		descricacao,
                bt_status		status,
                date_format(dt_produto, '%d/%m/%Y'),
                nm_categoria	categoria,
                img_produto		img,
                id_admin        admin
	   FROM		tb_produto
 INNER JOIN		tb_produto_categoria on tb_produto.id_produto_categoria = tb_produto_categoria.id_produto_categoria
      WHERE     id_produto      = ?`

    const [resposta] = await con.query(comando, [id]);
    return resposta[0];
}