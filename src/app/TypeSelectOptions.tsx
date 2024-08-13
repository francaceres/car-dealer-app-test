export async function getTypes() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/vehicles/GetMakesForVehicleType/car?format=json`,
  );
  if (!res.ok) return 'There was an error';
  return res.json();
}

export interface MakeType {
  MakeId: number;
  MakeName: string;
  VehicleTypeId: number;
  VehicleTypeName: string;
}

export default async function TypeSelectOptions() {
  const types: MakeType[] = (await getTypes()).Results;

  return (
    <>
      {types.map((type) => (
        <option key={type.MakeId} value={type.MakeId} className="font-sans">
          {type.MakeName}
        </option>
      ))}
    </>
  );
}
