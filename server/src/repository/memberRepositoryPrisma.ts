import { PrismaClient } from '@prisma/client'
import { Member } from '../models/member'

const prisma = new PrismaClient()

export const getAllMembers = async (): Promise<Member[]> => {
  return await prisma.member.findMany()
}

export const getMemberById = async (id: number): Promise<Member | null> => {
  return await prisma.member.findUnique({
    where: { id },
  })
}

export const getMemberByBorrow = async (
  borrowId: number
): Promise<Member | null> => {
  return await prisma.member.findFirst({
    where: {
      borrowings: {
        some: {
          id: borrowId,
        },
      },
    },
    select: {
      borrowings: {
        select: {
          book: {
            select: {
              id: true,
              authorId: true,
              title: true,
              isbn: true,
              category: true,
            },
          },
          member: {
            select: {
              firstName: true,
              lastName: true,
            },
          },
        },
      },
    },
  })
}

export const addMember = async (member: Member): Promise<Member> => {
  return await prisma.member.create({
    data: {
      firstName: member.firstName || '',
      lastName: member.lastName || '',
      phone: member.phone || '',
    },
  })
}
