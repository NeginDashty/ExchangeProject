import axios from "axios";

const token = "1299570|rXMGiTXeQL2vNCXoj7I8V0AEhqZ0Ln5fGM97bC1I";

const Trade = () => {
    axios
      .get("https://test.tetherland.app/api/v5/user/converter/submit", {
        params: {
          give: "USDT",
          give_amount: 10,
          receive: "SHIB",
        },
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((response) => {
        if (!response.data.status) {
          alert(response.data.message); 
        } else {
          console.log("API Response:", response.data); 
        }
      })
      .catch((error) => {
        alert("An error occurred while fetching data.");
      });
  };
  
export default Trade;
  