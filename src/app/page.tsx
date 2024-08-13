'use client';

import { Suspense, useEffect, useState } from 'react';
import Button from '../components/Button';
import TypeSelectOptions from './TypeSelectOptions';
import { useRouter } from 'next/navigation';

export function getYears() {
  let yearsArray = [];
  const currentYear = new Date().getFullYear();

  for (let i = 2015; i <= currentYear; i++) {
    yearsArray.push(i);
  }

  return yearsArray;
}

export default function Home() {
  const router = useRouter();
  const [modelYears, setModelYears] = useState<number[]>([]);
  const [selectedType, setSelectedType] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  useEffect(() => {
    setModelYears(getYears());
  }, []);

  return (
    <div className="flex items-center justify-center pt-10">
      <div className="flex flex-col items-center justify-center gap-5 bg-blue-100 px-4 py-10 rounded-xl">
        <div className="flex flex-col gap-5 items-end">
          <div className="flex gap-5 items-center">
            <label htmlFor="makeId">Vehicle Type:</label>
            <Suspense fallback={<p className="w-[50vw] md:w-80">Loading...</p>}>
              <select
                id="makeId"
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-[50vw]  md:w-80 p-2 rounded-md bg-slate-50"
              >
                <option value="">-</option>
                <TypeSelectOptions />
              </select>
            </Suspense>
          </div>
          <div className="flex gap-5 items-center">
            <label htmlFor="modelYear">Year:</label>
            <select
              id="modelYear"
              onChange={(e) => setSelectedYear(e.target.value)}
              className="w-[50vw]  md:w-80 p-2 rounded-md bg-slate-50"
            >
              <option value="">-</option>
              {modelYears.map((year) => (
                <option key={year} value={year} className="font-sans">
                  {year}
                </option>
              ))}
            </select>
          </div>
        </div>
        <Button
          onClick={() => {
            router.push(`/result/${selectedType}/${selectedYear}`);
          }}
          disabled={!selectedType || !selectedYear}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

