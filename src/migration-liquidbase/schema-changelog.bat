
set JAVA_OPTS=-Duser.name=dhalder
set SHORT_NAME=building
 
liquibase ^
--url="jdbc:mysql://sisal-qualif-mysql-database.cnurtu87wy5p.eu-west-1.rds.amazonaws.com:3306/%SHORT_NAME%" ^
--username=sisalGameloft ^
--password=gameloft123456789 ^
--changelog-file=%SHORT_NAME%-schema.mysql.sql ^
generate-changelog