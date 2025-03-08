import { Borrowing } from './borrowing'
export interface Member {
  id?: number
  firstName?: string
  lastName?: string
  phone?: string
  borrowings?: Borrowing[]
}
