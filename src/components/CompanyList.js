import React, { useEffect, useState } from 'react';
import StockService from '../services/StockService';
import Company from '../components/Company';

const CompanyList = () => {

  const [loading, setLoading] = useState(true);
  const [companies, setCompanies] = useState(null);

  const [company, setCompany] = useState({
    id: "",
    name: "",
    symbol: "",
    price: "",
  });
  
  useEffect(() => {
    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await StockService.getStocks();
            setCompanies(response.data);
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    };
    fetchData();
  }, []);

  const deleteStock = (e, id) => {
    e.preventDefault();
    StockService.deleteStock(id).then((res) => {
        if(companies) {
            setCompanies((prevElement) => {
                return prevElement.filter((stock) => stock.id !== id);
            });
        }
    });
  };

  return (
    <div className="container mx-auto my-8">
        <div className="flex shadow border-b">
            <table className="min-w-full">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">Company Name</th>
                        <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">Company Symbol</th>
                        <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">Price</th>
                        <th className="text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6">Action</th>
                    </tr>
                </thead>
                {!loading && (
                    <tbody className="bg-white">
                        {companies.map((stock) => (
                            <Company stock={stock} deleteStock={deleteStock} key={stock.id}></Company>
                        ))}
                    </tbody>
                )}
            </table>
        </div>
    </div>
  );
};

export default CompanyList;