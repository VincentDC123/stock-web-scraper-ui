import React from 'react';
import StockService from '../services/StockService';

const Company = ({stock, deleteStock}) => {

  const update = (e, id) => {
    e.preventDefault();
    StockService.updateStock(stock, id);
    setTimeout(() => {
        window.location.reload();
    }, 1500);
  };

  return (
    <tr key={stock.id}>
        <td className="text-left py-4 px-6 whitespace-nowrap">
            <div className="text-sm text-gray-500">
                {stock.name}
            </div>
        </td>
        <td className="text-left py-4 px-6 whitespace-nowrap">
            <div className="text-sm text-gray-500">
                {stock.symbol}
            </div>
        </td>
        <td className="text-left py-4 px-6 whitespace-nowrap">
            <div className="text-sm text-gray-500">
                {stock.price}
            </div>
        </td>
        <td className="text-right py-4 px-6 whitespace-nowrap font-medium text-sm">
            <a 
                
                onClick={(e,id) => update(e, stock.id)}
                className="text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer">
                Update
            </a>
            <a 
                onClick={(e,id) => deleteStock(e, stock.id)}
                className="text-indigo-600 hover:text-indigo-800 hover:cursor-pointer">
                Delete
            </a>
        </td>
    </tr>
  )
}

export default Company