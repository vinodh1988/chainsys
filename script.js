var db=openDatabase('test','1.0','',3*1024*1024);

function tableCreate(){
    db.transaction(
      function(tx){
          tx.executeSql("create table if not exists strings(string  primary key)");
      }
    )
}

function insertString(n){
    db.transaction(
       function(tx){
        
    tx.executeSql("insert into strings(string) values(?)",[n]);
       }
    );
}

function getAll(){
    db.transaction(
    function(tx){
        tx.executeSql("select * from strings",[],function(tx,rs){
            for(let x=0;x<rs.rows.length;x++)
                {
            console.log(rs.rows.item(x).string);
                }
        })
    });
}
//insertString("Brick!!!");
tableCreate();
getAll();