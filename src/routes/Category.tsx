import { useParams } from "react-router-dom";
import DrinkItem from "../components/items/DrinkItem";
import DrinkItemSkeleton from "../components/skeletons/DrinkItem.skeleton";
import useCategory from "../hooks/queries/useCategory";
import SEO from "../components/SEO";

const Category = () => {
  const { strCategory } = useParams();
  const { data: response, isLoading } = useCategory(strCategory || "Cocktail");

  return (
    <>
      <SEO title={`Good Cocktail - ${strCategory}`} description={`Category - ${strCategory}`} />

      <div>
        <h2 className="font-bold text-2xl mb-8 text-center">{strCategory}</h2>

        {isLoading ? (
          <ul className="flex flex-wrap gap-4 justify-center">
            <DrinkItemSkeleton />
            <DrinkItemSkeleton />
            <DrinkItemSkeleton />
            <DrinkItemSkeleton />
            <DrinkItemSkeleton />
            <DrinkItemSkeleton />
            <DrinkItemSkeleton />
            <DrinkItemSkeleton />
          </ul>
        ) : (
          <ul className="flex flex-wrap gap-4 justify-center">
            {response?.drinks.map(drink => (
              <DrinkItem key={drink.idDrink} drink={drink} />
            ))}
          </ul>
        )}
      </div>
    </>
  );
};
export default Category;
