import React, { useState } from 'react';

type Props = {
  messages: string[];
}

const Greeting: React.FC<Props> = ({ messages }) => {
  const randomMessage = (): string => messages[Math.floor(Math.random() * messages.length)];

  const [greeting, setGreeting] = useState<string>(messages[0]);

  return (
    <div>
      <h3>{greeting}！ 訪問いただきありがとうございます！</h3>
      <button onClick={() => setGreeting(randomMessage())}>
        新しい挨拶
      </button>
    </div>
  );
};

export default Greeting;
