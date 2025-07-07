import { useState } from "react";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import { ReflexContainer, ReflexElement, ReflexSplitter } from "react-reflex";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-reflex/styles.css";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("1");

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={activeTab === "1" ? "active" : ""}
            onClick={() => setActiveTab("1")}
            style={{ cursor: "pointer" }}
          >
            タブ1
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={activeTab === "2" ? "active" : ""}
            onClick={() => setActiveTab("2")}
            style={{ cursor: "pointer" }}
          >
            スプリッタータブ（タブ2）
          </NavLink>
        </NavItem>
      </Nav>

      <div style={{ flexGrow: 1, minHeight: 0 }}>
        {/*
          これまでのFlexbox設定は、TabPaneにスペースを確保するために活かします。
          しかし、主役は中の条件分岐です。
        */}
        <TabContent
          activeTab={activeTab}
          style={{ height: "100%", display: "flex", flexDirection: "column" }}
        >
          <TabPane tabId="1" style={{ padding: "1rem" }}>
            ここは通常のタブ1の内容
          </TabPane>

          <TabPane tabId="2" style={{ flexGrow: 1, width: "100%" }}>
            {/*
              [これが本当の解決策です]
              activeTabが '2' のときだけ ReflexContainer をレンダリングします。
              これにより、ReflexContainerは親が「表示されていてサイズが確定した状態」で
              初めてマウントされるため、幅と高さを正しく取得できます。
            */}
            {activeTab === "2" && (
              <ReflexContainer orientation="vertical" style={{ height: "100%" }}>
                <ReflexElement>
                  <ReflexContainer orientation="horizontal">

                    <ReflexElement minSize={75}>
                      <div>
                        <h2>入札結果</h2>
                        {/* ここにグリッドや他のコンテンツを配置 */}
                      </div>
                    </ReflexElement>

                    <ReflexSplitter />

                    <ReflexElement minSize={75}>
                      <div>
                        <h2>総合評価点</h2>
                        {/* ここにグリッドや他のコンテンツを配置 */}
                      </div>
                    </ReflexElement>
                  </ReflexContainer>
                  パネルA（左）
                </ReflexElement>

                <ReflexSplitter />

                <ReflexElement>
                  <div
                    style={{
                      background: "#ddd",
                      height: "100%",
                      padding: "1rem",
                    }}
                  >
                    パネルB（右）
                  </div>
                </ReflexElement>
              </ReflexContainer>
            )}
          </TabPane>
        </TabContent>
      </div>
    </div>
  );
}

export default App;