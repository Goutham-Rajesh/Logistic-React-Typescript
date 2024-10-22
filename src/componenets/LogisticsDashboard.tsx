import React, { useState } from 'react';
import '../App.css';
import WarehouseInventory from './WarehouseInventory';
import DeliveryStatus from './DeliveryStatus';

const LogisticsDashboard: React.FC = () => {
  const [warehouseItems, setWarehouseItems] = useState<number>(100);
  const [truckCount, setTruckCount] = useState<number>(0);

  const handleTruckDeparture = (itemCount: number) => {
    if (warehouseItems >= itemCount) {
      setWarehouseItems(warehouseItems - itemCount); // Deduct the specified number of items
      setTruckCount(truckCount + 1); // Increment the truck count
    } else {
      alert("Not enough items in the warehouse to dispatch this truck!");
    }
  };

  return (
    <div className="dashboard">
      <h1>Logistics Dashboard</h1>
      <div className="dashboard-content">
        <WarehouseInventory itemCount={warehouseItems} />
        <DeliveryStatus onTruckDeparture={handleTruckDeparture}
         warehouseItems={warehouseItems}
        />
        <p>Number of trucks that have departed: {truckCount}</p>
      </div>
    </div>
  );
};

export default LogisticsDashboard;
