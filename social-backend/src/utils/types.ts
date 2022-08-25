import { PrismaClient } from '@prisma/client';

export interface Context {
    prisma : PrismaClient
    user : { id : number }
}