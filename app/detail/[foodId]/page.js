import Steps from "@/components/detail/Steps";
import TopBanner from "@/components/detail/TopBanner";
import { getFoodById } from "@/db/queries";

export default async function DetailPage({ params: { foodId } }) {
  const detailFood = await getFoodById(foodId);
  // console.log("id is ", detailFood);
  const { steps } = detailFood;
  return (
    <div>
      <TopBanner detailFood={detailFood} />
      <Steps steps={steps} key={steps} />
    </div>
  );
}
