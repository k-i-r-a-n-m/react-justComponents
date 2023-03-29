import DeleteButton from "../components/button/DeleteButton";
import { Tooltip, Link } from "@mui/material";

const LinkAndTooltip = ({ text }) => {
  return (
    <Tooltip title="Click here to Edit" arrow placement="bottom">
      <Link href="#">{text}</Link>
    </Tooltip>
  );
};

const tableData = {
  heading: [
    {
      id: 1,
      label: "pc",
      headingSx: { width: "30%" },
      props: { onClick: () => alert("Pc clicked") },
    },
    { id: 2, label: "cedNet Customer", headingSx: { width: "30%" } },
    { id: 3, label: "pricing Account", headingSx: { width: "30%" } },
    { id: 4, label: "", headingSx: { width: "10%" } },
  ],
  rows: [
    {
      id: "row-1",
      rowData: [
        { id: "r1-c1", cellData: "0007 -Yale - West Chester", cellSx: {} },
        {
          id: "r1-c2",
          cellData: <LinkAndTooltip text={"BUCKEYE WELDING SUPPLY CO"} />,
          cellSx: {},
          props: {},
        },
        { id: "r1-c3", cellData: "13609", cellSx: {} },
        { id: "r1-c4", cellData: <DeleteButton />, cellSx: {} },
      ],
      rowSx: {},
      props: {},
    },
    {
      id: "row-2",
      rowData: [
        { id: "r2-c1", cellData: "3298 -Indio - CED", cellSx: {} },
        {
          id: "r2-c2",
          cellData: <LinkAndTooltip text={"BUCKEYE WELDING SUPPLY CO"} />,
          cellSx: {},
        },
        { id: "r2-c3", cellData: "19234", cellSx: {} },
        { id: "r2-c4", cellData: <DeleteButton />, cellSx: {} },
      ],
      rowSx: {},
    },
    {
      id: "row-3",
      rowData: [
        { id: "r3-c1", cellData: "3427 -Harahan - CED", cellSx: {} },
        { id: "r3-c2", cellData: "BUTCH HUESKE VMI TEST ACCOUNT", cellSx: {} },
        { id: "r3-c3", cellData: "63254", cellSx: {} },
        { id: "r3-c4", cellData: <DeleteButton />, cellSx: {} },
      ],
      rowSx: {},
    },
    {
      id: "row-4",
      rowData: [
        { id: "r4-c1", cellData: "0007 -Yale - West Chester", cellSx: {} },
        { id: "r4-c2", cellData: "ALL ELECTRIC", cellSx: {} },
        { id: "r4-c3", cellData: "13609", cellSx: {} },
        { id: "r4-c4", cellData: <DeleteButton />, cellSx: {} },
      ],
      rowSx: {},
    },
    {
      id: "row-5",
      rowData: [
        { id: "r5-c1", cellData: "0007 -Yale - West Chester", cellSx: {} },
        { id: "r5-c2", cellData: "3D ELECTRIC SERVICE LLC", cellSx: {} },
        { id: "r5-c3", cellData: "13609", cellSx: {} },
        { id: "r5-c4", cellData: <DeleteButton />, cellSx: {} },
      ],
      rowSx: {},
    },
    {
      id: "row-6",
      rowData: [
        { id: "r6-c1", cellData: "0007 -Yale - West Chester", cellSx: {} },
        { id: "r6-c2", cellData: "3D ELECTRIC SERVICE LLC", cellSx: {} },
        { id: "r6-c3", cellData: "13609", cellSx: {} },
        { id: "r6-c4", cellData: <DeleteButton />, cellSx: {} },
      ],
      rowSx: {},
    },
    {
      id: "row-7",
      rowData: [
        { id: "r7-c1", cellData: "0007 -Yale - West Chester", cellSx: {} },
        { id: "r7-c2", cellData: "3D ELECTRIC SERVICE LLC", cellSx: {} },
        { id: "r7-c3", cellData: "13609", cellSx: {} },
        { id: "r7-c4", cellData: <DeleteButton />, cellSx: {} },
      ],
      rowSx: {},
    },
    {
      id: "row-8",
      rowData: [
        { id: "r8-c1", cellData: "0007 -Yale - West Chester", cellSx: {} },
        { id: "r8-c2", cellData: "3D ELECTRIC SERVICE LLC", cellSx: {} },
        { id: "r8-c3", cellData: "13609", cellSx: {} },
        { id: "r8-c4", cellData: <DeleteButton />, cellSx: {} },
      ],
      rowSx: {},
    },
    {
      id: "row-9",
      rowData: [
        { id: "r9-c1", cellData: "0007 -Yale - West Chester", cellSx: {} },
        { id: "r9-c2", cellData: "3D ELECTRIC SERVICE LLC", cellSx: {} },
        { id: "r9-c3", cellData: "13609", cellSx: {} },
        { id: "r9-c4", cellData: <DeleteButton />, sx: {} },
      ],
      rowSx: {},
    },
  ],
};

export { tableData };

// [
//   "3298 -Indio - CED",
//   "BUCKEYE WELDING SUPPLY CO",
//   "19234",
//   <DeleteButton />,
// ],
// [
//   "3427 -Harahan - CED",
//   "BUTCH HUESKE VMI TEST ACCOUNT",
//   "63254",
//   <DeleteButton />,
// ],
// ["0007 -Yale - West Chester", "ALL ELECTRIC", "13609", <DeleteButton />],
// ["3459 -Maui - CED", "C.K. ELECTRIC", "19234", <DeleteButton />],
// ["0007 -Yale - West Chester", "ALL ELECTRIC", "63254", <DeleteButton />],
// [
//   "3588 -Kansas City - RES",
//   "CACHE VALLEY ELECTRIC",
//   "19234",
//   <DeleteButton />,
// ],
// ["0007 -Yale - West Chester", "ALL ELECTRIC", "19234", <DeleteButton />],
// [
//   "3745 -Kent - SEC",
//   "CALIFORNIA COMMERCIAL SOLAR",
//   "19234",
//   <DeleteButton />,
// ],
// [
//   "3289 -Indianapolis - CED",
//   "ADAMS CNTY SCH DIST #1",
//   "19234",
//   <DeleteButton />,
// ],
