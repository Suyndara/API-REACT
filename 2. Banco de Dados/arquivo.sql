create database TrabalhoBruno;

use TrabalhoBruno;

create table CellFinder (
	CellFinder_id			int primary key auto_increment,
    Modelo					varchar(100),
    Marca					varchar(100),
    Ano	 					date,
    Disponivel				boolean
);


insert into CellFinder ( Modelo, Marca, Ano, Disponivel ) 
                values ( ?, ?, ?, ? );


 select	CellFinder_id,
		Modelo,
        Marca,
        Ano,
        Disponivel
   from	CellFinder;
   
   
   
   
 select	CellFinder_id,
		Modelo,
        Marca,
        Ano,
        Disponivel
   from	CellFinder
  where	Modelo like ?;