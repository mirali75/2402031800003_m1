// import './App.css'
function Hello(){
    const getName = (yourname)=>{
        return yourname;
    }
    function handleclick(){
        alert("butten was clicked!")
    }
    const handleInput=(event)=>{
        console.clear()
        console.log("value:",event.target.value)
    }
   const name ="mirali"
   const name01="hadiya"
   return (
    <>
    <h1>hello,{getName(name)}</h1>
    <h1>bye,{getName(name01)}</h1>
    <button onClick={handleclick}>click me</button>
    <button onClick={()=>alert("hello from inline function!")}>say hello</button>
    <br/>
    <input type="text" onChange={handleInput} placeholder="type something"/>
    </>
    )
}
export default Hello
