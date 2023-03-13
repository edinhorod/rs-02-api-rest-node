/** @format */

import fastify from 'fastify'
import cookie from '@fastify/cookie'
// import crypto from 'node:crypto'
import { transactionRoutes } from './routes/transactions'

export const app = fastify()

app.register(cookie)

// MIDDLEWARE GLOBAL
app.addHook('preHandler', async (request) => {
  console.log(`[${request.method}] ${request.url}`)
})

app.register(transactionRoutes, {
  prefix: 'transactions',
})
