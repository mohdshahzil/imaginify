import React from "react";
import Header from "@/components/shared/Header";
import { transformationTypes } from "@/constants";
import TransformationForm from "@/components/shared/TransformationForm";

const AddTransformationTypePage = ({ params: { type } }: SearchParamProps) => {
  const transformation = transformationTypes[type];

  return (
    <>
      <Header
        title={transformation.title}
        subtitle={transformation.subTitle}
      ></Header>
      <TransformationForm></TransformationForm>
    </>
  );
};

export default AddTransformationTypePage;
