const API_URL = `http://localhost:3001`;

const fetchCompanies = async () => {
  try {
    const response = await fetch(`${API_URL}/api/companies`);
    const data = await response.json();
  } catch (error) {
    console.error("Error fetching data", error);
  }
};
