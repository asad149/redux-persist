import React, { Fragment, useState, useEffect } from "react";
import { Card, CardBody, Button } from "reactstrap";

import { Colxx } from "./commons/CustomBootstrap";

import FormikCustomComponents from "./forms/FormikCustomComponents";

import * as Yup from "yup";

import { useSelector, useDispatch } from "react-redux";
import { addUser } from "../redux/features/user/userSlice";

import { formData } from "../formData";

const AppForm = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();


  const [initialValues, setInitialValues] = useState({});

  const handleSubmit = (values) => {

    dispatch(addUser(values));
  };

  console.log("These are formik Values ", user);


  const shape = {
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .matches(/^[A-Za-z\\-\s]+$/, "Invalid Name")
      .required("Name is required!"),
      email: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .email("Invalid Email")
      .required("Email is required!")
  };

  const validationSchema = Yup.object().shape(shape);

  return (
    <Fragment>
      <div className="m-5" >
        {user?.name}
        <div className="mb-2 ">
          <Colxx lg="12">
            <Card className="mb-4 mx-auto" style={{background:"#efefef"}}>
              <CardBody className="p-2 mt-3">
                <FormikCustomComponents
                  key={"knowYourUserForm"}
                  handleSubmit={handleSubmit}
                  formFields={formData}
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  formName={"knowYourUserForm"}
                />
              </CardBody>
            </Card>
          </Colxx>
        </div>
      </div>
    </Fragment>
  );
};

export default AppForm;
