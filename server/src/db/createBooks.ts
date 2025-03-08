import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function createBooks() {
  // สร้างอาร์เรย์ (array) ข้อมูลของต้นสังกัด (affiliations)
  const affiliations = [
    'สำนักพิมพ์แห่งจุฬาลงกรณ์มหาวิทยาลัย',
    'สำนักพิมพ์มหาวิทยาลัยธรรมศาสตร์',
    'สำนักพิมพ์มหาวิทยาลัยเชียงใหม่',
    'สำนักพิมพ์แห่งมหาวิทยาลัยมหิดล',
    'สำนักพิมพ์มหาวิทยาลัยกรุงเทพ',
    'สำนักพิมพ์มหาวิทยาลัยรามคำแหง',
    'สำนักพิมพ์แห่งมหาวิทยาลัยบูรพา',
    'สำนักพิมพ์มหาวิทยาลัยสยาม',
    'สำนักพิมพ์แห่งมหาวิทยาลัยศิลปากร',
    'สำนักพิมพ์มหาวิทยาลัยอัสสัมชัญ',
  ]

  // สร้างเซต (Set) สำหรับเก็บสตริงที่สร้างขึ้น
  // เพื่อให้แน่ใจว่าสตริงที่สร้างขึ้นไม่มีการซ้ำกัน
  let generatedStrings = new Set()
  function generateUniqueString() {
    let uniqueString = ''
    do {
      // สร้างตัวอักษรตัวพิมพ์ใหญ่แบบสุ่ม (A-Z)
      let letter = String.fromCharCode(65 + Math.floor(Math.random() * 26))

      // สร้างตัวเลขสุ่ม 11 หลักแล้วเติมด้วยศูนย์นำหน้า
      let number = Math.floor(Math.random() * 1000000000000)
        .toString()
        .padStart(11, '0')

      // รวมตัวอักษรและตัวเลข
      uniqueString = letter + number
    } while (generatedStrings.has(uniqueString)) // ตรวจสอบรายการซ้ำ

    // เพิ่มสตริงที่สร้างขึ้น (uniqueString) เข้าไปในเซต (generatedStrings)
    // เพื่อให้แน่ใจว่าสตริงนั้นไม่ถูกสร้างซ้ำในอนาคต
    generatedStrings.add(uniqueString)

    return uniqueString
  }

  // สร้างอาร์เรย์ (array) ข้อมูลของผู้เขียน (authors)
  const authors = [
    {
      firstName: 'จเด็ด',
      lastName: 'คงธรรม',
      affiliation:
        affiliations[Math.floor(Math.random() * affiliations.length)],
    },
    {
      firstName: 'สมชาย',
      lastName: 'สุขใจ',
      affiliation:
        affiliations[Math.floor(Math.random() * affiliations.length)],
    },
    {
      firstName: 'สุชาติ',
      lastName: 'สุขสันต์',
      affiliation:
        affiliations[Math.floor(Math.random() * affiliations.length)],
    },
    {
      firstName: 'ประเสริฐ',
      lastName: 'สุขสม',
      affiliation:
        affiliations[Math.floor(Math.random() * affiliations.length)],
    },
    {
      firstName: 'วิไล',
      lastName: 'วงศ์สว่าง',
      affiliation:
        affiliations[Math.floor(Math.random() * affiliations.length)],
    },
    {
      firstName: 'ศักดิ์ชัย',
      lastName: 'ศักดิ์สิทธิ์',
      affiliation:
        affiliations[Math.floor(Math.random() * affiliations.length)],
    },
    {
      id: 7,
      firstName: 'สุวิมล',
      lastName: 'สุขุม',
      affiliation:
        affiliations[Math.floor(Math.random() * affiliations.length)],
    },
    {
      id: 8,
      firstName: 'วีรยุทธ',
      lastName: 'วงศ์สว่าง',
      affiliation:
        affiliations[Math.floor(Math.random() * affiliations.length)],
    },
  ]

  for (const author of authors) {
    await prisma.author.create({
      data: {
        firstName: author.firstName,
        lastName: author.lastName,
        affiliation: author.affiliation,
      },
    })
  }

  // สร้างอาร์เรย์ (array) ข้อมูลของหนังสือ (books)
  const books = [
    {
      title: 'Java เบื้องต้น',
      isbn: generateUniqueString(),
      category: 'คอมพิวเตอร์',
      authorId: 1,
    },
    {
      title: 'Python สำหรับพัฒนาเว็บ',
      isbn: generateUniqueString(),
      category: 'พัฒนาเว็บ',
      authorId: 2,
    },
    {
      title: 'C++ สำหรับพัฒนาเกม',
      isbn: generateUniqueString(),
      category: 'พัฒนาเกม',
      authorId: 3,
    },
    {
      title: 'JavaScript สำหรับพัฒนาเว็บ',
      isbn: generateUniqueString(),
      category: 'พัฒนาเว็บ',
      authorId: 4,
    },
    {
      title: 'HTML/CSS สำหรับออกแบบเว็บ',
      isbn: generateUniqueString(),
      category: 'ออกแบบเว็บ',
      authorId: 5,
    },
    {
      title: 'Angular สำหรับพัฒนาเว็บ',
      isbn: generateUniqueString(),
      category: 'พัฒนาเว็บ',
      authorId: 6,
    },
    {
      title: 'React สำหรับพัฒนาเว็บ',
      isbn: generateUniqueString(),
      category: 'พัฒนาเว็บ',
      authorId: 7,
    },
    {
      title: 'Vue.js สำหรับพัฒนาเว็บ',
      isbn: generateUniqueString(),
      category: 'พัฒนาเว็บ',
      authorId: 8,
    },
    {
      title: 'Node.js สำหรับพัฒนาเซิร์ฟเวอร์',
      isbn: generateUniqueString(),
      category: 'พัฒนาเซิร์ฟเวอร์',
      authorId: 2,
    },
    {
      title: 'Ruby on Rails สำหรับพัฒนาเว็บ',
      isbn: generateUniqueString(),
      category: 'พัฒนาเว็บ',
      authorId: 3,
    },
    {
      title: 'Laravel สำหรับพัฒนาเว็บ',
      isbn: generateUniqueString(),
      category: 'พัฒนาเว็บ',
      authorId: 4,
    },
    {
      title: 'Django สำหรับพัฒนาเว็บ',
      isbn: generateUniqueString(),
      category: 'พัฒนาเว็บ',
      authorId: 5,
    },
    {
      title: 'Flask สำหรับพัฒนาเว็บ',
      isbn: generateUniqueString(),
      category: 'พัฒนาเว็บ',
      authorId: 6,
    },
    {
      title: 'Express.js สำหรับพัฒนาเซิร์ฟเวอร์',
      isbn: generateUniqueString(),
      category: 'พัฒนาเซิร์ฟเวอร์',
      authorId: 7,
    },
    {
      title: 'Koa.js สำหรับพัฒนาเซิร์ฟเวอร์',
      isbn: generateUniqueString(),
      category: 'พัฒนาเซิร์ฟเวอร์',
      authorId: 8,
    },
    {
      title: 'Hapi สำหรับพัฒนาเซิร์ฟเวอร์',
      isbn: generateUniqueString(),
      category: 'พัฒนาเซิร์ฟเวอร์',
      authorId: 2,
    },
    {
      title: 'Sails.js สำหรับพัฒนาเซิร์ฟเวอร์',
      isbn: generateUniqueString(),
      category: 'พัฒนาเซิร์ฟเวอร์',
      authorId: 3,
    },
    {
      title: 'Feathers.js สำหรับพัฒนาเซิร์ฟเวอร์',
      isbn: generateUniqueString(),
      category: 'พัฒนาเซิร์ฟเวอร์',
      authorId: 4,
    },
    {
      title: 'Nest.js สำหรับพัฒนาเซิร์ฟเวอร์',
      isbn: generateUniqueString(),
      category: 'พัฒนาเซิร์ฟเวอร์',
      authorId: 5,
    },
    {
      title: 'Next.js สำหรับพัฒนาเว็บ',
      isbn: generateUniqueString(),
      category: 'พัฒนาเว็บ',
      authorId: 6,
    },
  ]

  for (const book of books) {
    await prisma.book.create({
      data: {
        title: book.title,
        isbn: book.isbn,
        category: book.category,
      },
    })
  }

  // เลือกผู้เขียน (author) แบบสุ่มจากอาร์เรย์ (authors)
  const authorRandom = authors[Math.floor(Math.random() * authors.length)]

  // สร้างผู้เขียนใหม่ (author) โดยใช้ข้อมูลจากผู้เขียนที่เลือกแบบสุ่ม
  // และสังกัด (affiliation) แบบสุ่มจากอาร์เรย์ (affiliations)
  const cmAffiliation = await prisma.author.create({
    data: {
      firstName: authorRandom.firstName, // ชื่อ
      lastName: authorRandom.lastName, // นามสกุล
      affiliation:
        affiliations[Math.floor(Math.random() * affiliations.length)], // สังกัด
    },
  })

  // ค้นหาสารบบหนังสือ (books) ทั้งหมด
  const responseBooks = await prisma.book.findMany()

  // ค้นหาสารบบผู้เขียน (authors) ทั้งหมด
  const responseAuthors = await prisma.author.findMany()

  // วนซ้ำผ่านรายการหนังสือ (books)
  for (const rpbook of responseBooks) {
    // เลือกผู้เขียน (author) แบบสุ่มจากรายการผู้เขียน (authors)
    const randomAuthor =
      responseAuthors[Math.floor(Math.random() * responseAuthors.length)]

    // เพิ่มผู้เขียน (author) เข้ากับหนังสือ (book) ที่กำลังวนซ้ำ
    await addAuthor(rpbook.id, randomAuthor.id)
  }

  console.log('Database has been initialized with books.')

  // ฟังก์ชันสำหรับเพิ่มผู้เขียน (author) เข้ากับหนังสือ (book)
  async function addAuthor(bookId: number, authorId: number) {
    // อัปเดตหนังสือ (book) โดยเชื่อมโยงกับผู้เขียน (author) ที่เลือก
    await prisma.book.update({
      where: { id: bookId }, // ค้นหาหนังสือ (book) ตาม ID
      data: {
        author: {
          connect: {
            id: authorId, // เชื่อมโยงกับผู้เขียน (author) ตาม ID
          },
        },
      },
    })
  }
  /* End Book */
}
