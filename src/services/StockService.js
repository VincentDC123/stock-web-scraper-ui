import axios from "axios";

const STOCK_API_BASE_URL = "http://localhost:8080/api/v1/stocks";

class StockService {
    saveStock(stock) {
        return axios.post(STOCK_API_BASE_URL, stock);
    }

    getStocks() {
        return axios.get(STOCK_API_BASE_URL);
    }

    deleteStock(id) {
        return axios.delete(STOCK_API_BASE_URL + "/" + id);
    }

    getStockById(id) {
        return axios.get(STOCK_API_BASE_URL + "/" + id);
    }

    updateStock(stock, id) {
        return axios.put(STOCK_API_BASE_URL + "/" + id, stock);
    }
}

export default new StockService();