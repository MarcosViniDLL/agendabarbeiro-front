import ReactDOM from 'react-dom';
import { AppRouter } from "./routes/index.jsx";

export const Main = () => {
  return (
    <div id="root"> {}
      <AppRouter />
    </div>
  )
}
  
ReactDOM.render(<Main />, document.getElementById('root'));
