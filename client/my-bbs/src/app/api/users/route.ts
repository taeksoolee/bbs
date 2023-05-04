export async function GET(request: Request) {
  return new Response(
    JSON.stringify([
      {id: 1, name: 'LEE'},
      {id: 2, name: 'PARK'},
    ]),
    {
      status: 200,
    }
  );
}
