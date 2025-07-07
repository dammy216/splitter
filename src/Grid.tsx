import React from 'react';
import { ReflexContainer, ReflexElement, ReflexSplitter } from 'react-reflex';
import { FlexGrid, FlexGridColumn } from '@mescius/wijmo.react.grid';
import './grid.css';
const Grid = () => {
  const bidResultDisplayData = [
    { companyId: 1, companyName: "Company A", companyAbility: 80, engineerAbility: 75 },
    { companyId: 2, companyName: "Company B", companyAbility: 85, engineerAbility: 70 },
    { companyId: 3, companyName: "Company C", companyAbility: 90, engineerAbility: 80 },
    { companyId: 4, companyName: "Company D", companyAbility: 70, engineerAbility: 65 },
    { companyId: 5, companyName: "Company E", companyAbility: 75, engineerAbility: 60 },
    { companyId: 6, companyName: "Company F", companyAbility: 80, engineerAbility: 85 },
  ];
  return (
    <>
      <a>グリッドタブ</a>
      <div className="grid">
        <ReflexContainer orientation="vertical">
          <ReflexElement>
            <ReflexContainer orientation="horizontal">
              <ReflexElement minSize={75}>
                <div>
                  <h2>入札結果</h2>
                  <FlexGrid itemsSource={bidResultDisplayData}>
                    <FlexGridColumn header="企業の能力等" binding="companyAbility" />
                    <FlexGridColumn header="技術者の能力等" binding="engineerAbility" />
                  </FlexGrid>
                </div>
              </ReflexElement>
              <ReflexSplitter />
              <ReflexElement minSize={75}>
                <div>
                  <h2>総合評価点</h2>
                  <FlexGrid itemsSource={bidResultDisplayData}>
                    <FlexGridColumn header="企業の能力等" binding="companyAbility" />
                    <FlexGridColumn header="技術者の能力等" binding="engineerAbility" />
                  </FlexGrid>
                </div>
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
    </>
  );
};

export default Grid;