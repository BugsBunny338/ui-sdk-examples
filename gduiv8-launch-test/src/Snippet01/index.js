import React from "react";
import { Headline } from "@gooddata/sdk-ui-charts";
import * as Ldm from "../ldm";
import Hint from "./Hint";
import backend from "../backend";

export default () => (
  <>
    <h1># of Orders</h1>

    {/* Try editing the component below 👇 */}
    <Headline
      primaryMeasure={Ldm.NrOfOrders}
      backend={backend}
      workspace="psk46untnn2vhzs5bokdav3bu2puf6s6"
    />

    <Hint />
  </>
);
