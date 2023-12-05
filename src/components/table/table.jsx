import { TBody } from "./tbody"
import { THead } from "./thead"
import { Tr } from "./tr"
import { TFoot } from "./tfoot"
import { Th } from "./th"
import { Td } from "./td"
import "./style.css"

export const Table = ({ children, ...props }) => {
    return <table className="table" {...props}>{children}</table>
}

Table.TBody = TBody
Table.THead = THead
Table.TFoot = TFoot
Table.Tr = Tr
Table.Td = Td
Table.Th = Th