import { Table, TableHead, TableBody, TableRow, TableHeaderCell, TableCell } from "./Table";

const RecentFarmersTable = ({ data }) => {
  return (
    <Table>
      <TableHead>
        <TableHeaderCell>Farmer</TableHeaderCell>
        <TableHeaderCell>City</TableHeaderCell>
        <TableHeaderCell>Status</TableHeaderCell>
        <TableHeaderCell>Joined</TableHeaderCell>
      </TableHead>

      <TableBody>
        {data.map((farmer) => (
          <TableRow key={farmer.email}>
            <TableCell>
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-xs font-bold text-primary-foreground">
                  {farmer.avatar}
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{farmer.name}</p>
                  <p className="text-xs text-muted-foreground">{farmer.email}</p>
                </div>
              </div>
            </TableCell>

            <TableCell>{farmer.city}</TableCell>

            <TableCell>
              <span
                className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${
                  farmer.status === "Active" ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive"
                }`}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    farmer.status === "Active" ? "bg-success" : "bg-destructive"
                  }`}
                />
                {farmer.status}
              </span>
            </TableCell>

            <TableCell>{farmer.joined}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default RecentFarmersTable