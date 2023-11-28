import { FaBitcoin } from "react-icons/fa";
import millify from "millify";
import CardView from "./CardView";
import LoadMoreController from "../controllers/LoadMoreController";
import { Navigate, useNavigate } from "react-router-dom";

const HomeView = ({ coins }) => {
  const navigate = useNavigate();

  return (
    <div className="home container-xl mt-5 pb-3">
      <h4 className="d-flex align-items-center gap-3">
        <FaBitcoin />
        <span>Hoş Geldiniz, coin listesine göz atabilirsiniz.</span>
      </h4>

      <p>
        Coin listesi, dünya genelindeki kripto para birimlerini ve dijital
        varlıkları takip etmek için mükemmel bir kaynaktır.
      </p>

      <div className="d-flex gap-4 justify-content-around my-5">
        {coins.slice(0, 3).map((data) => (
          <CardView data={data} />
        ))}
      </div>

      <table className="table table-dark table-hover mt-5">
        <thead>
          <tr>
            <th>#</th>
            <th>Coin</th>
            <th>Fiyat</th>
            <th>Market hacmi</th>
            <th>İşlem Hacmi</th>
            <th>% Değişim (24s)</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin) => (
            <tr onClick={() => navigate(`/coin/${coin.id}`)}>
              <td>{coin.rank}</td>
              <td>
                <span className="text-warning fw-bold me-2">{coin.symbol}</span>
                <span className="text-nowrap text-truncate">{coin.name}</span>
              </td>
              <td>${millify(coin.priceUsd)}</td>
              <td>${millify(coin.marketCapUsd)}</td>
              <td>${millify(coin.volumeUsd24Hr)}</td>
              <td className={coin.changePercent24Hr > 0 ? "up" : "down"}>
                {millify(coin.changePercent24Hr)} %
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <LoadMoreController />
    </div>
  );
};

export default HomeView;
