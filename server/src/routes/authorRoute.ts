import express, { Request, Response } from 'express'
import * as serv from '../services/authorService'
import type { Author } from '../models/author'
import type { Book } from '../models/book'
import dotenv from 'dotenv'
dotenv.config()
const router = express.Router()

// ดูข้อมูลผู้แต่งทั้งหมด
router.get('/', async (req: Request, res: Response) => {
  const author = await serv.getAllAuthors()
  if (author) {
    res.json(author)
  } else {
    res.status(404).json({ message: 'Author not found' })
  }
})

// ดูข้อมูลผู้แต่งจาก ID
router.get('/:id', async (req: Request, res: Response) => {
  const id = parseInt(req.params.id)
  const author = await serv.getAuthorById(id)
  if (author) {
    res.json(author)
  } else {
    res.status(404).json({ message: 'Author not found' })
  }
})

// หนังสือนี้แต่งโดยใคร และผู้แต่งมีผลงานอะไรบ้าง
router.get('/book/:id', async (req: Request, res: Response) => {
  const id = parseInt(req.params.id)
  const authorBook = await serv.getAuthorByBook(id)
  if (authorBook) {
    res.json(authorBook)
  } else {
    res.status(404).json({ message: 'Author By Book not found' })
  }
})

// ดูว่ามีใครเป็นผู้แต่งหนังสือบ้างจากข้อมูลนี้
router.get('/:id', async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    const author = await serv.getAuthorById(id)
    if (author) {
      res.json(author)
    } else {
      res.status(404).json({ message: 'Author not found' })
    }
  })

// ดูผู้แต่งและหนังสือในสำนักพิมพ์ที่สังกัด
router.get('/affiliation/:id', async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    const affiliation = await serv.getAffiliationByAuthor(id)
    if (affiliation) {
      res.json(affiliation)
    } else {
      res.status(404).json({ message: 'Affiliation not found' })
    }
  })

// เพิ่มข้อมูลผู้แต่ง พร้อมหนังสือ
router.post('/', async (req: Request, res: Response) => {
  const { author, book } = req.body
  const createdAuthor = await serv.addAuthor(author as Author, book as Book)
  res.json(createdAuthor)
})

export default router
