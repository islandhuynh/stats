// for node modules in typescript, do npm install @types/node
import fs from 'fs';

export class CsvFileReader {
    data: string[][] = [];

    constructor( public filename: string) {}

    read(): void {
        this.data = fs.readFileSync(this.filename, {
            // encoding utf-8 returns a string for us
            encoding: 'utf-8'
        })
        .split('\n')
        .map(
            (row:string): string[] => {
            return row.split(',');
            }
        )
    }
}