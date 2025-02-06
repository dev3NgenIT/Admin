import React, { useEffect, useState } from "react";

const ToggleComponent = ({ state, onToggleChange }) => {
  const [isActive, setIsActive] = useState(state === "active");

  const handleToggle = () => {
    const newState = !isActive ? "active" : "inactive"; // Toggle state
    setIsActive(!isActive); // Update the internal state
    if (onToggleChange) {
      onToggleChange(newState); // Notify the parent about the state change
    }
  };

  useEffect(() => {
    setIsActive(state === "active"); // Sync the internal state with the parent's state
  }, [state]);

  return (
    <div className="">
      <label className="flex items-center">
        <input
          type="checkbox"
          className="toggle"
          checked={isActive}
          onChange={handleToggle}
        />
        <span className="ml-2">{isActive ? "Active" : "Inactive"}</span>
      </label>
    </div>
  );
};

export default ToggleComponent;
