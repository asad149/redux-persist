import React, { Fragment, useState } from "react";
import { Card, CardBody } from "reactstrap";
import { postData } from "../postData";
import { Colxx } from "./commons/CustomBootstrap";
import FormikCustomComponents from "./forms/FormikCustomComponents";
import * as Yup from "yup";
import { useLocation, useParams } from "react-router";

const AddPost = ({ setPost,setIsAddPost }) => {
  const params = useParams();
  const location = useLocation();

  const navigate = useLocation();

  console.log("params", params, location);

  const [initialValues, setInitialValues] = useState({});

  const handleSubmit = (value) => {
    console.log(value);

    setPost((prevData) => [
      ...prevData,
      {
        name: value?.name,
        email: value?.email,
        address: {
          street: value?.address,
        },
        company: {
          name: value?.company,
        },
      },
    ]);
         
    setIsAddPost(true);

  };

  const shape = {};
  const validationSchema = Yup.object().shape(shape);

  return (
    <Fragment>
      <div className="m-5">
        <div className="mb-2 ">
          <Colxx lg="12">
            <Card className="mb-4 mx-auto">
              <CardBody className="p-2 mt-3">
                <FormikCustomComponents
                  key={"knowYourUserForm"}
                  handleSubmit={handleSubmit}
                  formFields={postData}
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

export default AddPost;
