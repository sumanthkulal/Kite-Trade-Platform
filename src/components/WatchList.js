import React, { useState } from "react";
import { watchlist } from "../data/data";
import { Tooltip, Grow } from "@mui/material";
import { KeyboardArrowUp, KeyboardArrowDown, BarChartOutlined, MoreHoriz } from "@mui/icons-material";

const WatchList = () => {
  return (
    <div className="watchlist-container">
      {/* Search bar */}
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg: infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts">{watchlist.length}</span>
      </div>

      {/* Stock list */}
      <ul className="list">
        {watchlist.map((stock) => (
          <WatchListItem stock={stock} key={stock.name} />
        ))}
      </ul>
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [showWatchListAction, setShowWatchListAction] = useState(false);

  const handleMouseEnter = () => {
    setShowWatchListAction(true);
  };

  const handleMouseLeave = () => {
    setShowWatchListAction(false);
  };

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>

      {showWatchListAction && <WatchListAction uid={stock.name} />}
    </li>
  );
};

const WatchListAction = ({ uid }) => {
  return (
    <span className="actions">
      <span>
        <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow}>
          <button className="buy">Buy</button>
        </Tooltip>

         <Tooltip title="Sell (S)" placement="top" arrow TransitionComponent={Grow}>
          <button className="buy">Sell</button>

           <Tooltip title="Analytics (A)" placement="top" arrow TransitionComponent={Grow}>
              <button className="action">
                  <BarChartOutlined className="icon"/>
              </button>
            </Tooltip>

            <Tooltip title="More (M)" placement="top" arrow TransitionComponent={Grow}>
            <button className="action">
                  <MoreHoriz className="icon"/>
              </button>
            </Tooltip>
        </Tooltip>
      </span>
    </span>
  );
};
