import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// ฟังก์ชันสำหรับสร้างตัวเลขสุ่ม
function getRandomInt(max: number) {
  return Math.floor(Math.random() * max) + 1
}

// ฟังก์ชันสำหรับสร้างวันที่สุ่ม
function getRandomDate() {
  const today = new Date()
  const pastDate = new Date(today.getTime() + 12 * 24 * 60 * 60 * 1000)
  const randomDate = new Date(
    pastDate.getTime() + Math.random() * (today.getTime() - pastDate.getTime())
  )
  return randomDate
}

export async function createBorrowings() {
  try {
    for (let i = 0; i < 5; i++) {
      const memberId = getRandomInt(8) // สุ่ม Member ID ระหว่าง 1 ถึง 10
      const bookId = getRandomInt(10) // สุ่ม Book ID ระหว่าง 1 ถึง 10
      const dueDate = getRandomDate() // สุ่มวันที่คืนหนังสือ

      const borrowing = await prisma.borrowing.create({
        data: {
          memberId,
          bookId,
          dueDate,
        },
      })
      // console.log(`Borrowing books has been increased.: ${borrowing.id}`)
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error: ${error.message}`)
    } else {
      console.error(`Unknown Error: ${error}`)
    }
  }
}
