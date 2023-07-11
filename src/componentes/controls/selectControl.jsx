
const SelectControl = ({ value, id, options, handleChange}) => {
  return (
      <select className="form-select" id={id} value={value} onChange={handleChange}>
        {
          options?.map(option =>
            <option key={option.value} value={option.value}>{option.label}</option>    
          )
        }
      </select>
  )
}

export default SelectControl
