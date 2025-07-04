import { NextRequest, NextResponse } from 'next/server';

// Mock data for demonstration
import books from '../db'

// GET /api/books - List all books
export async function GET() {
    return Response.json(books);
}

// // POST /api/books - Add a new book
// export async function POST(req: NextRequest) {
//     const body = await req.json();
//     const newBook = {
//         id: books.length + 1,
//         title: body.title,
//         author: body.author,
//     };
//     books.push(newBook);
//     return NextResponse.json(newBook, { status: 201 });
// }