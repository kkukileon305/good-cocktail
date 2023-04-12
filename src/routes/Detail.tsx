import { useState } from "react";
import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { BsArrowLeftShort, BsHeart, BsHeartFill } from "react-icons/bs";
import CategoryBtn from "../components/buttons/CategoryBtn";
import DetailSkeleton from "../components/skeletons/Detail.skeleton";
import useDetail from "../hooks/queries/useDetail";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { addCart, removeCart } from "../store/slices/cartSlice";
import SEO from "../components/SEO";
import DetailModal from "../components/modals/DetailModal";
import { AnimatePresence } from "framer-motion";

const Detail = () => {
  const navigate = useNavigate();
  const { idDrink } = useParams();
  const { data: response, isLoading } = useDetail(idDrink || "12345");

  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const cart = useAppSelector(store => store.cart);
  const dispatch = useAppDispatch();

  if (!response || isLoading) return <DetailSkeleton />;

  if (!response.drinks) return <div>No</div>;

  const onClick = () => {
    if (!idDrink || !response.drinks) return;

    if (cart.find(item => item.idDrink === idDrink)) {
      dispatch(removeCart(idDrink));
    } else {
      dispatch(
        addCart({
          idDrink,
          strDrink: response.drinks[0].strDrink,
          strDrinkThumb: response.drinks[0].strDrinkThumb,
        })
      );
    }
  };

  return (
    <>
      <SEO title={`Good Cocktail - ${response.drinks[0].strDrink}`} description={response.drinks[0].strInstructions} />

      <AnimatePresence>
        {!!id && <DetailModal title={response.drinks[0].strDrink} description={response.drinks[0].strInstructions} />}
      </AnimatePresence>

      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div className="sm:w-[calc(100%-216px)]">
          <button className="border rounded-full border-black dark:border-white mb-4" onClick={() => navigate(-1)}>
            <BsArrowLeftShort size={32} />
          </button>
          <div className="flex flex-wrap gap-4 items-end">
            <h2 className="font-bold text-3xl">{response.drinks[0].strDrink}</h2>
            <CategoryBtn category={response.drinks[0].strCategory} />
            <button onClick={onClick}>
              {cart.find(item => item.idDrink === idDrink) ? ( //
                <BsHeartFill color="red" size={32} />
              ) : (
                <BsHeart color="red" size={32} />
              )}
            </button>
          </div>
          <p className="mt-4">{response.drinks[0].strInstructions}</p>
        </div>
        <Link to={`?id=${response.drinks[0].idDrink}`}>
          <img src={response?.drinks[0].strDrinkThumb} alt={response?.drinks[0].strInstructions} className="w-[200px] mx-auto" />
        </Link>
      </div>
    </>
  );
};

export default Detail;
