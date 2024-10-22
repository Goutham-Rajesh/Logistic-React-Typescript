import React, { useState } from 'react';

// Define props for DeliveryStatus
interface DeliveryStatusProps {
  onTruckDeparture: (itemCount: number) => void;
  warehouseItems: number; // New prop to check available items
}

const DeliveryStatus: React.FC<DeliveryStatusProps> = ({ onTruckDeparture, warehouseItems }) => {
  const [itemCount, setItemCount] = useState<number>(5); // Default to minimum

  const handleDispatch = () => {
    if (itemCount >= 5 && itemCount <= 20) {
      onTruckDeparture(itemCount);
      setItemCount(5); // Reset to minimum after dispatch
    } else {
      alert("Please enter a value between 5 and 20.");
    }
  };

  return (
    <div className="delivery-status">
      <h2>Delivery Status</h2>
      <p>Current Items in Warehouse: {warehouseItems}</p>
      <input
        type="number"
        value={itemCount}
        min={5}
        max={20}
        onChange={(e) => setItemCount(Number(e.target.value))}
      />
      <button onClick={handleDispatch}>Dispatch Truck</button>
    </div>
  );
};

export default DeliveryStatus;
