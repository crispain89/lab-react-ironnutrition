import React from 'react'
import { Button} from 'antd'

function FoodBox({ deleteFood,name, calories, image,servings}) {
  
    return (
        <div className='foodBox'>
            <p><span className='boldBlack'>{ name}</span></p>
            
            <img className='foodBox__foto'src={image} alt='foto de alimento'/>
            <p><span className='boldBlack'>Calories: </span>{calories}</p>
            <p><span className='boldBlack'>Servings: </span>{servings}</p>
            <p><span className='boldBlack'>Total Calories: </span>{ calories}</p>
            <Button type="primary" onClick={()=>deleteFood(name)}>Delete</Button>
        </div>
  )
}

export default FoodBox