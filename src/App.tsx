import { ChangeEvent, useState } from "react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { useRecoilState } from "recoil";
import { textState } from "./store/text.atom";

interface Message {
  text: string;
}

function App() {
  const [message, setMessage] = useState<Message>({ text: "Hello World!" });
  const [text, setText] = useRecoilState(textState);

  function handleMessageChange(event: ChangeEvent<HTMLInputElement>): void {
    setMessage({ text: event.target.value });
  }

  const handleButtonClick = (): void => {
    setMessage({ text: "Hello React" });
  };

  return (
    <main className="container mx-auto p-4 space-y-4">
      <h1 className="text-3xl font-bold underline">Hello World!</h1>

      <Button onClick={handleButtonClick}>change message</Button>

      <div className="space-y-2">
        <Input
          type="text"
          value={message.text}
          onChange={handleMessageChange}
          aria-label="Message input"
        />
      </div>
      <div className="m-4">{message.text}</div>
      <Button onClick={(): void => setText("Hello React")}>change text</Button>
      <div className="m-4">{text}</div>
    </main>
  );
}

export default App;
