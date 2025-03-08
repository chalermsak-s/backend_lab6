import { PrismaClient } from '@prisma/client'
import { Borrowing } from '../models/borrowing'
const prisma = new PrismaClient()

export const getAllBorrowings = async (): Promise<Borrowing[]> => {
  return await prisma.borrowing.findMany()
}

export const getBorrowingById = async (
  id: number
): Promise<Borrowing | null> => {
  return await prisma.borrowing.findUnique({
    where: { id },
  })
}

export const returnBook = async (id: number): Promise<Borrowing | null> => {
  const borrowing = await prisma.borrowing.findUnique({
    where: { id },
  })

  if (!borrowing) {
    throw new Error('Borrowing not found')
  }

  return await prisma.borrowing.update({
    where: { id },
    data: {
      returnedAt: new Date(),
    },
    select: {
      id: true,
      memberId: true,
      bookId: true,
      borrowedAt: true,
      dueDate: true,
      returnedAt: true,
    },
  })
}

export const getBorrowingByBook = async (
  bookId: number
): Promise<Borrowing[]> => {
  return await prisma.borrowing.findMany({
    where: { bookId },
  })
}

export const getBorrowingByMember = async (
  memberId: number
): Promise<Borrowing | null> => {
  return (await prisma.borrowing.findMany({
    where: { memberId },
    include:{
        member:{
            select:{
                firstName: true,
                lastName: true,
                phone: true,
            }
        },
        book:{
            select:{
                title: true,
                isbn: true,
                category: true,
            }
        }
    }
  })) as Borrowing | null
}

export const getBorrowingByAuthor = async (
    borrowingId: number
  ): Promise<Borrowing | null> => {
    return (await prisma.borrowing.findMany({
      where: { id: borrowingId },
      include: {
        member:{
            select:{
                firstName: true,
                lastName: true,
                phone: true,
            }
        },
        book: {
          select: {
            id: true,
            title: true,
            isbn: true,
            category: true,
            authorId: true,
            author: {
              select: {
                firstName: true,
                affiliation: true,
              },
            },
          },
        },
      },
    })) as Borrowing | null
  }

export const addBorrowing = async (
  borrowing: Borrowing
): Promise<Borrowing> => {
  if (!borrowing.memberId || !borrowing.bookId) {
    throw new Error('memberId and bookId are required')
  }
  return await prisma.borrowing.create({
    data: {
      memberId: borrowing.memberId,
      bookId: borrowing.bookId,
      borrowedAt: borrowing.borrowedAt || new Date(),
      dueDate: borrowing.dueDate || new Date(),
    },
    select: {
      id: true,
      memberId: true,
      bookId: true,
      borrowedAt: true,
      dueDate: true,
    },
  })
}
