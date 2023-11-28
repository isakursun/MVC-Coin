import { useSearchParams } from "react-router-dom";
import LoadMoreView from "../views/LoadMoreView";

const LoadMoreController = () => {
  const [params, setParams] = useSearchParams();

  const handleClick = () => {
    //? url de page patametresi varsa alma yoksa 1 olarak alma
    const pageNumber = params.get("page") || 1;
    //? url i güncelle ve sayfa parametresinin değerini 1 artırma
    setParams({ page: +pageNumber + 1 });
  };

  return <LoadMoreView handleClick={handleClick} />;
};

export default LoadMoreController;
