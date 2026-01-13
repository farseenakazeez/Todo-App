
import Sample from "./Sample"
function App() {
 
let userName = 'sam'
let age = 24
  return  (
    <>
      <Sample userName = {userName} age = {24} isLogin={true}/>
      <Sample userName = {'bale'} age={30} isLogin={false}/>
  
    </>
  )


}

export default App
