import { useState } from "react";
import "./App.css";
import { Layout } from "./Component/Layout/Layout";
import bgImage from "./assets/bg-sidebar-desktop.svg";
import bgImageMob from "./assets/bg-sidebar-mobile.svg";
import { FormLayout } from "./Component/FormLayout/FormLayout";
import { Button } from "./Component/Button/Button";
import { Form, Formik } from "formik";
import * as Yup from "yup";

export interface IFormSubmission {
  name: string;
  email: string;
  phoneNumber: string;
  planType: string;
  plan: IPlan;
  addOns: IAddOns[];
}

export interface IPlan {
  planInfo: string;
  price: number;
}

export interface IAddOns {
  addOnsInfo: string;
  price: number;
}

interface IListItems {
  step: string;
  stepName: string;
}

const listItems: IListItems[] = [
  { step: "STEP 1", stepName: "YOUR INFO" },
  { step: "STEP 2", stepName: "SELECT PLAN" },
  { step: "STEP 3", stepName: "ADD-ONS" },
  { step: "STEP 4", stepName: "SUMMARY" },
];

const initialState: IFormSubmission = {
  name: "",
  email: "",
  phoneNumber: "",
  planType: "",
  plan: {
    planInfo: "",
    price: 0,
  },
  addOns: [],
};

const validationSchema = Yup.object({
  name: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("This field is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("This field is required"),
  phoneNumber: Yup.number()
    .min(6000000000, "Minimum Limit reached.")
    .max(9999999999, "Maximum limit reached.")
    .required("This field is required"),
  planType: Yup.string().required("This field is required"),
  plan: Yup.object({
    planInfo: Yup.string(),
    price: Yup.number(),
  }).required("This field is required"),
  addOns: Yup.array()
    .of(
      Yup.object({
        addOnsInfo: Yup.string(),
        price: Yup.number(),
      })
    )
    .required("This field is required"),
});

function Main() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  function incrementIndex() {
    if (activeIndex >= 0 && activeIndex < listItems.length - 1) {
      setActiveIndex((prevVal) => prevVal + 1);
    }
  }

  function decrementIndex() {
    if (activeIndex >= 0 && activeIndex < listItems.length)
      setActiveIndex((prevVal) => prevVal - 1);
  }

  return (
    <main className="main">
      <Formik
        initialValues={initialState}
        validationSchema={validationSchema}
        onSubmit={(values: IFormSubmission) => {
          console.log(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <Layout>
            <div className="img-and-list">
              <picture>
                <source media="(max-width: 425px)" srcSet={bgImageMob} />
                <img
                  className="bg-img"
                  src={bgImage}
                  alt="blue color background with some decor"
                />
              </picture>
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
                  <Button type="button" handleClick={decrementIndex}>
                    Go Back
                  </Button>
                ) : null}
                {activeIndex > 2 && activeIndex <= 3 ? (
                  <Button type="submit">Confirm</Button>
                ) : (
                  <Button type="button" handleClick={incrementIndex}>
                    Next Step
                  </Button>
                )}
              </div>
            </div>
          </Layout>
        </Form>
      </Formik>
    </main>
  );
}

function App() {
  return <Main />;
}

export default App;
