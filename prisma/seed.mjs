import { readFyleSync } from "node:fs";
import { PrismaClient } from "@prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";

const prisma = new PrismaClient({
    adapter: new PrismaBetterSqlite3({ url: process.env.DATABASE_URL }),
});

const posts = JSON.parse(readFileSync("../../public", "utf-8"));

for (const p of posts) {
    const isbn = String(p.book_isbn13);
    const email = `${p.user}@gmail.com`;
    
    const user = await prisma.user.upsert({
        where: { email },
        update: {},
        create: { email, name: p.user, password: "HOLAA PASSWORD" },
    });

    await prisma.book.upsert({
        where: { isbn13: isbn },
        update: {},
        create: {
            isbn13: isbn,
            name: p.book_name,
            author: p.book_author ?? "Desconocido",
            coverPath: `https://cover.openlibrary.org/b/isbn/${isbn}-M.jpg`,
        },
    });

    const [d, m, y] = p.date.split("-");
    await prisma.post.create({
        data: { msg: p.msg, userId: user.id, bookIsbn: isbn, date: new Date(`${d}-${m}-${y}`) },
    });
}