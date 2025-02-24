import axios from "axios";
import { Token } from "@/Consts/token"; 
import { TradeingApi } from "@/Services/TradeApi";

const Trade = () => {
  const url = TradeingApi;

  
  if (!Token) {
    alert("Token invalid or expired!");
    return;
  }

  
  if (!url) {
    alert("Api invalid!");
    return;
  }

  axios
    .get(url, {
      params: {
        give: "USDT",
        give_amount: 10,
        receive: "SHIB",
      },
      headers: {
        Authorization: `Bearer ${Token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
    .then((response) => {
      if (!response?.data) {
        alert("Invalid API response.");
        return;
      }

      
      if (!response.data.status) {
        alert(response.data.message || "An error occurred.");
      } else {
        console.log("API Response:", response.data);
      }
    })
    .catch((error) => {
      alert("An error occurred while fetching data.");
      console.error(error);
    });
};

export default Trade;