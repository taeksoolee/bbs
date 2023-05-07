// /api/contents/[id]/comments
import { NextResponse } from 'next/server';

export async function GET(request: Request, context: {
  params: { id: string }
}) {
  
  return NextResponse.json(`${context.params.id}'s comments!`);
}