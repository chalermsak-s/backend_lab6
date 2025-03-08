import { PrismaClient } from '@prisma/client'
import { createBooks } from './db/createBooks'
import { createMembers } from './db/createMemebers'
import { createBorrowings } from './db/createBorrowings'

const prisma = new PrismaClient()

async function mainRun() {
  await createBooks()
  await createMembers()
  await createBorrowings()
}
mainRun()
