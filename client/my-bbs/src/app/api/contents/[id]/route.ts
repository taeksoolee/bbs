// /api/contents/[id]
import { NextResponse } from 'next/server';

export async function GET(request: Request, context: {
  params: { id: string }
}) {
  console.log(context.params.id);
  console.log(request.url);
  return NextResponse.json([6, 'AAABBBCCC', '2023-05-04']);
}