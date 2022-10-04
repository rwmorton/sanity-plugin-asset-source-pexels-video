import * as React from 'react'

import {ExclamationIcon} from '@heroicons/react/solid'

interface EndOfListProps {
    title: string
    message: string
}

const EndOfList: React.FC<EndOfListProps> = ({title,message}) => {
  return (
    <div className="rounded-md bg-red-50 p-8 mt-8">
      <div className="flex">
        <div className="flex-shrink-0">
          <ExclamationIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-red-800">{title}</h3>
          <div className="mt-2 text-sm text-red-700">
            <p>
                {message}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EndOfList
