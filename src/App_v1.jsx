function App() {


    // JSX => JavaScript
  
    // React.createElement(
    // "main", 
    // {id:'container', title:'main section'},
  
    //   React.createElement('p', {id:'para'}, 'This is paragraph' )
    // )
  
    // React.createElement('h1', null, 'Hello world')
    // React.createElement('p', null, 'This is paragraph')
  
    return (
      
        <>
            <h1 className="important">Hello world</h1>  
            <p> This is paragraph</p>
  
            <label htmlFor="username"> Username</label>
            <input type="text" id="username"/>
        </>
  
    )
  }
  
  export default App;
  