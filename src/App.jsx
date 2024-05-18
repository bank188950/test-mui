import { useState } from "react";
import { Typography } from "@mui/material";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Typography color="primary" variant="h1" gutterBottom>
        Hello World 1111
      </Typography>
      <Typography variant="h2" gutterBottom>
        Hello World 2222
      </Typography>
      <Typography variant="h3" gutterBottom>
        Hello World 3333
      </Typography>
    </>
  );
}

export default App;
