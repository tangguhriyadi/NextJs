import React from 'react'

type Props = {
    isCompleted:boolean
}

const Label:React.FC<Props> = ({isCompleted}) => {
  return (
    <span className="text-center labelTodo" style={{backgroundColor: isCompleted ? 'green' : 'red', padding:'5px', borderRadius:'5px', minWidth:'110px'}}>
        {isCompleted ? (<>
            Completed
        </>) : (<>
            Uncompleted
        </>)}
    </span>
  )
}

export default Label