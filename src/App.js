import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div class="container">
        <header className="App-header"></header>
        <main>
          <Dictionary />
        </main>
      </div>
      <footer>
        <small>
          Coded by <a href="https://sandra-tsai-yun.netlify.app/">Sandra</a>
        </small>
      </footer>
    </div>
  );
}
