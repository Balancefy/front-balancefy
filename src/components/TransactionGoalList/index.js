import Container from "../Container";
import * as React from 'react';
import TitleBalancefy from "../Title";
import { AuthContext } from "../../contexts/auth";
import { useState } from "react";
import { useEffect } from "react";
import api from "../../service/api";

export default function TransactionGoal(props) {
  const { user } = React.useContext(AuthContext)
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    api
      .get("/transaction/1")
      .then((res) => {
        setTransactions(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])



  return (
    <>
      <Container height="558px" width="652px" backgroundColor="#4B4B4B">
        <div style={{ padding: "27px 0px 0px 40px" , marginBottom:"10px"}}>
          <TitleBalancefy variant="h2">Movimentações</TitleBalancefy>
        </div>
        <div style={{ height: 420, width: '100%', overflow: "auto", maxHeight:420}}>
          {transactions.map((row) => {
            return (<>
              <div style={{borderBottom: "solid 5px #7DE2D1", borderRadius: "5px", paddingLeft: "40px", paddingRight: "30px", height:"35px", marginTop:"25px"}}>
                <div style={{ display:"flex", fontSize: "14px", justifyContent:"space-around"}}>
                  <div style={{width:"300px"}}>{row.descricao}</div>
                  <div style={{display:"flex", justifyContent:"flex-end", width:"100px"}}>R${row.valor}</div>
                  <div style={{display:"flex", justifyContent:"flex-end", width:"100px"}}>{row.tipo}</div>
                  <div style={{display:"flex", justifyContent:"flex-end", width:"100px"}}>{row.created_at}</div>
                </div>
              </div>
            </>)
          })}
        </div>
      </Container>
    </>
  );
}







// import { DataGrid } from '@mui/x-data-grid';
{/* <DataGrid
rows={rows}
columns={columns}
pageSize={5}
rowsPerPageOptions={[9]}
disableSelectionOnClick
/> */}
// const columns = [
//   {
//     field: 'Desc',
//     headerName: 'Descrição',
//     width: 250,
//     editable: false,
//     marginLeft: "40px"
//   },
//   {
//     field: 'Amount',
//     headerName: 'Valor(R$)',
//     type: 'number',
//     width: 100,
//     editable: false,
//   },
//   {
//     field: 'Type',
//     headerName: 'Tipo',
//     type: 'number',
//     width: 100,
//     editable: false,
//   },
//   {
//     field: 'date',
//     headerName: 'Data',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     editable: false,
//     width: 110
//   },
// ];

// const rows = [
//   { id: 1, desc: "UBER", amount: "R$1.000,00", type: "out", date: "26/02/2022" },
//   { id: 2, desc: "Roupa", amount: "R$1.000,00", type: "in", date: "26/02/2022" }
// ]

// const rows = [
//   { id: 1, Desc: 'UBER', Amount: 1000.00, Type: 'SAIDA', date: "26/02/2022" },
//   { id: 2, Desc: 'ROUPA', Amount: 1000.00, Type: 'ENTRADA', date: "26/02/2022" },
//   { id: 3, Desc: 'UBER', Amount: 1000.00, Type: 'SAIDA', date: "26/02/2022" },
  // { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  // { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  // { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  // { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  // { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  // { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  // { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  // { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];