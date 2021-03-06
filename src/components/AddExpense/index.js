import TitleBalancefy from "../Title";
import Input from "../Input"; 
import { InputAdornment } from "@mui/material";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import SelectBalancefy from "../Select";
import InputValue from "../InputValue";

const AddExpense = props => {
    return (
        <>
            <div>
                <div style={{ marginTop: "5%", width: "100%" }}>
                   <div style ={{height: "2px", width: "100%", backgroundColor: "#484949", marginBottom: "20px"}}></div>
                    <Input
                        mt={0.9}
                        label="Descrição"
                        type="primary"
                        width="100%"
                        value={props.descricaoValue}
                        onChange={props.onChangeDescricao}
                    ></Input>
                </div>
                <div
                    style={{
                        justifyContent: "space-between",
                        marginTop: "5%",
                        display: "flex",
                    }}
                >
                    <InputValue
                      label="Valor"
                      type="primary"
                      value={props.amountValue}
                      onChange={props.onChangeAmount}
                      width="267px"
                      adornment={
                        <InputAdornment position="end">
                          <CurrencyExchangeIcon />
                        </InputAdornment>
                      }
                    />

                    <SelectBalancefy
                        label="Categoria"
                        type="primary"
                        width="267px"
                        value={props.categoria}
                        onChange={props.onChangeCategoria}
                    ></SelectBalancefy>
                </div>
            </div>
        </>
    )
}

export default AddExpense;