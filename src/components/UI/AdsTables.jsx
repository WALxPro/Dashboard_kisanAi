import { Table, TableHead, TableBody, TableRow, TableHeaderCell, TableCell } from "./Table";

const AdsTable = ({ data }) => {
  return (
    <Table>
      <TableHead>
        <TableHeaderCell>Title</TableHeaderCell>
        <TableHeaderCell>Created</TableHeaderCell>
        <TableHeaderCell>Status</TableHeaderCell>
        <TableHeaderCell>Views</TableHeaderCell>
        <TableHeaderCell>Actions</TableHeaderCell>
      </TableHead>

      <TableBody>
        {data.map((ads) => (
          <TableRow key={ads.email}>
            <TableCell>
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-xs font-bold text-primary-foreground">
                  {ads.avatar}
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{ads.name}</p>
                  <p className="text-xs text-muted-foreground">{ads.email}</p>
                </div>
              </div>
            </TableCell>

            <TableCell>{ads.city}</TableCell>

            <TableCell>
              <span
                className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${
                  ads.status === "Active" ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive"
                }`}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    ads.status === "Active" ? "bg-success" : "bg-destructive"
                  }`}
                />
                {ads.status}
              </span>
            </TableCell>

            <TableCell>{ads.joined}</TableCell>
            <TableCell></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AdsTable