export async function GET(request: Request) {
  return new Response(
    JSON.stringify([
      [6, 'AAABBBCCC', '2023-05-04'],
      [5, 'Apple Color is Red', '2023-05-02'],
      [4, 'Banana Color is Yellow', '2023-05-02'],
      [3, 'Sky Color is Blue', '2023-05-02'],
      [2, 'Stone Color is Slate', '2023-05-02'],
      [1, 'Dark Color is Black', '2023-05-02'],
    ]),
  );
}
