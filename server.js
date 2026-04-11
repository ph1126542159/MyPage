import http from 'node:http'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const host = process.env.HOST || '0.0.0.0'
const port = Number(process.env.PORT || 5173)
const rootDir = path.dirname(fileURLToPath(import.meta.url))

const mimeTypes = {
  '.css': 'text/css; charset=utf-8',
  '.gif': 'image/gif',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.mp4': 'video/mp4',
  '.png': 'image/png',
  '.scss': 'text/x-scss; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain; charset=utf-8',
  '.webp': 'image/webp',
}

const resolveSafePath = (pathname) => {
  const normalized = pathname === '/' ? '/index.html' : pathname
  const rootCandidate = path.resolve(rootDir, `.${normalized}`)

  if (rootCandidate.startsWith(rootDir) && fs.existsSync(rootCandidate) && fs.statSync(rootCandidate).isFile()) {
    return rootCandidate
  }

  const publicCandidate = path.resolve(rootDir, 'public', `.${normalized}`)

  if (publicCandidate.startsWith(rootDir) && fs.existsSync(publicCandidate) && fs.statSync(publicCandidate).isFile()) {
    return publicCandidate
  }

  return path.resolve(rootDir, 'index.html')
}

const server = http.createServer((request, response) => {
  const method = request.method || 'GET'

  if (method !== 'GET' && method !== 'HEAD') {
    response.writeHead(405, { 'Content-Type': 'text/plain; charset=utf-8' })
    response.end('Method Not Allowed')
    return
  }

  try {
    const requestUrl = new URL(request.url || '/', `http://${request.headers.host || 'localhost'}`)
    const filePath = resolveSafePath(decodeURIComponent(requestUrl.pathname))
    const extname = path.extname(filePath).toLowerCase()
    const contentType = mimeTypes[extname] || 'application/octet-stream'
    const fileBuffer = fs.readFileSync(filePath)

    response.writeHead(200, {
      'Cache-Control': 'no-store',
      'Content-Length': fileBuffer.length,
      'Content-Type': contentType,
    })

    if (method === 'HEAD') {
      response.end()
      return
    }

    response.end(fileBuffer)
  } catch (error) {
    response.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' })
    response.end(`Server error: ${error.message}`)
  }
})

server.listen(port, host, () => {
  console.log(`Local site ready at http://127.0.0.1:${port}`)
  console.log(`LAN access available at http://localhost:${port}`)
})
