import "./App.css";
import { inject } from '@vercel/analytics';

inject();
function openInColab() {
  // get the notebook link from the input box
  const notebookLink = document.getElementById("notebookLink").value;
  // create a new window to open the notebook in colab
  if (notebookLink) {

    if(notebookLink.split("github.com/").length === 1 || !notebookLink.endsWith(".ipynb")) {
      alert("Please enter a valid github link")
      return;
    }
    window.open(
      "https://colab.research.google.com/github/" +
        notebookLink.split("github.com/")[1]
    );
  }
}

function openInKaggle() {
  // get the notebook link from the input box
  const notebookLink = document.getElementById("notebookLink").value;
  if (notebookLink) {

    // check if the link is a github link and ends with .ipynb
    if(notebookLink.split("github.com/").length === 1 || !notebookLink.endsWith(".ipynb")) {
      alert("Please enter a valid github link")
      return;
    }


    window.open("https://kaggle.com/kernels/welcome?src=" + notebookLink);
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Open in Colab or Kaggle</h1>

        <br />

        <p>Enter the link to your Jupyter notebook on github</p>

        <br />
        <div className="AppMain">
          <input
            type="text"
            id="notebookLink"
            placeholder="Enter Notebook Link"
          />

          <br />

          <button onClick={openInColab}>Open in Colab</button>
          <br />
          <button onClick={openInKaggle}>Open in Kaggle</button>
        </div>
      </header>
    </div>
  );
}

export default App;
