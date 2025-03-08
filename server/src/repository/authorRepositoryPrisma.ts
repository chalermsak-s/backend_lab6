import { PrismaClient } from '@prisma/client'
import { Author } from '../models/author'
import { Book } from '../models/book'

const prisma = new PrismaClient()

export const getAllAuthors = async (): Promise<Author[]> => {
  return await prisma.author.findMany()
}

export const addAuthor = async (
  authorData: Author,
  bookData: Book
): Promise<Author> => {
  return await prisma.author.create({
    data: {
      firstName: authorData.firstName ?? '',
      lastName: authorData.lastName ?? '',
      affiliation: authorData.affiliation,
      books: {
        create: {
          title: bookData.title,
          isbn: bookData.isbn,
          category: bookData.category,
        },
      },
    },
    include: {
      books: true,
    },
  })
}

export const getAuthorById = async (id: number): Promise<Author | null> => {
  return await prisma.author.findUnique({
    where: { id: id },
  })
}

export const getAuthorByBook = async (
  bookId: number
): Promise<Author | null> => {
  return (await prisma.author.findFirst({
    where: {
      books: {
        some: {
          id: bookId,
        },
      },
    },
    select: {
      firstName: true,
      lastName: true,
      affiliation: true,
      books: {
        select: {
          title: true,
          isbn: true,
          category: true,
        },
      },
    },
  })) as Author | null
}

export const getAffiliationByAuthor = async (
  authorId: number
): Promise<Author | null> => {
  const author = await prisma.author.findUnique({
    where: { id: authorId },
    select: {
      id: true,
      firstName: true,
      lastName: true,
      affiliation: true,
      books: {
        select: {
          id: true,
          title: true,
          isbn: true,
          category: true,
          authorId: true,
        },
      },
    },
  })
  return author || null
}
