import React from 'react';
import Card from '../ui/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
function ExpenseItem(props){

    // const [title, setTitle] = useState(props.title);

    // const clickHandler = () => {
    //     setTitle('updated');
    //     // console.log('clicked!!!');
    // }
    return (
        <li>
            <Card className='expense-item'>
                <ExpenseDate date={props.date}/>
                <div className='expense-item__description'> 
                    <h2> { props.title } </h2>
                    <p className='expense-item__price'> ${ props.price } </p>
                </div>
                {/* <button onClick={clickHandler}>Change Title</button> */}
            </Card>
        </li>
    );
}
export default ExpenseItem;
