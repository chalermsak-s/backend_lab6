import express, { Request, Response } from 'express'
import * as serv from '../services/memberService'
import type { Member } from '../models/member'
import dotenv from 'dotenv'
dotenv.config()
const router = express.Router()

// ดูข้อมูลสมาชิกทั้งหมด
router.get('/', async (req: Request, res: Response) => {
  const member = await serv.getAllMembers()
  if (member) {
    res.json(member)
  } else {
    res.status(404).json({ message: 'Member not found' })
  }
})

// ดูข้อมูลสมาชิกจาก ID
router.get('/:id', async (req: Request, res: Response) => {
  const id = parseInt(req.params.id)
  const member = await serv.getMemberById(id)
  if (member) {
    res.json(member)
  } else {
    res.status(404).json({ message: 'Member not found' })
  }
})

// // สมาชิกนี้เคยยืมหนังสืออะไรบ้าง
router.get('/book/:id', async (req: Request, res: Response) => {
  const id = parseInt(req.params.id)
  const borrow = await serv.getMemberByBorrow(id)
  if (borrow) {
    res.json(borrow)
  } else {
    res.status(404).json({ message: 'Member Borrow not found' })
  }
})

export default router
