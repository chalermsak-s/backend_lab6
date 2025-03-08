import { PrismaClient } from '@prisma/client'
import { Book,PageBook } from '../models/book'

const prisma = new PrismaClient()

export async function getBookByGroups(groups: string[]): Promise<Book[]> {
  return await prisma.book.findMany({
    where: {
      category: {
        in: groups,
      },
    },
  })
}

export async function getAllBooks(): Promise<Book[]> {
  return await prisma.book.findMany()
}

export async function getBookById(id: number): Promise<Book | null> {
  return await prisma.book.findUnique({
    where: { id },
  })
}

export async function getBookByCategory(category: string): Promise<Book[]> {
  return await prisma.book.findMany({
    where: { category },
    include: {
      author: true,
      borrowings: {
        include: {
          member: true,
        },
      },
    },
  }) as Book[];
}

export async function addBook(book: Book): Promise<Book> {
  return await prisma.book.create({
    data: {
      title: book.title,
      isbn: book.isbn,
      category: book.category,
      authorId: book.authorId,
    },
  })
}

export async function getAllEventsWithOrganizerPagination(
  keyword: string,
  pageSize: number,
  pageNo: number
) {
  const where:any = {
    OR: [
      { title: { contains: keyword } },
      { isbn: { contains: keyword } },
      { category: { contains: keyword } },
      { author: { firstName: { contains: keyword } } },
    ],
  };

  const books = await prisma.book.findMany({
    where,
    skip: pageSize * (pageNo - 1),
    take: pageSize,
    select: {
      id: true,
      title: true,
      category: true,
      author: true,
      borrowings: false,
    },
  });
  const count = await prisma.book.count({ where });
  return { count, books } as PageBook;
}

export function countBook() {
  return prisma.book.count()
}

