import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { db } from "~/server/db";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

async function Images(){
  const images = await getMyImages()
  return(
    <div className="flex flex-wrap justify-center gap-4">
        {
          images.map((image)=>(
            <div key={image.id} className="w-48 h-48">
              <Image src={image.url} alt={image.name} style={{objectFit:"contain"}} width={480} height={480} />
            </div>
          ))
        }
      </div>
  )
}

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="w-full h-full text-2xl text-center">Please sign in!</div>
      </SignedOut>
      <SignedIn>
        <Images/>
      </SignedIn>
    </main>
  );
}
