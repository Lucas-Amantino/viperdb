const fs = require('fs');

const viperdb = {
    NewDataBase: function (dbpath,dbname)
    {
        fs.writeFile(dbpath+'/'+dbname+'.db', '',(err)=>
        {
            if(err)
            {
                return false;
            }else
            {
                return true;
            }
        });
    },
    NewTable : function (dbpath,dbname,tablename)
    {
        let path = dbpath+'/'+dbname+'.db';
        let db = fs.readFileSync(path);
        tablename = tablename.replace(/\s+/g, '');
        fs.writeFileSync(path, db+'\n'+tablename+'[]');
    },
    AddData : function (dbpath,dbname,tablename,data)
    {
        let path = dbpath+'/'+dbname+'.db';
        let db = fs.readFileSync(path).toString();
        let dbs= '';
        tablename = tablename.replace(/\s+/g, '');
        data = data.replace(/\s+/g, '');
        if(data.indexOf('{') ==-1 || data.indexOf('}') == -1 || data.indexOf(':') == -1)
        {
            return false;
        }
        if(db.indexOf(tablename) == -1)
        {
            return false;
        }else
        {
            let pos = db.indexOf(tablename);
            let nms = tablename.length
            for(let i=0;i<pos+nms+1;i++)
            {
                dbs+=db[i];
            }
            dbs += data;
            let size = pos+nms+data.length;
            let size2 = pos+nms+1;
            for(let i=size2;i<db.length;i++)
            {
                dbs+=db[i];
            }
            fs.writeFileSync(dbpath+'/'+dbname+'.db', dbs);
        }
    },
    GetData : function (dbpath,dbname,tablename,datareq)
    {
        let path = dbpath+'/'+dbname+'.db';
        let db = fs.readFileSync(path).toString();
        if(db.indexOf(tablename) == -1 || db.indexOf(datareq) == -1)
        {
            return false;
        }else
        {
            let dbs = '';
            let reqpos = db.indexOf(datareq)+datareq.length+1;
            for(let i=reqpos;i<db.length;i++)
            {
                if(db[i]=='}')
                {
                    break;
                }else
                {
                    dbs += db[i];
                }
            }
            return dbs;
        }
    },
    GetTable : function (dbpath,dbname,tablename)
    {
        let path = dbpath+'/'+dbname+'.db';
        let db = fs.readFileSync(path).toString();
        if(db.indexOf(tablename) == -1)
        {
            return false;
        }else
        {
            let dbs = '';
            let reqpos = db.indexOf(tablename)+tablename.length+1;
            for(let i=reqpos;i<db.length;i++)
            {
                if(db[i]==']')
                {
                    break;
                }else
                {
                    dbs += db[i];
                }
            }
            return dbs;
        }
    },
    RemoveTable : function (dbpath,dbname,tablename)
    {
        let path = dbpath+'/'+dbname+'.db';
        let db = fs.readFileSync(path).toString();
        if(db.indexOf(tablename) == -1)
        {
            return false;
        }else
        {
            let dbs = '';
            let reqpos = db.indexOf(tablename);
            for(let i=reqpos;i<db.length;i++)
            {
                dbs += db[i];
                if(db[i]==']')
                {
                    break;
                }
            }
            fs.writeFileSync(dbpath+'/'+dbname+'.db', db.replace(dbs,''));
        }
    },
    RemoveData : function (dbpath,dbname,tablename,datareq)
    {
        let path = dbpath+'/'+dbname+'.db';
        let db = fs.readFileSync(path).toString();
        if(db.indexOf(tablename) == -1 || db.indexOf(datareq) == -1)
        {
            return false;
        }else
        {
            let dbs = '';
            let reqpos = db.indexOf(datareq);
            for(let i=0;i<reqpos;i++)
            {
                dbs += db[i];
            }
            let conf = false;
            for(let i=reqpos;i<db.length;i++)
            {
                if(db[i-1] == '}')
                {
                    conf = true;
                }
                if(conf)
                {
                    dbs += db[i];
                }
            }
            fs.writeFileSync(dbpath+'/'+dbname+'.db', dbs);
        }
    },
    RemovedataBase : function (dbpath,dbname)
    {
        fs.unlinkSync(dbpath+'/'+dbname+'.db');
    },
    FileExist: function (dbpath,dbname)
    {
        return fs.existsSync(dbpath+'/'+dbname+'.db');
    }
}

module.exports = viperdb