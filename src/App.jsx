import './assets/App.css'
import ContactForm from './components/ContactForm'
import Counter from './components/Counter'
import TodoList from './components/TodoList'
import UserProfile from './components/UserProfile'

const App = () => {
  return (
    <main>
      <Counter />
      <TodoList />
      <UserProfile />
      <ContactForm />
    </main>
  )
}

export default App
