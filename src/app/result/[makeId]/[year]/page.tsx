import { getTypes, MakeType } from '@/app/TypeSelectOptions';

export function getYears() {
  let yearsArray = [];
  const currentYear = new Date().getFullYear();

  for (let i = 2015; i <= currentYear; i++) {
    yearsArray.push(i);
  }

  return yearsArray;
}

export async function generateStaticParams() {
  const makes: MakeType[] = (await getTypes()).Results;
  const years = getYears();

  const params = makes.flatMap((make) =>
    years.map((year) => ({
      params: { makeId: make.MakeId, year },
    })),
  );

  return params;
}

interface VehicleType {
  Make_ID: number;
  Make_Name: string;
  Model_ID: number;
  Model_Name: string;
}

export default async function Result({
  params,
}: {
  params: { makeId: string; year: string };
}) {
  const { makeId, year } = params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`,
  );
  if (!res.ok) return 'There was an error';

  const vehicles: VehicleType[] = (await res.json()).Results;

  return (
    <div className="flex gap-5 p-10 flex-wrap">
      {vehicles.map((vehicle) => (
        <div
          key={vehicle.Model_ID}
          className="bg-blue-50 border border-blue-100 w-fit rounded-xl p-5"
        >
          <p className="text-sm">Model ID: {vehicle.Model_ID}</p>
          <p className="text-2xl font-bold">Model Name: {vehicle.Model_Name}</p>
        </div>
      ))}
    </div>
  );
}
