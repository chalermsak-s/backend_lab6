import { Book } from "../models/book";
import * as repo from "../repository/bookRepositoryPrisma";

export function getBookByGroups(groups: string[]): Promise<Book[]> {
  return repo.getBookByGroups(groups);
}

export function getAllBooks(): Promise<Book[]> {
  return repo.getAllBooks();
}

export function getBookById(id: number): Promise<Book | null> {
  return repo.getBookById(id);
}

export function getBookByCategory(category: string): Promise<Book[]> {
  return repo.getBookByCategory(category);
}

export function addBook(newBook: Book): Promise<Book> {
  return repo.addBook(newBook);
}

export async function getAllEventsWithPagination(
  keyword: string,
  pageSize: number,
  pageNo: number
) {
  const pageEvents = await repo.getAllEventsWithOrganizerPagination(
    keyword,
    pageSize,
    pageNo
  )
  return pageEvents
}

export function count() {
  return repo.countBook()
}





