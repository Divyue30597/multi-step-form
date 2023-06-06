import { useState } from "react";
import "./App.css";
import { Layout } from "./Component/Layout/Layout";
import bgImage from "./assets/bg-sidebar-desktop.svg";
import { FormLayout } from "./Component/FormLayout/FormLayout";
import { Button } from "./Component/Button/Button";
import imageDesign1 from "../design/active-states-step-2.jpg";

const listItems = [
  { step: "STEP 1", stepName: "YOUR INFO" },
  { step: "STEP 2", stepName: "SELECT PLAN" },
  { step: "STEP 3", stepName: "ADD-ONS" },
  { step: "STEP 4", stepName: "SUMMARY" },
];

function App() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  function incrementIndex() {
    if (activeIndex >= 0 && activeIndex < listItems.length - 1)
      setActiveIndex((prevVal) => prevVal + 1);
  }

  function decrementIndex() {
    if (activeIndex >= 0 && activeIndex < listItems.length)
      setActiveIndex((prevVal) => prevVal - 1);
  }

  return (
    <>
      <img src={imageDesign1} />

      <main className="main">
        <Layout>
          <div className="img-and-list">
            <img
              className="bg-img"
              src={bgImage}
              alt="blue color background with some decor"
            />
            <ul className="items-list">
              {listItems.map((item, index) => {
                return (
                  <li key={item.step}>
                    <span
                      className={
                        index === activeIndex
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
          <div className="form-outer-body">
            <FormLayout activeIndex={activeIndex} />
            <div
              className={
                activeIndex === 0 ? "form-footer flex-end" : "form-footer"
              }
            >
              {activeIndex > 0 ? (
                <Button handleClick={decrementIndex}>Go Back</Button>
              ) : null}
              <Button handleClick={incrementIndex}>Next Step</Button>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}

export default App;
