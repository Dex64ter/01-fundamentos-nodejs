import http from 'node:http'
import { Transform } from "node:stream"

class InverseNumberStream extends Transform {
    _transform(chunk, _, callback) {
        const number = Number(chunk.toString()) * -1

        console.log(number)

        callback(null, Buffer.from(number.toString()))
    }
}

// req => Readable
// res => Writable

const server = http.createServer( async (req, res) => {
    let buffers = []

    for await (const chunk of req) {
        buffers.push(chunk)
    }

    const fullSreamContent = Buffer.concat(buffers).toString()

    console.log(fullSreamContent)

    return res.end(fullSreamContent)

    // return req
    //     .pipe(new InverseNumberStream())
    //     .pipe(res)
})

server.listen(3334)