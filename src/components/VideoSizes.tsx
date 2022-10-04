import * as React from 'react'

interface SizeOption {
    option: string
    value: string
}

interface VideoSizesProps {
    defaultSize: string
    sizeOptions: SizeOption[]
    onSelect: any
}

const VideoSizes: React.FC<VideoSizesProps> = ({sizeOptions,onSelect}) => {
    const [selected,setSelected] = React.useState(sizeOptions[0].value)

    const handleChange = (event: any) => {
        setSelected(event.target.value)
        onSelect(event.target.value)
    }

    return (
        <div className="flex items-center space-x-2">
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                Size
            </label>
            <select
                value={selected}
                onChange={handleChange}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
            >
                {sizeOptions.map(size => (
                    <option
                        key={size.value}
                        value={size.value}
                    >
                        {size.option}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default VideoSizes
