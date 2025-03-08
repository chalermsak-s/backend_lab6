import express, { Request, Response } from 'express'
import * as serv from '../services/borrowingService'
import type { Borrowing } from '../models/borrowing'
import type { Book } from '../models/book'
import dotenv from 'dotenv'
dotenv.config()
const router = express.Router()

// ดูข้อมูลผู้แต่งทั้งหมด
router.get('/', async (req: Request, res: Response) => {
  const borrowing = await serv.getAllBorrowings()
  if (borrowing) {
    res.json(borrowing)
  } else {
    res.status(404).json({ message: 'Borrowing not found' })
  }
})

// ดูข้อมูลจาก Borrow ID
router.get('/:id', async (req: Request, res: Response) => {
  const id = parseInt(req.params.id)
  const borrowing = await serv.getBorrowingById(id)
  if (borrowing) {
    res.json(borrowing)
  } else {
    res.status(404).json({ message: 'Borrowing by ID not found' })
  }
})
// getBorrowingByBook getBorrowingByMember
router.get('/book/:id', async (req: Request, res: Response) => {
  const id = parseInt(req.params.id)
  const borrowing = await serv.getBorrowingByBook(id)
  if (borrowing) {
    res.json(borrowing)
  } else {
    res.status(404).json({ message: 'Borrowing By Book ID not found' })
  }
})

// หนังสือนี้แต่งโดยใคร และผู้แต่งมีผลงานอะไรบ้าง
router.get('/detail/:id', async (req: Request, res: Response) => {
  const id = parseInt(req.params.id)
  const borrowing = await serv.getBorrowingByAuthor(id)
  if (borrowing) {
    res.json(borrowing)
  } else {
    res.status(404).json({ message: 'Borrow Book Detail not found' })
  }
})

// สมาชิกคนนี้มีประวัติยืมอะไรบ้าง
router.get('/member/:id', async (req: Request, res: Response) => {
  const id = parseInt(req.params.id)
  const borrowing = await serv.getBorrowingByMember(id)
  if (borrowing) {
    res.json(borrowing)
  } else {
    res.status(404).json({ message: 'Member Borrow Book not found' })
  }
})

//เพิ่มข้อมูลผู้แต่ง พร้อมหนังสือ
router.post('/add', async (req: Request, res: Response) => {
  const borrowAdd = req.body;
  try {
    const createdBorrow = await serv.addBorrowing(borrowAdd);
    res.status(201).json(createdBorrow); // ใช้ 201 Created สำหรับการสร้างข้อมูลใหม่
  } catch (error) {
    console.error("Error adding borrowing:", error);
    res.status(500).json({ error: "Failed to add borrowing" }); // ส่งข้อความผิดพลาดที่เหมาะสม
  }
});


export default router
