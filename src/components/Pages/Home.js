import classes from "./Home.module.css";
import React from "react";

const Home = () => {
  return (
    <div className={classes.homebody}>
      <h3 className={classes.hometitle}>Tours</h3>
      <ul className={classes.homeList}>
        <li>
          JUL16 <span>DETROIT DTE ENERGY MUSIC THEATRE</span>
          <button>BUY TICKETS</button>
        </li>

        <li>
          JUL19 <span>TORONTO,ON BUDWESTER STAGE</span>
          <button>BUY TICKETS</button>
        </li>

        <li>
          JUL22 <span>BRISTOW, VA JIGGY LUBE LIVE</span>{" "}
          <button>BUY TICKETS</button>
        </li>

        <li>
          JUL29 <span>PHOENIX, AZ AK-CHIN PAVILION</span>{" "}
          <button>BUY TICKETS</button>
        </li>

        <li>
          AUG 2 <span>LAS VEGAS, NV T-MOBILE ARENA</span>{" "}
          <button>BUY TICKETS</button>
        </li>

        <li>
          AUG 7 <span>CONCORD, CA CONCORD PAVILION</span>{" "}
          <button>BUY TICKETS</button>
        </li>
      </ul>
    </div>
  );
};

export default Home;
