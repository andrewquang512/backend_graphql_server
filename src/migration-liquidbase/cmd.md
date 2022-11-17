# Prerequisites
* AdoptOpenJDK: https://adoptopenjdk.net 
* Liquibase:  https://www.liquibase.com/download  
* mysql-connector-java-8.0.30.jar: https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.30/mysql-connector-java-8.0.30.jar  

# Install drivers
Place **mysql-connector-java-8.0.30.jar** in the **liquibase/internal/lib** directory.


# Uses  

## diff-changelog

https://docs.liquibase.com/commands/diff/diff-changelog.html  

### schema + data
```
liquibase ^
--url="jdbc:mysql://sisal-alpha-mysql-database.cudu5kutbveg.eu-west-1.rds.amazonaws.com:3306/sisal_liquibase" ^
--username=sisalGameloft ^
--password=gameloft123456789 ^
--referenceUrl="jdbc:mysql://sisal-alpha-mysql-database.cudu5kutbveg.eu-west-1.rds.amazonaws.com:3306/building?zeroDateTimeBehavior=convertToNull" ^
--referenceUsername=sisalGameloft ^
--referencePassword=gameloft123456789 ^
--changelog-file=building-schema-n-data.mysql.sql ^
--should-snapshot-data=true ^
diff-changelog
```

### schema
```
liquibase ^
--url="jdbc:mysql://sisal-alpha-mysql-database.cudu5kutbveg.eu-west-1.rds.amazonaws.com:3306/sisal_liquibase" ^
--username=sisalGameloft ^
--password=gameloft123456789 ^
--referenceUrl="jdbc:mysql://sisal-alpha-mysql-database.cudu5kutbveg.eu-west-1.rds.amazonaws.com:3306/building" ^
--referenceUsername=sisalGameloft ^
--referencePassword=gameloft123456789 ^
--changelog-file=building-schema.mysql.sql ^
diff-changelog
```

### data
```
liquibase ^
--url="jdbc:mysql://sisal-alpha-mysql-database.cudu5kutbveg.eu-west-1.rds.amazonaws.com:3306/sisal_liquibase" ^
--username=sisalGameloft ^
--password=gameloft123456789 ^
--referenceUrl="jdbc:mysql://sisal-alpha-mysql-database.cudu5kutbveg.eu-west-1.rds.amazonaws.com:3306/building?zeroDateTimeBehavior=convertToNull" ^
--referenceUsername=sisalGameloft ^
--referencePassword=gameloft123456789 ^
--changelog-file=building-data.mysql.sql ^
–-diffTypes=data ^
diff-changelog
```

## generate-changelog

https://docs.liquibase.com/commands/snapshot/generate-changelog.html   

### schema + data
```
liquibase ^
--url="jdbc:mysql://sisal-alpha-mysql-database.cudu5kutbveg.eu-west-1.rds.amazonaws.com:3306/building?zeroDateTimeBehavior=convertToNull" ^
--username=sisalGameloft ^
--password=gameloft123456789 ^
--changelog-file=building-schema-n-data.mysql.sql ^
--should-snapshot-data=true ^
generate-changelog
```

### schema
```
liquibase ^
--url="jdbc:mysql://sisal-alpha-mysql-database.cudu5kutbveg.eu-west-1.rds.amazonaws.com:3306/building" ^
--username=sisalGameloft ^
--password=gameloft123456789 ^
--log-level=debug ^
--changelog-file=building-schema.mysql.sql ^
generate-changelog
```

### data
```
liquibase ^
--url="jdbc:mysql://sisal-alpha-mysql-database.cudu5kutbveg.eu-west-1.rds.amazonaws.com:3306/building?zeroDateTimeBehavior=convertToNull" ^
--username=sisalGameloft ^
--password=gameloft123456789 ^
--log-level=debug ^
--changelog-file=building-data.mysql.sql ^
–-diffTypes=data ^
generate-changelog
```

## update

https://docs.liquibase.com/commands/update/update.html

```
liquibase ^
--url="jdbc:mysql://sisal-alpha-mysql-database.cudu5kutbveg.eu-west-1.rds.amazonaws.com:3306/sisal_liquibase" ^
--username=sisalGameloft ^
--password=gameloft123456789 ^
--hub-mode=off ^
--changelog-file=building-schema-n-data.mysql.sql update
```

## rollback 

https://docs.liquibase.com/commands/rollback/rollback-by-tag.html
https://docs.liquibase.com/commands/rollback/rollback-count.html

```
liquibase ^
--url="jdbc:mysql://sisal-alpha-mysql-database.cudu5kutbveg.eu-west-1.rds.amazonaws.com:3306/sisal_liquibase" ^
--username=sisalGameloft ^
--password=gameloft123456789 ^
--hub-mode=off ^
--changelog-file=building-err.mysql.sql update

liquibase ^
--url="jdbc:mysql://sisal-alpha-mysql-database.cudu5kutbveg.eu-west-1.rds.amazonaws.com:3306/sisal_liquibase" ^
--username=sisalGameloft ^
--password=gameloft123456789 ^
--hub-mode=off ^
--changelog-file=building-err.mysql.sql rollback-count 7
```

## execute-sql
https://docs.liquibase.com/commands/execute-sql.html

# Docs
* Install: https://docs.liquibase.com/install/tutorials/mysql.html
* Commands: https://docs.liquibase.com/commands/home.html  
* Parameters: https://docs.liquibase.com/parameters/command-parameters.html  
* https://docs.liquibase.com/concepts/changelogs/sql-format.html
