import CardList from "../../Components/CardList/CardList";
import Hero from "../../Components/Hero/Hero";
import ListPortfolio from "../../Components/Portfolio/ListPotfolio/ListPortfolio";
import Search from "../../Components/Search/Search";
import { ChangeEvent, SyntheticEvent, useState } from 'react';
import { searchCompanies } from "../../api";
import { CompanySearch } from "../../company";

interface Props {}

const SearchPage = (props: Props) => {
    const [search, setSearch] = useState<string>('');
    const [searchResults, setSearchResults] = useState<CompanySearch[]>([]);
    const [serverError, setServerError] = useState<string>('');
    const [portfolioValues, setPortfolioValues] = useState<string[]>([]);
  
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
  
  
    const onPortfolioCreate = (e : any) => {
      e.preventDefault();
      const exists = portfolioValues.find((value) => value === e.target[0].value)
      if(exists) return;
  
      const updatedPortfolio = [
        ...portfolioValues,
        e.target[0].value
      ];
      setPortfolioValues(updatedPortfolio);
    };
  
    const onPortDelete = (e:any) => {
      e.preventDefault();
      const removed = portfolioValues.filter((value) => {
        return value !== e.target[0].value
      })
      setPortfolioValues(removed);
    }
  return (
    <>
        <Search search={search} handleChange={handleChange} onSearchSubmit={onSearchSubmit}/>
        <ListPortfolio onPortDelete={onPortDelete} portfolioValues={portfolioValues} />
        {serverError && <h1>{serverError}</h1>}
        <CardList onPortfolioCreate={onPortfolioCreate} searchResults={searchResults} />
    </>
  )
}

export default SearchPage