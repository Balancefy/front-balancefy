import Container from "../Container";
import * as React from 'react';
import TitleBalancefy from "../Title";
import { DataGrid } from '@mui/x-data-grid';
import { AuthContext } from "../../contexts/auth";

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'id',
    headerName: '',
    width: 150,
    editable: true,
  },
  {
    field: 'desc',
    headerName: '',
    width: 150,
    editable: true,
  },
  {
    field: 'amount',
    headerName: '',
    width: 150,
    editable: true,
  },
  {
    field: 'type',
    headerName: '',
    width: 150,
    editable: true,
  },
  {
    field: 'date',
    headerName: '',
    width: 150,
    editable: true,
  }
]

const rows = [
  { id: 1, desc: "UBER", amount: "R$1.000,00", type: "out", date: "26/02/2022" },
  { id: 2, desc: "Roupa", amount: "R$1.000,00", type: "in", date: "26/02/2022" }
]

export default function TransactionGoal(props) {
  const { user } = React.useContext(AuthContext)

  const [transaction, setTransaction] = React.useState("");

  return (
    <>
      <Container height="580px" width="632px" backgroundColor="#4B4B4B">
        <div style={{ padding: "27px 0px 0px 40px" }}>
          <TitleBalancefy variant="h2">Movimentações</TitleBalancefy>
        </div>
        <div>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
          />
        </div>
      </Container>
    </>
  );
} 