import csv from 'csv-parser';
import fs from 'fs';

export const csvParser = async (path)=>{
    const rowsData = [];
    return new Promise((res,rej) => {
        fs.createReadStream(path)
            .pipe(csv())
                .on('data',(data)=>{
                    rowsData.push(data);
                }).on('end',()=>{
                    console.log("Parsing Success");
                    return res(rowsData);
            });
    });
}

