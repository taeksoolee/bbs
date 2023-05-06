// https://nextjs.org/docs/app/building-your-application/routing/router-handlers

import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  return NextResponse.json([
    [6, 'AAABBBCCC', '2023-05-04'],
    [5, 'Apple Color is Red', '2023-05-02'],
    [4, 'Banana Color is Yellow', '2023-05-02'],
    [3, 'Sky Color is Blue', '2023-05-02'],
    [2, 'Stone Color is Slate', '2023-05-02'],
    [1, 'Dark Color is Black', '2023-05-02'],
  ]);
}

export async function POST(request: Request) {
  console.log('post!!');
  return new Response();
}