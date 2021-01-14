import React from 'react';
import './App.css';
import { Balance } from './components/Balance';
import { Header } from './components/Header';
import { History } from './components/History';
import { IncomeExpense } from './components/IncomeExpense';
import { NewTranscation } from './components/NewTranscation';
import { GolbalProvider } from './context/GobalState';


function App() {
  return (
      <GolbalProvider>
        < Header />
          <div className="container">
            < Balance />
            <IncomeExpense />
            <History />
            <NewTranscation />
          </div>
      </GolbalProvider>
  );
}

export default App;
