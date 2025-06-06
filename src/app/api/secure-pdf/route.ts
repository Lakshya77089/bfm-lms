import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from 'fs';

export async function GET(req: NextRequest) {
  const fileParam = req.nextUrl.searchParams.get('file');

  if (!fileParam) return new NextResponse('File not specified', { status: 400 });

  const filePath = path.join(process.cwd(), 'public/library/books/pdf', fileParam);
  try {
    const fileBuffer = await fs.readFile(filePath);
    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'inline', // No download prompt
      },
    });
  } catch (e) {
    return new NextResponse('File not found', { status: 404 });
  }
}
