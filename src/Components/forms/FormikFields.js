import React from "react";
import  {CustomInput } from "reactstrap";

import { Formik, Form, Field } from "formik";

export const FormikCustomRadioGroup =({name, value, options, inline = false,onChange,onBlur})=>{
  
    const handleChange = (val) => {
    onChange(name, val);
    }
  
    const handleBlur = () => {
      onBlur(name, true);
    };
  
    
      return (
        <React.Fragment>
          {options.map((child, index) => {
            console.log(child,index)
            return (
              <Field
                key={`${child.key}_${child.key}_${index}`}
                type="radio"
                id={`${name}_${child.id}_${index}`}
                name={child.key}
                label={child.label}
                onChange={() => handleChange(child.key)}
                onBlur={handleBlur}
                checked={value === child.key}
                disabled={child.disabled}
                inline={inline}
              />
            );
          })}
        </React.Fragment>
      );
    }
  