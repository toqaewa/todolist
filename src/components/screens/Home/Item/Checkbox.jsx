import cn from 'classnames'
import React from 'react'
import { BsCheck } from 'react-icons/bs'

const Checkbox = ({isCompleted}) => {
  return (
    <div className={cn('border-2 rounded-lg border-amber-700 w-6 h-6 mr-3 flex items-center justify-center', 
    {
        'bg-amber-700' : isCompleted,
    }
    )}
    >
        {isCompleted &&
        <BsCheck size={24} className='text-slate-900' />}
    </div>
  )
}

export default Checkbox