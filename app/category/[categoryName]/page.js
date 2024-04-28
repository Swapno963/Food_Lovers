import FoodCard from "@/components/landing/FoodCard";
import { getFoodByCategory } from "@/db/queries";
import { removeUnderscores } from "@/utils/data-util";

export default async function CategoryPage({ params: { categoryName } }) {
  const spaceString = removeUnderscores(categoryName);

  const categoryFood = await getFoodByCategory(spaceString);
  console.log("name is ", spaceString, categoryFood);
  return (
    <section class="container py-8">
      <div>
        <h3 class="font-semibold text-xl">{spaceString}</h3>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8 justify-items-center">
          {categoryFood.map((food) => (
            <FoodCard key={food.id} food={food} />
          ))}
        </div>
      </div>
    </section>
  );
}
