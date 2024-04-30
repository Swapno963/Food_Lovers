import { getBlurData } from "@/utils/blur-generator";
import Image from "next/image";
import Link from "next/link";
import LocalBusinessScript from "../meta/LocalBusinessScript";

export default async function FoodCard({ food }) {
  const { name, author, rating, thumbnail, image, id } = food;
  // console.log(food);
  const { base64 } = await getBlurData(thumbnail);
  return (
    <Link href={`detail/${id}`}>
      <LocalBusinessScript food={food} />
      <div className="card">
        <Image
          width={200}
          height={100}
          src={thumbnail}
          className="rounded-md"
          alt={name}
          placeholder="blur"
          blurDataURL={base64}
        />
        <h4 className="my-2">{name}</h4>
        <div className="py-2 flex justify-between text-xs text-gray-500">
          <span>⭐️ {rating}</span>
          <span>By: {author}</span>
        </div>
      </div>
    </Link>
  );
}
