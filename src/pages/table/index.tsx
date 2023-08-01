import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material'
import React from 'react'
import IconifyIcon from 'src/@core/components/icon'

const createData = (no: number, code: string, name: string, uom: string, action: string) => {
  return { no, code, name, uom, action }
}

const rows = [
  createData(1, 'Kode A', 'Nama A', 'UOM A', 'Delete'),
  createData(2, 'Kode B', 'Nama B', 'UOM B', 'Delete'),
  createData(3, 'Kode C', 'Nama C', 'UOM C', 'Delete'),
  createData(4, 'Kode D', 'Nama D', 'UOM D', 'Delete'),
  createData(5, 'Kode E', 'Nama E', 'UOM E', 'Delete')
]

const BasicTable = () => {
  return (
    <Grid container>
      <Grid sm={6}>
        <Card>
          <CardHeader title='Basic Table' />
          <CardContent>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell align='center'>No</TableCell>
                    <TableCell>Code</TableCell>
                    <TableCell>Name/Description</TableCell>
                    <TableCell>UOM</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map(row => (
                    <TableRow key={row.no}>
                      <TableCell align='center'>{row.no}</TableCell>
                      <TableCell>{row.code}</TableCell>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.uom}</TableCell>
                      <TableCell align='center'>
                        <Button variant='tonal' color='error' startIcon={<IconifyIcon icon='tabler:trash' />}>
                          {row.action}
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default BasicTable
