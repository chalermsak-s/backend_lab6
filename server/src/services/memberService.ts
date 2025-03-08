import { Member } from '../models/member';
import * as repo from '../repository/memberRepositoryPrisma'

export const getAllMembers = async (): Promise<Member[]> => {
    return await repo.getAllMembers();
};

export const getMemberById = async (id: number): Promise<Member | null> => {
    return await repo.getMemberById(id);
};

export const getMemberByBorrow = async (borrowId: number): Promise<Member | null> => {
    return await repo.getMemberByBorrow(borrowId);
};

export const addMember = async (member: Member): Promise<Member> => {
    return await repo.addMember(member);
};