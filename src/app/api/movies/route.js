import clientPromise from "../../../../lib/mongodb";

export async function GET(req) {
  try {
    const client = await clientPromise;
    const db = client.db("sample_mflix"); // MongoDB의 데이터베이스 이름으로 변경 가능!
    const movies = await db.collection("movies").find({}).limit(10).toArray();

    return new Response(JSON.stringify(movies), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (e) {
    console.error(e);
    return new Response(
      JSON.stringify({ message: "Database connection error" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
