const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'database-hrms1.c0sl004lok1n.eu-west-2.rds.amazonaws.com',
  user: 'Aleeha',
  password: 'Yehmeridbhai',
  port:'3306',
  database: 'HRMS'
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

connection.query('SELECT *from HRUSER', (err,rows) =>{
	if(err)
		throw err;
	console.log('Data received from db: ');
	console.log(rows);
})

exports.login = async function(req,res){
  console.log(req.body);
    var username= req.body.username;
    var password = req.body.password;
    console.log(username, password);
    connection.query('SELECT * FROM HRUSER WHERE full_name= ?',[username], async function (error, results, fields) {
      if (error) {
        console.log(error);
        res.send({
          "code":400,
          "failed":"error ocurred"
        })
      }else{
        if(results.length >0){
          const comparison = password === results[0].user_password;
          if(comparison){
              res.send({
                "code":200,
                "success":"login sucessfull"
              })
          }
          else{
            res.send({
                 "code":204,
                 "success":"Email and password does not match"
            })
          }
        }
        else{
          res.send({
            "code":206,
            "success":"Email does not exits"
              });
        }
      }
      });
  }
