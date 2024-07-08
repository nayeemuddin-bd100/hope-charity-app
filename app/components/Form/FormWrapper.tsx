import React from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

type FormWrapperProps = {
  children: React.ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
};
const FormWrapper = ({ children, onSubmit }: FormWrapperProps) => {
  const methods = useForm();
  const { handleSubmit, reset } = methods;

  const submitHandler: SubmitHandler<FieldValues> = (data) => {
    onSubmit(data);
    reset();
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(submitHandler)}>{children}</form>
    </FormProvider>
  );
};

export default FormWrapper;
