import {
  ReflexContainer,
  ReflexElement,
  ReflexSplitter,
} from "react-reflex";
import "react-reflex/styles.css"; // 必要に応じてCSSもimport

import "./App.css";

import { FlexGrid, FlexGridColumn } from '@mescius/wijmo.react.grid';
import '@mescius/wijmo.styles/wijmo.css';
import * as wjcGrid from '@mescius/wijmo.grid';

function App() {

  const bidResultDisplayData = [
    { companyId: 1, companyName: "Company A", companyAbility: 80, engineerAbility: 75 },
    { companyId: 2, companyName: "Company B", companyAbility: 85, engineerAbility: 70 },
    { companyId: 3, companyName: "Company C", companyAbility: 90, engineerAbility: 80 },
    { companyId: 4, companyName: "Company D", companyAbility: 70, engineerAbility: 65 },
    { companyId: 5, companyName: "Company E", companyAbility: 75, engineerAbility: 60 },
    { companyId: 6, companyName: "Company F", companyAbility: 80, engineerAbility: 85 },
  ];


  return (
    <div className="App">
      <ReflexContainer orientation="vertical">
        <ReflexElement>
          <ReflexContainer orientation="horizontal">

            <ReflexElement minSize={75}>
              <h2>入札結果</h2>
              <FlexGrid itemsSource={bidResultDisplayData} headersVisibility={wjcGrid.HeadersVisibility.All}>
                <FlexGridColumn header="企業の能力等" binding="companyAbility" isRequired={false} />
                <FlexGridColumn header="技術者の能力等" binding="engineerAbility" isRequired={false} />
              </FlexGrid>
            </ReflexElement>

            <ReflexSplitter />

            <ReflexElement minSize={75}>
              <h2>総合評価点</h2>
              <FlexGrid itemsSource={bidResultDisplayData} headersVisibility={wjcGrid.HeadersVisibility.All}>
                <FlexGridColumn header="企業の能力等" binding="companyAbility" isRequired={false} />
                <FlexGridColumn header="技術者の能力等" binding="engineerAbility" isRequired={false} />
              </FlexGrid>
            </ReflexElement>

          </ReflexContainer>
        </ReflexElement>

        <ReflexSplitter />

        <ReflexElement>
          <div>
            <label>右</label>
          </div>
        </ReflexElement>

      </ReflexContainer>
    </div>
  );
}

export default App;
