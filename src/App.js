import { useState } from 'react';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Button } from '@mui/material';
import MUIRichTextEditor from "mui-rte";
import { stateToHTML } from 'draft-js-export-html';
import ReactHtmlParser from 'react-html-parser';
import './App.css';

function App() {

  const [initialData, setInitialData] = useState('')

  const save = (data) => {
    console.log(data);
  };

  const getHTMLData = (value) => {
    stateToHTML(value.getCurrentContent())
    setInitialData(stateToHTML(value.getCurrentContent()))
  }

  const myTheme = createTheme({
    // Set up your custom MUI theme here
  });

  const getData = () => {
    console.log('Initial data ', initialData)
  }

  return (
    <div className="App">
      <ThemeProvider theme={myTheme}>
        <MUIRichTextEditor
          label="Type something here..."
          onSave={save}
          inlineToolbar={true}
          onChange={ value => getHTMLData(value) }
        />
      </ThemeProvider>
      
      <div>
        {ReactHtmlParser(initialData)}
      </div>
      <Button variant="contained" onClick={() => getData()}>Hello World</Button>
    </div>
  );
}

export default App;
