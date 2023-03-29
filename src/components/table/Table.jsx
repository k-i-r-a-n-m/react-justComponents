import { styled } from "@mui/system";
import { Link, Tooltip,TableRow } from "@mui/material";
import uuid from "react-uuid";

const CustomTable = styled("table")(({ theme }) => ({
  border: "1px solid #ccc",
  // width: " 100%",
  // borderSpacing: "0px",
  borderCollapse: "collapse",
  fontFamily: "Roboto,sans-serif",
  fontSize: "14px",
}));

const TableBody = styled("tbody")(({ theme }) => ({
  "& tr:nth-of-type(even)": {
    backgroundColor: "#fcfcfc",
  },
  "& tr:hover": {
    backgroundColor: "#f5f5f5",
  },
}));

const TableHeader = styled("th")(({ theme }) => ({
  backgroundColor: "#405467",
  textTransform: "uppercase",
  color: "white",
  textAlign: "left",
  padding: "7px 16px",
  paddingLeft: "1rem",
  fontWeight: "400",
}));

// const TableRow = styled("tr")(({ theme }) => ({}));//

const TableCell = styled("td")(({ theme }) => ({
  borderBottom: "1px solid #e9e9e9",
  padding: "0.25rem",
  paddingLeft: "1rem",
  padding: "7px 16px",
  color: "#474747",
}));

const Table = ({
  headData, //structure --> [{id,label,headingSx,props}...]
  rowData, //structure --> [{id,rowData:[{id,cellData,cellSx},..],rowSx},...]
  rows,
  headers,
  cells,
  body,
  sx,
  ...rest
}) => {
  return (
    <>
      <CustomTable sx={sx} {...rest}>
        <TableBody sx={body.sx} {...body.props}>
          <TableRow sx={rows.sx} {...rows.prop}>
            {headData.map((eachHead) => (
              <TableHeader
                key={eachHead.id}
                sx={{ ...headers.sx, ...eachHead.headingSx }}
                {...{ ...headers.props, ...eachHead.props }}
              >
                {eachHead.label}
              </TableHeader>
            ))}
          </TableRow>

          {rowData.map((eachRow) => (
            <TableRow
            selected={true}
              key={eachRow.id}
              sx={{ ...rows.sx, ...eachRow.rowSx }}
              {...{ ...rows.props, ...eachRow.props }}
            >
              {eachRow.rowData.map((eachCell, index) => (
                <TableCell
                  key={eachCell.id}
                  sx={{ ...cells.sx, ...eachCell.cellSx }}
                  {...{ ...cells.props, ...eachCell.props }}
                >
                  {eachCell.cellData}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </CustomTable>
    </>
  );
};

export default Table;

// <Table heading={} data={}  headingStyles={} rowStyles={} sx={}>
