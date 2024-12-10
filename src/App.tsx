import { useRef } from "react";
import Button from "./components/Button";
import Container from "./components/Container";
import Input from "./components/Input";

function App() {
  const nameRef = useRef<HTMLInputElement>(null);
  return (
    <main>
      <Input id="name" label="Your Name" type="text" ref={nameRef} />
      <Input id="age" label="Your Age" type="number" />
      <p>
        <Button>Button</Button>
      </p>
      <p>
        <Button href="https://google.com">Link</Button>
      </p>
      <p>
        <Container as="button">child component</Container>
      </p>
    </main>
  );
}

export default App;
