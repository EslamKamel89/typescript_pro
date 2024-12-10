import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  return (
    <main>
      <Input id="name" label="Your Name" type="text" />
      <Input id="age" label="Your Age" type="number" />
      <p>
        <Button>Button</Button>
      </p>
      <p>
        <Button href="https://google.com">Link</Button>
      </p>
    </main>
  );
}

export default App;
