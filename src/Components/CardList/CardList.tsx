import React from "react"
import Card from "../Card/Card"

interface Props {}

const CardList : React.FC<Props> = (props: Props): JSX.Element => {
  return (
    <div>
        <Card companyName="Apple" ticker="APPL" price={100} />
    </div>
  )
}

export default CardList