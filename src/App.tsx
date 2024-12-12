import { useRef } from "react";
import Button from "./components/Button";
import Form, { type FromHandle } from "./components/Form";
import Input from "./components/Input";

function App() {
  const customForm = useRef<FromHandle>(null);
  function handleSave(data: unknown) {
    const extractedData = data as {
      name: string;
      age: string;
    };
    console.log(extractedData);
    customForm.current?.clear();
  }
  return (
    <main>
      <Form onSave={handleSave} ref={customForm}>
        <Input id="name" label="Your Name" type="text" />
        <Input id="age" label="Your Age" type="number" />
        <p>
          <Button type="submit">Save</Button>
        </p>
      </Form>
    </main>
  );
}

export default App;
