import './App.css'

function App() {

  return (
    <>
      <h1 className="heading">Checklist</h1>

      <ul
        role="list"
        className="card-list"
        aria-labelledby="list-heading">
        <li className="">
          <label className="card fill" htmlFor="check-0">

            <div className="card-label-area">
              <input className="checkbox" id="check-0" type="checkbox" defaultChecked={true}/>
              <p className="title unselectable">Eggs</p>
            </div>

            <button type="button" className="remove-card">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M15.5893 5.58926C15.9147 5.26382 15.9147 4.73619 15.5893 4.41075C15.2638 4.08531 14.7362 4.08531 14.4107 4.41075L10 8.82149L5.58925 4.41075C5.26382 4.08531 4.73618 4.08531 4.41074 4.41075C4.0853 4.73619 4.0853 5.26382 4.41074 5.58926L8.82149 10L4.41074 14.4107C4.0853 14.7362 4.0853 15.2638 4.41074 15.5893C4.73618 15.9147 5.26382 15.9147 5.58925 15.5893L10 11.1785L14.4107 15.5893C14.7362 15.9147 15.2638 15.9147 15.5893 15.5893C15.9147 15.2638 15.9147 14.7362 15.5893 14.4107L11.1785 10L15.5893 5.58926Z" fill="var(--surface-text-default)"/>
            </svg>
            </button>
          </label>
        </li>
        <li className="">
          <label className="card fill" htmlFor="check-0">

            <div className="card-label-area">
              <input className="checkbox" id="check-0" type="checkbox" defaultChecked={false}/>
              <p className="title unselectable">Milk</p>
            </div>

            <button type="button" className="remove-card">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M15.5893 5.58926C15.9147 5.26382 15.9147 4.73619 15.5893 4.41075C15.2638 4.08531 14.7362 4.08531 14.4107 4.41075L10 8.82149L5.58925 4.41075C5.26382 4.08531 4.73618 4.08531 4.41074 4.41075C4.0853 4.73619 4.0853 5.26382 4.41074 5.58926L8.82149 10L4.41074 14.4107C4.0853 14.7362 4.0853 15.2638 4.41074 15.5893C4.73618 15.9147 5.26382 15.9147 5.58925 15.5893L10 11.1785L14.4107 15.5893C14.7362 15.9147 15.2638 15.9147 15.5893 15.5893C15.9147 15.2638 15.9147 14.7362 15.5893 14.4107L11.1785 10L15.5893 5.58926Z" fill="var(--surface-text-default)"/>
            </svg>
            </button>
          </label>
        </li>
        <li className="">
          <label className="card fill" htmlFor="check-0">

            <div className="card-label-area">
              <input className="checkbox" id="check-0" type="checkbox" defaultChecked={false}/>
              <p className="title unselectable">Bread</p>
            </div>

            <button type="button" className="remove-card">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M15.5893 5.58926C15.9147 5.26382 15.9147 4.73619 15.5893 4.41075C15.2638 4.08531 14.7362 4.08531 14.4107 4.41075L10 8.82149L5.58925 4.41075C5.26382 4.08531 4.73618 4.08531 4.41074 4.41075C4.0853 4.73619 4.0853 5.26382 4.41074 5.58926L8.82149 10L4.41074 14.4107C4.0853 14.7362 4.0853 15.2638 4.41074 15.5893C4.73618 15.9147 5.26382 15.9147 5.58925 15.5893L10 11.1785L14.4107 15.5893C14.7362 15.9147 15.2638 15.9147 15.5893 15.5893C15.9147 15.2638 15.9147 14.7362 15.5893 14.4107L11.1785 10L15.5893 5.58926Z" fill="var(--surface-text-default)"/>
            </svg>
            </button>
          </label>
        </li>
      </ul>

      <form className="submit-form" >
        <input type="text" id="card-title-input" className="input-for-card fill" name="text" autoComplete="off" />
        <button type="submit" className="add-card">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10.8333 4.16667C10.8333 3.70643 10.4602 3.33333 10 3.33333C9.53977 3.33333 9.16667 3.70643 9.16667 4.16667V9.16667H4.16667C3.70643 9.16667 3.33334 9.53976 3.33334 10C3.33334 10.4602 3.70643 10.8333 4.16667 10.8333H9.16667V15.8333C9.16667 16.2936 9.53977 16.6667 10 16.6667C10.4602 16.6667 10.8333 16.2936 10.8333 15.8333V10.8333H15.8333C16.2936 10.8333 16.6667 10.4602 16.6667 10C16.6667 9.53976 16.2936 9.16667 15.8333 9.16667H10.8333V4.16667Z" fill="white"/>
        </svg>
        </button>
      </form>
      <p className="read-the-docs">
        A simple checklist app written in react
      </p>
    </>
  )
}

export default App
