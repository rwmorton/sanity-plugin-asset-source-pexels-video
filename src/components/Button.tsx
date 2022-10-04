import * as React from 'react'

interface ButtonProps {
    color?: string
    handleOnClick?: React.MouseEventHandler<HTMLButtonElement>
    children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({color = 'blue',handleOnClick,children}) => {
    return (
        <button
            onClick={handleOnClick}
            className={`
                inline-flex px-2.5 py-1.5 border border-transparent text-xs font-medium rounded
                shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2
                ${color === 'blue'
                    ? "bg-blue-600 hover:bg-blue-500 focus:ring-blue-500"
                    : "bg-red-600 hover:bg-red-500 focus:ring-red-500"}
                justify-center items-center
            `}
        >
            {children}
        </button>
    )
}

export default Button
