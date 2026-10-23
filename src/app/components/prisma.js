import { PrismaClient } from '@prisma/client'
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";

/*
    Archivo para importe de prisma y que no se creen multiples instancias de prisma
    al momento de manipular nuestra bases de datos
*/

const adapter = new PrismaBetterSqlite3({ url: process.env.DATABASE_URL });

const g = globalThis;

export const prisma = g.prisma ?? new PrismaClient({ adapter });

if (process.env.NODE_ENV !== 'production') g.prisma = prisma;

export default prisma