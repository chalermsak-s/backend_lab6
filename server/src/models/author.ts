import { Book } from './book'
export interface Author {
  id?: number
  firstName?: string | null
  lastName?: string | null
  affiliation?: string | null
  books?: Book[]
}
