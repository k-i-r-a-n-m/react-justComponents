import { Box } from "@mui/material";
import Table from "./components/table/Table";

import { tableData } from "./data/tableData";

function App() {
  return (
    <>
      <Table
        headData={tableData.heading}
        rowData={tableData.rows}
        sx={{
          width: "100%",
        }}
        body={{}}
        rows={{}}
        cells={{}}
        headers={{}}
      />
    </>
  );
}

export default App;
