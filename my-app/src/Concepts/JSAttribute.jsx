import logo from '../logo.png'  // ✅ import it first

function JSAttribute() {

  function handleClick() {
    alert("Clicked!");
  }

  return (
    <div>
      <h1 className="title">Hello</h1>
      <button onClick={handleClick}>Click</button>
      <p style={{ color: "blue", fontSize: "20px" }}>Styled text</p>
      <img src={logo} alt="Logo" />   {/* ✅ use imported logo */}
      <input type="text" />
    </div>
  );
}

export default JSAttribute;