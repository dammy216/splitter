import "react-reflex/styles.css"; // 必要に応じてCSSもimport

import "./App.css";


import '@mescius/wijmo.styles/wijmo.css';
import { TabPanel, Tab } from '@mescius/wijmo.react.nav';

import Grid from "./Grid";
import Tabtest from "./Tab";

function App() {

  return (
    <div className="app">
      <TabPanel className="panel">
        <Tab>
          <a>タブテスト</a>
          <div>
            <Tabtest />
          </div>
        </Tab>
        <Tab >
          <a>グリッドタブ</a>
          <div className="grid-tab">
            <Grid />
          </div>
        </Tab>

      </TabPanel>
    </div>
  );
}

export default App;
