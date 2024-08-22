import React, { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router'
import { CompanyCashFlow } from '../../company';
import { getCashFlowStatements } from '../../api';
import { formatLargeMonetaryNumber } from '../../Helpers/NumberFormatting';
import Table from '../Table/Table';
import Spinner from '../Spinner/Spinner';

interface Props {}

const config = [
    {
      label: "Date",
      render: (company: CompanyCashFlow) => company.date,
    },
    {
      label: "Operating Cashflow",
      render: (company: CompanyCashFlow) =>
        formatLargeMonetaryNumber(company.operatingCashFlow),
    },
    {
      label: "Investing Cashflow",
      render: (company: CompanyCashFlow) =>
        formatLargeMonetaryNumber(company.netCashUsedForInvestingActivites),
    },
    {
      label: "Financing Cashflow",
      render: (company: CompanyCashFlow) =>
        formatLargeMonetaryNumber(
          company.netCashUsedProvidedByFinancingActivities
        ),
    },
    {
      label: "Cash At End of Period",
      render: (company: CompanyCashFlow) =>
        formatLargeMonetaryNumber(company.cashAtEndOfPeriod),
    },
    {
      label: "CapEX",
      render: (company: CompanyCashFlow) =>
        formatLargeMonetaryNumber(company.capitalExpenditure),
    },
    {
      label: "Issuance Of Stock",
      render: (company: CompanyCashFlow) =>
        formatLargeMonetaryNumber(company.commonStockIssued),
    },
    {
      label: "Free Cash Flow",
      render: (company: CompanyCashFlow) =>
        formatLargeMonetaryNumber(company.freeCashFlow),
    },
  ];

const CashFlowStatement = (props: Props) => {

    const ticker = useOutletContext<string>();
    const [cashFlow, setCashFlow] = useState<CompanyCashFlow[]>();

    useEffect(() => {
        const fetchCashFlow = async() => {
            const result = await getCashFlowStatements(ticker)
            setCashFlow(result?.data)
        }
        fetchCashFlow();
    })


    return cashFlow ? (
        <Table config={config} data={cashFlow} />
      ) : (
        <Spinner />
    );
}

export default CashFlowStatement