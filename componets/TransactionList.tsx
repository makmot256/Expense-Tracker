import { Transaction } from '../types'

interface TransactionListProps {
  transactions: Transaction[]
}

export default function TransactionList({ transactions }: TransactionListProps) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Transaction History</h2>
      <ul className="space-y-2">
        {transactions.map((transaction) => (
          <li key={transaction.id} className="border p-2 rounded">
            <div className="flex justify-between">
              <span>{transaction.description}</span>
              <span className={transaction.type === 'income' ? 'text-green-500' : 'text-red-500'}>
                {transaction.type === 'income' ? '+' : '-'}${transaction.amount.toFixed(2)}
              </span>
            </div>
            <div className="text-sm text-gray-500">
              <span>{transaction.category}</span>
              <span className="ml-2">{new Date(transaction.date).toLocaleDateString()}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

