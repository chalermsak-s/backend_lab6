import { Member } from './member'
import { Book } from './book'
export interface Borrowing {
  id?: number
  memberId?: number
  member?: Member
  bookId?: number
  book?: Book
  borrowedAt?: Date
  dueDate?: Date
  returnedAt?: Date | null
}
