class Connection{
    constructor(){
        this.mysql = require('mysql');
        this.connection = this.mysql.createConnection({
            host     : 'localhost',
            user     : 'root',
            password : '33218600Mm#', 
            database : 'Orus'
        });
    }
    conector = () => {
        this.connection.connect(function(err){
            if(err){
                console.log(err.fatal);
                console.log(err.code);
            }
        });
    }
}
module.exports = Connection;