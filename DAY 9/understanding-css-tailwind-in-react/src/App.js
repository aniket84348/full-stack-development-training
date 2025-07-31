// external css
import './index.css'
import{AddingTailwind} from './AddingTailwind.js'
function App() {
    return (
        <div>
            {/* internal css */}
            <style>
                {`p{
                color:chocolate;
                }`}
            </style>
            <h1 style={{color:"black"}}>my react is working</h1>
            <p>I am Aniket</p>
            <h2>This is my external css styling</h2>
            <AddingTailwind/>
        </div>
    )
}

export { App };