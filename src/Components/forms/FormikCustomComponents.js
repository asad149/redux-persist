import React from "react";

import { Formik, Form, Field } from "formik";

import { Colxx } from "../commons/CustomBootstrap";

import * as Yup from "yup";

import { FormGroup, Label, Button } from "reactstrap";
import { FormikCustomRadioGroup } from "./FormikFields";

const FormikCustomComponents = ({
  handleSubmit,
  toggleModal,
  formFields,
  initialValues,
  validationSchema,
  formName,
}) => {
  function getFormField(
    values,
    setFieldValue,
    setFieldTouched,
    errors,
    touched,
    handleChange
  ) {
    const renderedFields = [];
    Object.values(formFields).forEach((field) => {
      renderedFields.push(
        <Colxx sm={field.colxx || "12"}>
          <FormGroup className="error-l-100" key={field.key}>
            <Label>{field.label}</Label>
            {field.type === "text" && (
              <Field
                className="form-control"
                name={field.key}
                id={field.key}
                disabled={field?.disabled}
                maxLength={field?.maxLength}
              />
            )}
               <div className="d-flex justify-content-center">
            {field.type === "radio" &&
              field.options.map((val, ind) => (
                <div >
                  
             <label className="m-2">
              <Field type="radio"
                              className="form-control"
                              name={field.key}
                              id={field.key}
                              disabled={field?.disabled}
                              maxLength={field?.maxLength}
             value={val.key} />
              {val.label}
            </label>
                </div>
              ))}
              </div>

            {field.type === "date" && (
              <>
                <Field
                  className="form-control"
                  type="date"
                  name={field.key}
                  id={field.key}
                  disabled={field?.disabled}
                  maxLength={field?.maxLength}  
                />
              </>
            )}

            {errors[field.key] ? (
              // && touched[field.name]
              <div className="invalid-feedback d-block">
                {errors[field.key]}
              </div>
            ) : null}
          </FormGroup>
        </Colxx>
      );
    });

    return renderedFields;
  }

  return initialValues && initialValues.isaccepted === undefined ? (
    <Formik
      enableReinitialize={true}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({
        handleSubmit,
        setFieldValue,
        setFieldTouched,
        handleChange,
        handleBlur,
        values,
        errors,
        touched,
        isSubmitting,
      }) => (
        <Form
          className="av-tooltip tooltip-label-right"
          key={formName}
          id={formName}
        >
          <FormGroup row>
            {getFormField(
              values,
              setFieldValue,
              setFieldTouched,
              errors,
              touched,
              handleChange
            )}
          </FormGroup>
          <Button
            className="m-1"
            color="secondary"
            outline
            onClick={toggleModal}
          >
            Cancel
          </Button>
          {"  "}
          <Button color="primary" type="submit">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  ) : (
    <Formik
      enableReinitialize={true}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({
        setFieldValue,
        setFieldTouched,
        handleChange,
        handleBlur,
        values,
        errors,
        touched,
        isSubmitting,
        submitForm,
      }) => (
        <Form
          className="av-tooltip tooltip-label-right"
          key={formName}
          id={formName}
        >
          <FormGroup row>
            {getFormField(
              values,
              setFieldValue,
              setFieldTouched,
              errors,
              touched,
              handleChange
            )}
          </FormGroup>
          <Button
            className="m-1"
            color="secondary"
            outline
            onClick={() => {
              setFieldValue("isaccepted", false, false);
              submitForm();
            }}
          >
            Reject
          </Button>
          {"  "}
          <Button
            color="primary"
            onClick={() => {
              setFieldValue("isaccepted", true, false);
              submitForm();
            }}
          >
            Cancel
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikCustomComponents;
