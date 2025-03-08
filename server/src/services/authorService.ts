import { Author } from '../models/author';
import * as repo from '../repository/authorRepositoryPrisma'

export const getAllAuthors = async (): Promise<Author[]> => {
    return await repo.getAllAuthors();
};

export const addAuthor = async (author: Author,bookData:any): Promise<Author> => {
    return await repo.addAuthor(author, bookData);
};

export const getAuthorById = async (id: number): Promise<Author | null> => {
    return await repo.getAuthorById(id);
};

export const getAuthorByBook = async (bookId: number): Promise<Author | null> => {
    return await repo.getAuthorByBook(bookId);
};

export const getAffiliationByAuthor = async (authorId: number): Promise<Author | null> => {
    return await repo.getAffiliationByAuthor(authorId);
};
