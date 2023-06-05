import { useState } from "react";
import "./App.css";
import { Layout } from "./Component/Layout";
import bgImage from "./assets/bg-sidebar-desktop.svg";

const listItems = [
  { step: "STEP 1", stepName: "YOUR INFO" },
  { step: "STEP 2", stepName: "SELECT PLAN" },
  { step: "STEP 3", stepName: "ADD-ONS" },
  { step: "STEP 4", stepName: "SUMMARY" },
];

function App() {
  const [isActiveIndex, setIsActiveIndex] = useState<number>(-1);

  return (
    <main className="main">
      <Layout>
        <div className="img-and-list">
          <picture>
            <img
              className="img"
              src={bgImage}
              alt="blue color background with some decoration"
            />
          </picture>
          <ul className="items-list">
            {listItems.map((item, index) => {
              return (
                <li key={item.step}>
                  <span
                    className={
                      index === isActiveIndex
                        ? "span-list is-active"
                        : "span-list"
                    }
                  >
                    {index + 1}
                  </span>
                  <div className="list-item">
                    <p>{item.step}</p>
                    <p>{item.stepName}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </Layout>
    </main>
  );
}

export default App;
