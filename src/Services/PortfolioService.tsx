import axios from "axios";
import { PortfolioGet, PortfolioPost } from "../Models/Portfolio";
import { handleError } from "../Helpers/ErrorHandler";

export const portfolioAddAPI = async (symbol: string) => {
  try {
    const data = await axios.post<PortfolioPost>(process.env.REACT_APP_BACKEND_ENDPOINT+ 'portfolio/' + `?symbol=${symbol}`);
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const portfolioDeleteAPI = async (symbol: string) => {
  try {
    const data = await axios.delete<PortfolioPost>(process.env.REACT_APP_BACKEND_ENDPOINT+ 'portfolio/' + `?symbol=${symbol}`);
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const portfolioGetAPI = async () => {
  try {
    const data = await axios.get<PortfolioGet[]>(process.env.REACT_APP_BACKEND_ENDPOINT+ 'portfolio/');
    return data;
  } catch (error) {
    handleError(error);
  }
};