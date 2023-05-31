import { FC, useState, useEffect } from "react";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import MealCourse from "./MealCourse";
import MealsTable from "./MealsTable";
import type { MealsTableType } from "@/types";

const inter500 = Inter({
  subsets: ["latin"],
  weight: "500",
  style: "normal",
});

type Repo = {
  name: string;
  stargazers_count: number;
};
type PageProps = {
  repo: {
    name: string;
    stargazers_count: number;
  };
};
const AddMealsPlanMain: FC<PageProps> = ({ repo }) => {
  const router = useRouter();

  const mealsData: MealsTableType[] = [
    {
      client_name: "George R.R Martin",
      service_name: "Service 1",
      application_date: "12/12/2022",
      expiry_date: "12/12/2022",
    },
  ];

  const [meals, setMeals] = useState([
    {
      id: 1,
      title: "Breakfast",
      kcal: 270,
      meals: [
        {
          id: 1,
          title: "Nasi Lemak + Sotong Sambal",
          kcal: 150,
          quantity: 1,
          ingredients: [
            {
              id: 1,
              title: "White Rice",
              protein: 3,
              fats: 0.3,
              carbs: 3,
            },
            {
              id: 2,
              title: "Sotong Sambal",
              protein: 3,
              fats: 0.3,
              carbs: 3,
            },
            {
              id: 3,
              title: "Egg",
              protein: 3,
              fats: 0.3,
              carbs: 3,
            },
          ],
        },
        {
          id: 2,
          title: "Test Meal",
          kcal: 150,
          quantity: 1,
          ingredients: [
            {
              id: 1,
              title: "White Rice",
              protein: 3,
              fats: 0.3,
              carbs: 3,
            },
            {
              id: 2,
              title: "Sotong Sambal",
              protein: 3,
              fats: 0.3,
              carbs: 3,
            },
            {
              id: 3,
              title: "Egg",
              protein: 3,
              fats: 0.3,
              carbs: 3,
            },
          ],
        },
      ],
    },
    {
      id: 2,
      title: "Lunch",
      kcal: 270,
      meals: [
        {
          id: 1,
          title: "Nasi Lemak + Sotong Sambal",
          kcal: 150,
          quantity: 1,
          ingredients: [
            {
              id: 1,
              title: "White Rice",
              protein: 3,
              fats: 0.3,
              carbs: 3,
            },
            {
              id: 2,
              title: "Sotong Sambal",
              protein: 3,
              fats: 0.3,
              carbs: 3,
            },
            {
              id: 3,
              title: "Egg",
              protein: 3,
              fats: 0.3,
              carbs: 3,
            },
          ],
        },
      ],
    },
    {
      id: 3,
      title: "Dinner",
      kcal: 270,
      meals: [
        {
          id: 1,
          title: "Nasi Lemak + Sotong Sambal",
          kcal: 150,
          quantity: 1,
          ingredients: [
            {
              id: 1,
              title: "White Rice",
              protein: 3,
              fats: 0.3,
              carbs: 3,
            },
            {
              id: 2,
              title: "Sotong Sambal",
              protein: 3,
              fats: 0.3,
              carbs: 3,
            },
            {
              id: 3,
              title: "Egg",
              protein: 3,
              fats: 0.3,
              carbs: 3,
            },
          ],
        },
      ],
    },
  ]);
    const updateMealItem = async (mealItemId: number, formData: any) => {
      const idToken = 'YOUR_ID_TOKEN';
    
      try {
        const res = await fetch(`https://diet-ideas-production.up.railway.app/v1/mealitem/${mealItemId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${idToken}`,
          },
          body: JSON.stringify(formData),
        });
    
        if (!res.ok) {
          throw new Error('Failed to update meal item');
        }
    
        const data = await res.json();
        return data;
      } catch (error) {
        console.error(error);
        throw error;
      }
    };
    
    const updatePartialMealItem = async (mealItemId: number, formData: any) => {
      const idToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhdml2eXN5YXJhanUwOUBnbWFpbC5jb20iLCJpYXQiOjE2ODU1NTA1OTMsImV4cCI6MTY4ODE0MjU5M30.Xc2R_HJK37J20tNqtRTbVPmoGgAbxZZzzVjQ2C5TrmA';
    
      try {
        const res = await fetch(`https://diet-ideas-production.up.railway.app/v1/mealitem/${mealItemId}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${idToken}`,
          },
          body: JSON.stringify(formData),
        });
    
        if (!res.ok) {
          throw new Error('Failed to update meal item');
        }
    
        const data = await res.json();
        return data;
      } catch (error) {
        console.error(error);
        throw error;
      }
    };
    
    const deleteMealItem = async (mealItemId: number) => {
      const idToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhdml2eXN5YXJhanUwOUBnbWFpbC5jb20iLCJpYXQiOjE2ODU1NTA1OTMsImV4cCI6MTY4ODE0MjU5M30.Xc2R_HJK37J20tNqtRTbVPmoGgAbxZZzzVjQ2C5TrmA';
    
      try {
        const res = await fetch(`https://diet-ideas-production.up.railway.app/v1/mealitem/${mealItemId}`, {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${idToken}`,
          },
        });
    
        if (!res.ok) {
          throw new Error('Failed to delete meal item');
        }
    
        const data = await res.json();
        return data;
      } catch (error) {
        console.error(error);
        throw error;
      }
    };
  return (
    <div className="p-10 pb-20 flex flex-col pt-20 gap-16">
      <div className="flex flex-col gap-3 w-full">
        <div className="flex items-center w-full justify-between">
          <h1 className={`${inter500.className} text-2xl my-2 text-black`}>
            Add Meal Plan
          </h1>

          <div className="flex gap-2 items-center">
            <button
              onClick={() => router.push("/meals")}
              className={`${inter500.className} shadow bg-primary text-white rounded-lg text-md px-6 py-1`}
            >
              Save
            </button>
            <button
              onClick={() => router.push("/meals")}
              className={`${inter500.className} shadow bg-danger text-white rounded-lg text-md px-6 py-1`}
            >
              Cancel
            </button>
          </div>
        </div>

        <MealsTable data={mealsData} />
      </div>
      <div className="flex relative flex-col mt-5 gap-3 w-full">
        {meals.map((meal) => (
          <MealCourse
            key={meal.id}
            title={meal.title}
            kcal={meal.kcal}
            data={meal.meals}
            setData={setMeals}
          />
        ))}
      </div>

      <div className="h-48" />
    </div>
  );
};
export const getStaticProps = async () => {
  const idToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhdml2eXN5YXJhanUwOUBnbWFpbC5jb20iLCJpYXQiOjE2ODU1NTA1OTMsImV4cCI6MTY4ODE0MjU5M30.Xc2R_HJK37J20tNqtRTbVPmoGgAbxZZzzVjQ2C5TrmA';

  try {
    const getRes = await fetch('https://diet-ideas-production.up.railway.app/v1/mealitem/1', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${idToken}`,
      },
    });
  
    const getRepo = await getRes.json();
    console.log(getRepo);
  
    const postRes = await fetch('https://diet-ideas-production.up.railway.app/v1/mealitem/1', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${idToken}`,
      },
      body: JSON.stringify({ key: 'value' }),
    });
  
    const postResponseData = await postRes.json();
    console.log(postResponseData);
  
    return { props: { getRepo, postResponseData } };
  } catch (error) {
    console.error(error);
    return { props: {} };
  }
};

export default AddMealsPlanMain;
