create database mydb;
use mydb;

create table sensors (
id int not null auto_increment primary key,
seq int(10) unsigned,
device decimal(4,0) unsigned,
unit decimal(2,0) unsigned,
type char(1),
value decimal(10,4),
ip char(15),
time TIMESTAMP DEFAULT CURRENT_TIMESTAMP);

CREATE USER 'me'@'localhost' IDENTIFIED BY 'mypassword';
GRANT ALL PRIVILEGES ON mydb.* TO 'me'@'localhost';
FLUSH PRIVILEGES;
