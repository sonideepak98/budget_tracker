import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './components/Budget';
import ExpensesTotal from './components/ExpensesTotal';
import Remaining from './components/Remaining';
import ExpenseList from './components/ExpenseList';
import AddExpenseFrom from './components/AddExpenseFrom';
import { AppProvider } from './context/AppContext';


function App() {
  return (
    <AppProvider>
      <div className="container">
          <h2 className='mt-3'>Budget Tracker</h2>
          <div className='row mt-3'>
            <div className='col-sm'>
            <Budget/>
            </div>
            <div className='col-sm'>
              <Remaining/>
            </div>      
            <div className='col-sm'>
              <ExpensesTotal/>
            </div>
          </div>
          <h2 className='mt-3'> Expenses </h2>
          <div className='row mt-3'>
            <div className='col-sm'>
              <ExpenseList/>
            </div>
          </div>

          <h2 className='mt-3'> Add Expenses </h2>
          <div className='row mt-3'>
            <div className='col-sm'>
              <AddExpenseFrom />
            </div>
          </div>
        </div>
    </AppProvider>
  );
}

export default App;
