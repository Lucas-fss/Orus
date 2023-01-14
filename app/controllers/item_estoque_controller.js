var item = require('../models/connection.js');
con = new item();
con.conector();
query(function(rows){
    var html = '';
    html += "<td>id</td>";
    html += "<td>Item</td>";
    html += "<td>Fabricante</td>";
    html += "<td>Fornecedor</td>";
    html += "<td>Categoria</td>";
    html += "<td>Codigo de Barras</td>";
    html += "<td>Valor de Compra</td>";
    html += "<td>Valor de Venda</td>";
    html += "<td>DE dos Dispositivos</td>";
    rows.forEach(function(row){
        html += '<tr>';
        html += '<td>';
        html += row.nome_item;
        html += '</td>';
        html += '<td>';
        html += row.fabricante;
        html += '</td>';
        html += '<td>';
        html += row.fornecedor;
        html += '</td>';
        html += '<td>';
        html += row.categoria;
        html += '</td>';
        html += '<td>';
        html += row.qnt;
        html += '</td>';
        html += '<td>';
        html += row.codigo_barras;
        html += '</td>';
        html += '<td>';
        html += row.valor_compra;
        html += '</td>';
        html += '<td>';
        html += row.valor_venda;
        html += '</td>';
        html += '<td>';
        html += row.de_dispositivo;
        html += '</td>';
        html += '</tr>';
        console.log(row);
    });

    document.querySelector('#table > tbody').innerHTML = html;
});

function query(callback){

    $query = 'SELECT * FROM `item_estoque` LIMIT 10';

    con.connection.query($query, function(err, rows, fields) {
        if(err){
            console.log("An error ocurred performing the query.");
            console.log(err);
        }

        callback(rows);
    });
}