import React, { useState } from "react";
import { Box, InputAdornment, OutlinedInput, Paper, Tab, Table, TableBody, TableCell, TableHead, TableRow, TableSortLabel, Tabs, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search'

const transactions= [
    { fundsId: "F01",date: 'Jan 24, 2024',status: "Completed", amount: "$2.09" },
    { fundsId: "F02",date: 'April 24, 2023',status: "Pending", amount: "$0.15" },
    { fundsId: "F03",date: 'Dec 22, 2020',status: "Completed", amount: "$6" },

];

const portfolio= [
    {investment: 'Energy Fund', value: '$54.5'},
    {investment: 'Technology Fund', value: '12,00'}

]
const TransactionPage=() => {

    const [tab, setTab] = useState(0);
    const [search, setSearch] =useState('')
    // const [sortAsc, setSortAsc] = useState(true)

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setTab(newValue);
    }
    const filteredTransactions = transactions.filter((row) => Object.values(row).some((val) => val.toLowerCase().includes(search.toLowerCase())
));
    
    return <>
        <Box >
            <Typography variant="h5" mb={1} sx={{color: '#263238' }}>
                Transactions and Portfolio View
            </Typography>

            <Tabs value={tab} onChange={handleChange} sx={{
                display: 'flex', justifyContent: 'space-between', position: 'sticky'
            }}>
                <Tab label="Transactions"/>
                <Tab label="Portfolio" sx={{marginLeft: 10}}/>
            </Tabs>

            {tab === 0 && (
                <>
                    <Box mt={2}>
                        <OutlinedInput
                            startAdornment= {
                            <InputAdornment position="start">
                            <SearchIcon/>
                            </InputAdornment>} 
                        
                            placeholder="Search"
                            fullWidth
                            size="small"
                            sx={{ border: '1px solid black'}}
                            value={search}
                            onChange={(e)=> setSearch(e.target.value)}
                        />

                    </Box>
                
                <Paper sx={{ mt: 2}}>
                    <Table sx={{
                        border: '1px solid black'
                    }}>
                        <TableHead>
                            <TableRow>
                                <TableCell><TableSortLabel active={true} direction="asc"/><b>Fund ID</b></TableCell>
                                <TableCell><TableSortLabel active={true} direction="asc"/><b>Date</b></TableCell>
                                <TableCell><TableSortLabel active={true} direction="asc"/><b>Status</b></TableCell>
                                <TableCell ><TableSortLabel active={true} direction="asc"/><b>Amount</b></TableCell>
                              
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            
                            {filteredTransactions.length > 0 ? (filteredTransactions.map((row,index) => (
                                <TableRow key={index}>
                                    <TableCell>{row.fundsId}</TableCell>
                                    <TableCell>{row.date}</TableCell>
                                    <TableCell>{row.status}</TableCell>
                                    <TableCell>{row.amount}</TableCell>
                                </TableRow>
                            )) 
                        ): ( <TableRow>
                            <TableCell colSpan={4} align="center">
                                 No results
                            </TableCell>
                        </TableRow>
                        )}
                        </TableBody>
                    </Table>
                    
                </Paper>
                </>
            )}
            {tab === 1 && (
                <Paper elevation={2} sx={{ mt: 2}}>
                    <Table sx={{ border: '1px solid black'}}>
                        <TableHead>
                            <TableRow>
                                <TableCell><b>Investment</b></TableCell>
                                <TableCell><b>Value</b></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {portfolio.map((item,ind) => (
                                <TableRow key={ind}>
                                    <TableCell>{item.investment}</TableCell>
                                    <TableCell>{item.value}</TableCell>
                                </TableRow>
                            )
                        )}
                        </TableBody>
                    </Table>
                    
                </Paper>
                
            )}
        </Box>
    </>
}
export default TransactionPage;