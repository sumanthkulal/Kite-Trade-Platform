import React, { useState } from 'react';
import { Container, Nav, Tab, Table } from 'react-bootstrap';


const equityData = {
  headers: ['', 'Equity delivery', 'Equity intraday', 'F&O - Futures', 'F&O - Options'],
  rows: [
    ['Brokerage', 'Zero Brokerage', '0.03% or Rs. 20/executed order whichever is lower', '0.03% or Rs. 20/executed order whichever is lower', 'Flat Rs. 20 per executed order'],
    ['STT/CTT', '0.1% on buy & sell', '0.025% on the sell side', '0.02% on the sell side', '0.125% of the intrinsic value on options that are bought and exercised'],
    ['Transaction charges', 'NSE: 0.00297% BSE: 0.00375%', 'NSE: 0.00297% BSE: 0.00375%', 'NSE: 0.00173% BSE: 0', 'NSE: 0.0503% (on premium) BSE: 0.0325% (on premium)'],
    ['GST', '18% on (brokerage + SEBI charges + transaction charges)', '18% on (brokerage + SEBI charges + transaction charges)', '18% on (brokerage + SEBI charges + transaction charges)', '18% on (brokerage + SEBI charges + transaction charges)'],
    ['SEBI charges', '₹10 / crore', '₹10 / crore', '₹10 / crore', '₹10 / crore'],
    ['Stamp charges', '0.015% or ₹1500 / crore on buy side', '0.003% or ₹300 / crore on buy side', '0.002% or ₹200 / crore on buy side', '0.003% or ₹300 / crore on buy side'],
  ],
};

const currencyData = {
  headers: ['', 'Currency Futures', 'Currency Options'],
  rows: [
    ['Brokerage', '0.03% or ₹20/executed order whichever is lower', '₹20/executed order'],
    ['STT/CTT', 'No STT', 'No STT'],
    ['Transaction charges', 'NSE: 0.0009% BSE: 0.00022%', 'NSE: 0.035% BSE: 0.0032%'],
    ['GST', '18% on (brokerage + SEBI charges + transaction charges)', '18% on (brokerage + SEBI charges + transaction charges)'],
    ['SEBI charges', '₹10 / crore', '₹10 / crore'],
    ['Stamp charges', '0.0001% or ₹10 / crore on buy side', '0.0001% or ₹10 / crore on buy side'],
  ],
};

const commodityData = {
  headers: ['', 'Commodity Futures', 'Commodity Options'],
  rows: [
    ['Brokerage', '0.03% or ₹20/executed order whichever is lower', '₹20/executed order'],
    ['STT/CTT', '0.0001% on sell side', '0.05% on sell side'],
    ['Transaction charges', 'NSE: 0.0026% BSE: 0.0013%', 'NSE: 0.05% BSE: 0.002%'],
    ['GST', '18% on (brokerage + SEBI charges + transaction charges)', '18% on (brokerage + SEBI charges + transaction charges)'],
    ['SEBI charges', '₹1.5 / crore', '₹1.5 / crore'],
    ['Stamp charges', '0.002% or ₹200 / crore on buy side', '0.003% or ₹300 / crore on buy side'],
  ],
};

const tables = {
  equity: equityData,
  currency: currencyData,
  commodity: commodityData,
};

function Brokerage() {
  const [activeTab, setActiveTab] = useState('equity');

  const renderTable = (data) => (
    <Table striped bordered responsive className="mt-4">
      <thead>
        <tr>
          {data.headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Brokerage</h1>
      <Tab.Container activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
        <Nav variant="tabs" className="justify-content-center">
          <Nav.Item>
            <Nav.Link eventKey="equity">Equity</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="currency">Currency</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="commodity">Commodity</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content>
          {activeTab === 'equity' && renderTable(tables.equity)}
          {activeTab === 'currency' && renderTable(tables.currency)}
          {activeTab === 'commodity' && renderTable(tables.commodity)}
        </Tab.Content>
      </Tab.Container>
    </Container>
  );
}

export default Brokerage;