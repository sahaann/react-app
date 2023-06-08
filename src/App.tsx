import ListGroup from "./components/ListGroup";
function App() {
  let items = ["Bengaluru", "Chennai", "Mumbai", "Kochi"];

  return (
    <div>
      <ListGroup items={items} heading={"Cities"} />
    </div>
  );
}

export default App;
