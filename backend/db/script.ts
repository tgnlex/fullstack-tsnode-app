import {dbTable} from './scripts/create.ts';


dbTable("posts", 
`
id INTEGER PRIMARY KEY AUTOINCREMENT 
title VARCHAR NOT NULL
content VARCHAR NOT NULL
`
);
