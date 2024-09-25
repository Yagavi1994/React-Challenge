import css from './App.module.css';
import SideBar from './components/Sidebar';
import NavBarSimple from './components/NavBarSimple'
import Content from './components/Content';


function App() {
  return (
    <div className={css.App}>
      <NavBarSimple />
      <SideBar />
      <Content />
    </div>
  );
}

export default App;