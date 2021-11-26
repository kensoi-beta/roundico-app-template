import Tomato from '../img/tomato.png'


export const ExamplePage = ({headerState, setHeaderState}) => {
  setHeaderState(true);

  return <div className="app-layout">
      <div className="app-name">
        Пример приложения на React JS
      </div>
      <div class="adaptive-block">
        <div class="adaptive-block-item centering">
            <img src={Tomato} width = "192px" alt="tomato"/>
        </div>
        <div class="adaptive-block-item x-centering">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
    </div>
    </div>
}