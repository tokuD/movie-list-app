import React from 'react'

type Props = {
  label: string
  name: string
  type: React.HTMLInputTypeAttribute
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}

const CustomInput = (props: Props) => {
  const { label, type, name, onChange } = props
  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={name}
        className="text-xl font-bold"
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        className="rounded-xl py-1 px-2 border"
        onChange={onChange}
      />
    </div>
  )
}

export default CustomInput
