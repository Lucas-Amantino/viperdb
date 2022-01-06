# Viper data base

This Module makes it possible to store data on the user's pc.

## Installation

` npm install viperdb --save `

# How to use

## Create data

### DataBases

In viperdb we organize our data into tables and tables in databases, the following example shows how to create a database.

``` javascript
const viper = require("viperdb");

//             Database path   Database name
viper.NewDataBase('./storage', 'appconfig'); 
```

### table

Tables are essential for data storage, to create a table you need to create a database first.
Example of creating a table:

```javascript

const viper = require("viperdb");

viper.NewDataBase('./storage', 'appconfig');
//         Database path   Database name  table name
viper.NewTable('./storage', 'appconfig', 'userprefs');

```

### Data

We can store data in tables, so to store new data we need a table.
Example of how to save data:


```javascript

const viper = require("viperdb");

viper.NewDataBase('./storage', 'appconfig');

viper.NewTable('./storage', 'appconfig', 'userprefs');
//         Database path   Database name  table name      data
viper.AddData('./storage', 'appconfig', 'userprefs', '{name:shadow}');

```

Note: you can only store data in JSON format inside a string!

```javascript
    viper.AddData('databasepath', 'databasename', 'tablename','{dataname:datavalue}');
```

## Get data

### Taking data on a table

To get data from a table, you need to specify the database path, the database name, the name of the table where the data is located, and the name of the data.

```javascript
    viper.GetData('./storage', 'appconfig', 'userprefs', 'name');
```

The return will be a string containing the data.

` shadow `

### Taking a table from a database

It is also possible to receive data from a table with the "GetTable()" function

```javascript
    viper.getTable('./storage', 'appconfig', 'userprefs');
```

The return will be a string containing all the data stored in that table.

` {name:shadow} `

## Remove Data

In the same way that we can create databases and tables, it is also possible to delete them

### Delete Data

To remove data from a table, we use the "RemoveData()" function

```javascript
    viper.RemoveData('./storage', 'appconfig', 'userprefs', 'name');
```

### Delete Table

Using the "RemoveTable()" method we can delete a table at once.

```javascript
    viper.RemoveTable('./storage', 'appconfig', 'userprefs');
```

Be careful, keep in mind that by deleting a table, you will be losing all the data that was stored in it!

### Delete DataBase

If you want to delete the database at once, you can use the "RemoveDataBase()" method, but keep in mind that it will be lost forever.

```javascript
    viper.RemoveDataBase('./storage','appconfig');
```

## File Exist

The "FILEExist()" module returns a boolean, with it you can know if you have already created a database file.

```javascript

    var init = viper.FileExist('./storage','appconfig');

    init ? ... : ...

```

# Update Data

With the "DataUpdate()" module you can update the value of a data.

```javascript
//                   dbpath /  dbname / table name/ data name / inner value;                             
    viper.DataUpdate('./local','gameconfig','userdata','name','soul')
```