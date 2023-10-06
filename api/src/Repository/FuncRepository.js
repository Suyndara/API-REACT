import conexao from "./Connection.js";



export async function AdicionarCel(celular) {
    const comando = `
            insert into CellFinder ( Modelo, Marca, Ano, Disponivel ) 
                            values ( ?, ?, ?, ? )
    `;

    const [ dados ] = await conexao.query(comando, [
        celular.modelo,
        celular.marca,
        celular.ano,
        celular.disponivel
    ]);

    celular.id = dados.insertId
    return celular;
};





export async function Consultar(modelo) {
    const comando = `
        select	    CellFinder_id,
                    Modelo,
                    Marca,
                    Ano,
                    Disponivel
        from	    CellFinder
        where	    Modelo like ?
        `;

    const [ dados ] = await conexao.query(comando, [
        '%' + modelo + '%'
    ]);

    return dados;
};





export async function Buscar() {
    const comando = `
        select	    CellFinder_id,
                    Modelo,
                    Marca,
                    Ano,
                    Disponivel
        from	    CellFinder
        `;

    const [ dados ] = await conexao.query(comando);
    return dados;
};







export async function Deletar(id) {
    const comando = `
        delete from CellFinder 
              where CellFinder_id = ?
    `;

    const [ dados ] = await conexao.query(comando, [id]);
    return dados.affectedRows;
};




export async function Alterar(id, item) {
    const comando = `
        update  CellFinder
        set 	Modelo = ?,
                Marca  = ?,
                Ano    = ?,
                Disponivel	= ?
        where	CellFinder_id = ?
    `;

    const [ dados ] = await conexao.query(comando, [
        item.modelo,
        item.marca,
        item.ano,
        item.disponivel,
        id
    ]);

    return dados.affectedRows;
};






export async function BuscarPorID(id) {
    const comando = `
        select 	    CellFinder_id,
                    Modelo,
                    Marca,
                    Ano,
                    Disponivel
        from	    CellFinder
        where	    CellFinder_id = ?
    `;

    const [ dados ] = await conexao.query(comando, [id]);
    return dados[0];
}