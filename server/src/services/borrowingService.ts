import { Borrowing } from '../models/borrowing'
import * as repo from '../repository/borrowingsRepositoryPrisma'

export async function getAllBorrowings(): Promise<Borrowing[]> {
  return await repo.getAllBorrowings()
}

export async function getBorrowingById(id: number): Promise<Borrowing | null> {
  return await repo.getBorrowingById(id)
}

export const getBorrowingByAuthor = async (
  borrowId: number
): Promise<Borrowing | null> => {
  return await repo.getBorrowingByAuthor(borrowId)
}

export const getBorrowingByBook = async (
  borrowId: number
): Promise<Borrowing[] | null> => {
  return await repo.getBorrowingByBook(borrowId)
}

export const getBorrowingByMember = async (
  meberId: number
): Promise<Borrowing | null> => {
  return await repo.getBorrowingByMember(meberId)
}

export async function addBorrowing(borrowing: Borrowing): Promise<Borrowing> {
  return await repo.addBorrowing(borrowing)
}

export async function returnBook(id: number): Promise<Borrowing | null> {
  return await repo.returnBook(id)
}
