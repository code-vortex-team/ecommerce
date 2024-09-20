import React from 'react';
import { useTable } from 'react-table';
import { Box, Table, Thead, Tbody, Tr, Th, Td, Image } from '@chakra-ui/react';

const ShopOrder = ({ products }: { products: Array<any> }) => {
  const data = React.useMemo(
    () => products,
    [products]
  );

  const columns = React.useMemo(
    () => [
      {
        Header: 'عکس',
        accessor: 'image', // accessor is the key in your data
        Cell: ({ value }) => <Image boxSize="50px" src={value} alt="product image" />,
      },
      {
        Header: 'نام محصول',
        accessor: 'name',
      },
      {
        Header: 'تعداد',
        accessor: 'quantity',
      },
      {
        Header: 'قیمت',
        accessor: 'price',
        Cell: ({ value }) => `${value} ریال`,
      },
      {
        Header: 'قیمت نهایی',
        accessor: 'finalPrice',
        Cell: ({ value }) => `${value} ریال`,
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

  return (
    <Box>
      <Table {...getTableProps()} variant="striped" colorScheme="gray">
        <Thead>
          {headerGroups.map(headerGroup => (
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <Th {...column.getHeaderProps()}>{column.render('Header')}</Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <Tr {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <Td {...cell.getCellProps()}>{cell.render('Cell')}</Td>
                ))}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Box>
  );
};

export default ShopOrder;
