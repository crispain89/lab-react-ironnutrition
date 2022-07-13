import './App.css';
import foods from './foods.json'
import FoodBox from './componentes/FoodBox'
import AddFoodForm from './componentes/AddFoodForm'
import Search from './componentes/Search'
import { useState } from 'react';

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [realFooder, setRealFooder] = useState(foodList)

  const deleteFood = (name) => { 
    console.log(name)
    const newList = foodList.filter(food => food.name !== name)
    setFoodList(newList)
    setRealFooder(newList)
  }

  const addFood = (values) =>{
    console.log(values)
    setFoodList([...foodList, values])
    setRealFooder([...realFooder, values])

    console.log('lista',foodList)
  }

  const handleSearch = (event) => { 
    console.log('evento', event)
    
    const findFooder= foodList.filter(
      food => {
        return (
          food
          .name
          .toLowerCase()
          .includes(event.toLowerCase())
        );
      }
    );
    setRealFooder(findFooder)
    console.log(realFooder);

  }

  return (
  <div className="container">
    <Search search={ handleSearch}/>
    <AddFoodForm add={addFood} />
    <div className="listFood">
      {realFooder.map((food,index) => { 
        return <FoodBox key={food.name + index} deleteFood={ deleteFood} name={food.name} calories={food.calories} image={ food.image} servings={ food.servings} />
    })}
    </div>
  </div>
  )
}
export default App;