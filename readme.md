# Viper data base

This Module makes it possible to store data on the user's pc or on the server itself.

## Installation
` npm install viperdb --save `

# How to use

## DataBases

In viperdb we organize our data into tables and tables in databases, the following example shows how to create a database.

``` javascript
const viper = require("viperdb");

//             Database path   Database name
viper.NewDataBase('./storage', 'appconfig') 
```

## table

Tables are essential for data storage, to create a table you need to create a database first.
Example of creating a table:

```javascript

const viper = require("viperdb");

viper.NewDataBase('./storage', 'appconfig') 
//         Database path   Database name  table name
viper.NewTable('./storage', 'appconfig', 'userprefs')

```

## Data

We can store data in tables, so to store new data we need a table.
Example of how to save data:


```javascript

const viper = require("viperdb");

viper.NewDataBase('./storage', 'appconfig') 

viper.NewTable('./storage', 'appconfig', 'userprefs')
//         Database path   Database name  table name      data
viper.AddData('./storage', 'appconfig', 'userprefs', '{name:shadow}')

```

Note: you can only store data in JSON format inside a string!

```javascript
    viper.Adata('databasepath', 'databasename', 'tablename','{dataname:datavalue}')
```
