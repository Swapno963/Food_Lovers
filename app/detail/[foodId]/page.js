import Steps from "@/components/detail/Steps";
import TopBanner from "@/components/detail/TopBanner";
import { getFoodById } from "@/db/queries";

export async function genarateMetadata({ params: { foodId } }) {
  const detailFood = await getFoodById(foodId);
  return {
    title: `khanaKhazana -${detailFood?.name}`,
    description: detailFood?.description,
    openGraph: {
      images: [detailFood?.thumbnail],
    },
  };
}

export default async function DetailPage({ params: { foodId } }) {
  const detailFood = await getFoodById(foodId);
  // console.log("id is ", detailFood);
  const { steps } = detailFood;
  return (
    <div>
      <TopBanner detailFood={detailFood} />
      <Steps steps={steps} />
    </div>
  );
}
