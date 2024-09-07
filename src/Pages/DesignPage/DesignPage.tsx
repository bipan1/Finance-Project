import Table from '../../Components/Table/Table'
import RatioList from '../../Components/RatioList/RatioList'
import { testIncomeStatementData } from '../../Components/Table/testData'

interface Props {}

const tableConfig = [
  {
    label: "Market Cap",
    render: (company: any) =>
    company.marketCapTTM,
    subTitle: "Total value of all a company's shares of stock",
  },
]

const DesignPage = (props: Props) => {
  return (
    <>
      <h1>Finshark design page.</h1>
      <Table data={testIncomeStatementData} config={tableConfig} />
      <RatioList data={testIncomeStatementData} config={tableConfig}/>
    </>
  )
}

export default DesignPage