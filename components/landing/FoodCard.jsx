import Image from "next/image";
import Link from "next/link";

export default function FoodCard({ food }) {
  const { name, author, rating, thumbnail, image, id } = food;
  // console.log(food);
  return (
    <Link href={`detail/${id}`}>
      <div className="card">
        <Image
          width={200}
          height={100}
          src={thumbnail}
          className="rounded-md"
          alt={name}
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
