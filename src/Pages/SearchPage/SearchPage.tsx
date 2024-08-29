import CardList from "../../Components/CardList/CardList";
import ListPortfolio from "../../Components/Portfolio/ListPotfolio/ListPortfolio";
import Search from "../../Components/Search/Search";
import { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react';
import { searchCompanies } from "../../api";
import { CompanySearch } from "../../company";
import { PortfolioGet } from "../../Models/Portfolio";
import {
  portfolioAddAPI,
  portfolioDeleteAPI,
  portfolioGetAPI,
} from "../../Services/PortfolioService";
import { toast } from "react-toastify";

interface Props {}

const SearchPage = (props: Props) => {
    const [search, setSearch] = useState<string>('');
    const [searchResults, setSearchResults] = useState<CompanySearch[]>([]);
    const [serverError, setServerError] = useState<string>('');
    const [portfolioValues, setPortfolioValues] = useState<PortfolioGet[] | null>([]);
  
    const handleChange = (e : ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }
  
    const onSearchSubmit = async(e : SyntheticEvent) =>{
      e.preventDefault();
      const result = await searchCompanies(search);
      if(typeof result === "string"){
        setServerError(result);
      } else if(Array.isArray(result.data)){
        setSearchResults(result.data)
      }
    }

    const getPortfolio = () => {
      portfolioGetAPI()
        .then((res : any) => {
          if (res?.data) {
            setPortfolioValues(res?.data);
          }
        })
        .catch((e) => {
          setPortfolioValues(null);
        });
    };
  
    const onPortfolioCreate = (e : any) => {
      e.preventDefault();
      portfolioAddAPI(e.target[0].value)
      .then((res) => {
        if (res?.status === 204) {
          toast.success("Stock added to portfolio!");
          getPortfolio();
        }
      })
      .catch((e) => {
        toast.warning("Could not add stock to portfolio!");
      });
    };
  
    useEffect(() => {
      getPortfolio();
    }, []);


    const onPortDelete = (e:any) => {
      e.preventDefault();
      portfolioDeleteAPI(e.target[0].value).then((res) => {
        if (res?.status == 200) {
          toast.success("Stock deleted from portfolio!");
          getPortfolio();
        }
      });
    }
  return (
    <>
        <Search search={search} handleChange={handleChange} onSearchSubmit={onSearchSubmit}/>
        <ListPortfolio onPortDelete={onPortDelete} portfolioValues={portfolioValues!} />
        {serverError && <h1>{serverError}</h1>}
        <CardList onPortfolioCreate={onPortfolioCreate} searchResults={searchResults} />
    </>
  )
}

export default SearchPage