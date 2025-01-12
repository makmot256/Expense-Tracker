'use client'

import { useState, useEffect } from 'react'
import TransactionForm from './components/TransactionForm'
import TransactionList from './components/TransactionList'
import Chart from './components/Chart'
import { Transaction } from './types'

export default function ExpenseTracker() {
  const [transactions, setTransactions] = useState<Transaction[]>(JSON.parse(localStorage.getItem('transactions') || '[]'))

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions))
  }, [transactions])

  const addTransaction = (transaction: Transaction) => {
    setTransactions([...transactions, transaction])
  }

  const totalIncome = transactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0)

  const totalExpenses = transactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0)

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6 text-center">Expense Tracker</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <TransactionForm onAddTransaction={addTransaction} />
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Summary</h2>
            <p>Total Income: ${totalIncome.toFixed(2)}</p>
            <p>Total Expenses: ${totalExpenses.toFixed(2)}</p>
            <p>Balance: ${(totalIncome - totalExpenses).toFixed(2)}</p>
          </div>
        </div>
        <div>
          <Chart income={totalIncome} expenses={totalExpenses} />
          <TransactionList transactions={transactions} />
        </div>
      </div>
    </div>
  )
}


