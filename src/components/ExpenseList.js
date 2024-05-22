import React from 'react'
import ExpenseItem from './ExpenseItem'

const ExpenseList = () => {
 const expenses = [
    {id: 1231232, name: "shopping", cost:50 },
    {id: 1231232, name: "Holiday", cost:300 },
    {id: 1231232, name: "Tansportation", cost:70 },
    {id: 1231232, name: "Fuel", cost:40 },
    {id: 1231232, name: "Child care", cost:500 },
 ]

 return(
    <ul class='list-group mt-3 mb-3'>
				{expenses.map((expense) => (
					<ExpenseItem
						id={expense.id}
						name={expense.name}
						cost={expense.cost}
					/>
				))}
			</ul>
 )
}


export default ExpenseList