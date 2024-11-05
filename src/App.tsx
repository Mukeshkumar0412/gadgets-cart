import Banners from './components/Banners'
import Header from './components/Header'
import TestApiComponent from './components/TestApiComponent'


type Props = {}

export default function App({ }: Props) {
  return (
    <div>
      <Header />
      <Banners />
      <TestApiComponent />
    </div>
  )
}