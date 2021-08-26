import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import styled from 'styled-components';
import React, { useState } from 'react';
import 'react-tabs/style/react-tabs.css';
import { useTable } from 'react-table';

const TablePageStyles = styled.div`
  padding: 10rem 0 10 0;
  font-size: 2.2rem;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    padding: 20rem;
    color: var(--cg-blue);
  }
  table {
    width: 100%;
  }
`;
export default function Tablesection() {
  return (
    <>
      <TablePageStyles>
        <div className="container">
          <div className="top-section">
            <Tabs>
              <TabList>
                <Tab>Title 1</Tab>
                <Tab>Title 2</Tab>
              </TabList>

              <TabPanel>
                <h2>Any content 1</h2>
              </TabPanel>
              <TabPanel>
                <h2>Any content 2</h2>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </TablePageStyles>
    </>
  );
}
