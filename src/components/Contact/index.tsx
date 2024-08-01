import { useState, FC, ChangeEvent } from "react"

interface MyPops {
    year: number;
    make: string;
    model: string;
   
}


export const Contact:FC = () => {

    const [state, setState] = useState<MyPops>({year: 2011, make: "Ford", model: "Kuga"})

    const updateYear = (event: ChangeEvent<HTMLInputElement>) => {
        setState(previousState => ({...previousState, year: Number(event.target.value)}))
    }
    
    const updateMake = (event: ChangeEvent<HTMLInputElement>) => {
        setState(previousState => ({...previousState, make: event.target.value}))
    }

    const updateModel = (event: ChangeEvent<HTMLInputElement>) => {
        setState(previousState => ({...previousState, model: event.target.value}))
    }

    return(
        <div>
            <p>My favorite car is {state.year} {state.make} {state.model} </p>
            <input type="number" value={state.year} onChange={updateYear}></input>
            <input type="text" value={state.make} onChange={updateMake}></input>
            <input type="text" value={state.model} onChange={updateModel}></input>
        </div>
        
    )
}