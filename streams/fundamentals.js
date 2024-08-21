// Netflix & Spotify

// Importação de clientes via CSV (excel)
// 1gb - 1.000.000
// POST /upload import.csv

// 10Mb/s - 100s

// 100s -> Inserção no banco de dados

// 10Mb/s -> 10.000

// Readable Streams / Writable Streams

// process.stdin
//     .pipe(process.stdout)

import { Readable } from 'node:stream'

class OneToHundredStream extends Readable {
    index = 1

    _read() {
        const i = this.index++

        setTimeout(() => {
            if (i > 100) {
                this.push(null)
            } else {
                const buf = Buffer.from(i.toString())
                this.push(buf)
            }
        }, 1000)
    }
}

new OneToHundredStream().pipe(process.stdout)