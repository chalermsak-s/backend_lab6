import { Author } from './author'
import { Borrowing } from './borrowing'

export interface Book {
  id: number
  title: string
  isbn: string
  category: string
  authorId: number | null
  author?: Author
  borrowings?: Borrowing[]
}

export interface PageBook{
  count: number
  books: Book[]
}