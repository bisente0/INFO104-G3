import { PrismaClient } from '@prisma/client'

/*
    Archivo para importe de prisma y que no se creen multiples instancias de prisma
    al momento de manipular nuestra bases de datos
*/

const globalForPrisma = global

const prisma = globalForPrisma.prisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export default prisma