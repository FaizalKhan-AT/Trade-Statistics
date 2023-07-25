import React from "react";
import { formatNumber } from "../../utils/formatNumber";

const StockCard = ({ stock }) => {
  if (stock !== null)
    return (
      <div className="card py-3 px-4 text-light">
        <div className="card-top d-flex align-items-center justify-content-between mx-2">
          <h3 className="m-0">{stock.symbol}</h3>
          <div>
            <table style={{ borderCollapse: "collapse" }} cellPadding={10}>
              <thead>
                <tr>
                  <th className="card-pill pill-green ">Open</th>
                  <th></th>
                  <th className="card-pill pill-red">Close</th>
                  <th></th>
                  <th className="card-pill pill-green">
                    <div className="cell">
                      <span>High</span>
                      <span className="material-symbols-outlined">
                        expand_less
                      </span>
                    </div>
                  </th>
                  <th></th>
                  <th className="card-pill pill-red">
                    <div className="cell">
                      <span>Low</span>
                      <span className="material-symbols-outlined">
                        expand_more
                      </span>
                    </div>
                  </th>
                  <th></th>
                  <th className="card-pill pill-purple">Volume</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-high">$ {formatNumber(stock.open)}</td>
                  <td></td>
                  <td className="text-low">$ {formatNumber(stock.close)}</td>
                  <td></td>
                  <td className="text-high">$ {formatNumber(stock.high)}</td>
                  <td></td>
                  <td className="text-low">$ {formatNumber(stock.low)}</td>
                  <td></td>
                  <td className="text-vol">$ {formatNumber(stock.volume)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  else return null;
};

export default StockCard;
