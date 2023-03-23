import { useEffect } from "react";
import { ArrowSvg } from "../../icons/Arrow";
import './Select.css';

function Select({ options }) {

  const optionsList = options.map((option, index) => {
    return <div key={index} className="custom-option opt" data-value={index} data-text={option}>{option}</div>;
  });

  return (
    <div className="custom-select">
      <div className="selected-option">
        <div className="selected-option-name" data-value={0} data-text={options[0]}>{options[0]}</div>
        <div className="arrow">
          <ArrowSvg />
        </div>
      </div>
      <div className="custom-options">
        <div>
          {optionsList}
        </div>
      </div>
    </div>
  )
}

export default Select;