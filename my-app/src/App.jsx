// import JavascriptJSX from './javascriptJSX'
import JSAttribute from './Concepts/JSAttribute'
import Component from './Concepts/Component'
import ComponentLogic from './Concepts/ComponentLogic'
import ConditionalRendering from './Concepts/ConditionalRendering'
import Props from './Concepts/Props'
import DestructingProps from './Concepts/DestructingProps'
import Arrayprops from './Concepts/Arrayprops'
import Button from './Concepts/Button'
import Buttonmodule from './Concepts/Buttonmodule'
import TailWindDemo from './Concepts/TailWindDemo'
import StylesComp from './Concepts/StylesComp'
import ButtonComponent from './Concepts/ButtonComponent'
import Cardcomponent from './Concepts/Cardcomponent'
import Inputcomponent from './Concepts/Inputcomponent'


function App() {
  return ( 
  <div>
    <h1>Hello World</h1>
    <h2>Title</h2>
    <h3>Paragraph</h3>
  <button onClick={() => alert("Clicked !")}>Click me</button>
  <JSAttribute />
  <Component />
  <ComponentLogic />
  <ConditionalRendering />
  <Props />
  <DestructingProps />
  <Arrayprops />
  <Button />
  <Buttonmodule />
  <TailWindDemo />
  <StylesComp />
  <ButtonComponent />
  <Cardcomponent />
  <Inputcomponent />


  </div> 
  


  );
  
}

export default App;