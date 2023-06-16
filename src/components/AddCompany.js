import React, { useState } from 'react'
import StockService from '../services/StockService';
import { useNavigate } from 'react-router-dom';

const AddCompany = () => {

    const [stock, setStock] = useState( {
        id: "",
        name: "",
        symbol: "",
        price: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const value = e.target.value;
        setStock( {...stock, [e.target.name]: value});
    }

    const reset = (e) => {
        e.preventDefault();
        setStock({
            id: "",
            name: "",
            symbol: "",
            price: "",
        });
    }

    const saveStock = (e) => {
        e.preventDefault();
        StockService.saveStock(stock).then((response) => {
            console.log(response);
            navigate("/companyList");
        }).catch((error) => {
            console.log(error);
        })
    }

  return (
    <div className="flex max-w-2xl mx-auto shadow border-b items-start justify-between px-2 py-2">
        <div className="px-8 py-8">
            <div className="font-thin text-2xl tracking-wider">
                <h1>Add New Company</h1>
            </div>

            <div className="items-center justify-center h-14 w-full my-4">
                <label className="block text-gray-600 text-sm font-normal">Symbol</label>
                <input 
                    type="text" 
                    name="symbol"
                    value={stock.symbol}
                    onChange={(e) => handleChange(e)}
                    className="h-10 w-96 border bg-white mt-2 px-2 py-2"></input>
            </div>

            <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
                <button 
                    onClick={saveStock} 
                    className="rounded text-white font-semibold bg-green-400 hover:bg-green-700 px-2 py-2">
                    Save
                </button>

                <button
                    onClick={reset} 
                    className="rounded text-white font-semibold bg-red-400 hover:bg-red-700 px-2 py-2">
                    Clear
                </button>
            </div>
        </div>

        <a href="/" className="hover:bg-blue-400 group flex items-center rounded-md bg-blue-500 text-white text-sm font-medium pl-2 pr-3 py-2 shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-backspace" viewBox="0 0 16 16"> <path d="M5.83 5.146a.5.5 0 0 0 0 .708L7.975 8l-2.147 2.146a.5.5 0 0 0 .707.708l2.147-2.147 2.146 2.147a.5.5 0 0 0 .707-.708L9.39 8l2.146-2.146a.5.5 0 0 0-.707-.708L8.683 7.293 6.536 5.146a.5.5 0 0 0-.707 0z"/> <path d="M13.683 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-7.08a2 2 0 0 1-1.519-.698L.241 8.65a1 1 0 0 1 0-1.302L5.084 1.7A2 2 0 0 1 6.603 1h7.08zm-7.08 1a1 1 0 0 0-.76.35L1 8l4.844 5.65a1 1 0 0 0 .759.35h7.08a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-7.08z"/> 
            </svg>
            <a className="px-3">
                Go Back
            </a>
        </a>

    </div>
  )
}

export default AddCompany