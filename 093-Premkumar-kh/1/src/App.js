function App() {
  return (
    <div>
      <div>
        <Header></Header>
      </div>
      <div>
        <MyContent></MyContent>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="bg-secondary p-4 sticky-top">
      <input
        className="fs-3 text-light bg-transparent mx-2"
        type="text"
        name="{appname}"
        id=""
        placeholder="appname"
      />
      <input
        className="fs-6 text-light bg-transparent mx-2"
        type="text"
        name="{studentname}"
        id=""
        placeholder="by Student_Name"
      />
      <input
        className="fs-6 text-light bg-transparent mx-2"
        type="text"
        name="{studentid}"
        id=""
        placeholder="Student_ID"
      />
    </div>
  );
}

function MyContent() {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <input
        className="p-4 w-75 mx-2 mt-2"
        type="text"
        name="{message}"
        id=""
        placeholder="Let's chat here"
        //style={{border-style: "rounded"}}
      />
      <input className="p-4 w-25 mt-2 mx-2" type="button" value="Send" />
    </div>

    
  );
}


export default App;
