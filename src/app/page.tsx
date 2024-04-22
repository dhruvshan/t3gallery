import Link from "next/link";
import { db } from "~/server/db";

const mockUrls =[
  "https://utfs.io/f/f6fecda9-dffc-43bc-b1fa-f48ada04db02-10s1.png",
  "https://utfs.io/f/295c4672-21dc-4066-9ae3-d5b681bcd8c6-10s4.png",
  "https://utfs.io/f/bbd16b8d-b116-47ba-a807-87fd0aa56356-10s3.png",
  "https://utfs.io/f/295c4672-21dc-4066-9ae3-d5b681bcd8c6-10s4.png",
]

const mockImages = mockUrls.map((url,index) =>({
  id:index+1,
  url,
}))

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts)
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post)=>(
          <div key={post.id}>
            {post.name}
          </div>
        ))}
        {
          mockImages.map((image)=>(
            <div key={image.id} className="w-48">
              <img src={image.url} alt="image" />
            </div>
          ))
        }
      </div>
    </main>
  );
}
