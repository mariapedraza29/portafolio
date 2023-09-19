import { BodyServices } from "../BodyServices/BodyServices"
import { Header } from "../Header/Header"
import {Footer} from "../Footer/Footer"
export const Services = () => {
  return (
    <div>
        <div>
          <Header></Header>
          <BodyServices></BodyServices>
          <Footer></Footer>
        </div>
    </div>
  )
}
