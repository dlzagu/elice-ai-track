import React, { useState, useCallback } from "react";
import { FormProvider } from "./FormContext";
import { Form, TextInput, SubmitButton } from "./Form";

export default function DynamicFormApp() {
  const [result, setResult] = useState(undefined);
  const handleSubmit = useCallback((data) => {
    setResult(data);
  }, []);

  return (
    <>
      <FormProvider>
        <Form onSubmit={handleSubmit}>
          <TextInput label="test-input-1" placeholder="Test input." />
          <TextInput label="test-input-2" placeholder="Test input." />
          <TextInput label="test-input-3" placeholder="Test input." />
          <TextInput label="test-input-4" placeholder="Test input." />
          <SubmitButton>Submit</SubmitButton>
        </Form>
      </FormProvider>
      {result && (
        <pre>
          <code>{JSON.stringify(result, null, 2)}</code>
        </pre>
      )}
    </>
  );
}
