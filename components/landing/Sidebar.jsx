import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="col-span-12 md:col-span-3">
      <h3 className="font-bold text-xl">Recipes</h3>
      <ul className="pl-2 my-6 space-y-4 text-gray-500 text-sm">
        <li>
          <Link href="/category/Morning_Bliss_Cafe">Morning Bliss Café</Link>
        </li>

        <li>
          <Link href="/category/Sunrise_Bites_Kitchen">
            Sunrise Bites Kitchen
          </Link>
        </li>

        <li>
          <Link href="/category/Brunch_Haven_Delights">
            Brunch Haven Delights
          </Link>
        </li>

        <li>
          <Link href="/category/Rise_&_Dine_Eatery">Rise & Dine Eatery</Link>
        </li>

        <li>
          <Link href="/category/Breakfast_Oasis_Junction">
            Breakfast Oasis Junction
          </Link>
        </li>
      </ul>
    </div>
  );
}
