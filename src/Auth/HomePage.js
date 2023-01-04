import Header from "../Header/Header";
import GMap from "../Map/GMap";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import Loader from "./Loader";

const App = () => {
  const { setEventData, reRenderMarkers } = useMainContext();
  const [loading, setLoading] = useState(false);
  const [renderEvent, setRenderEvent] = useState([]);

  return (
    <div className="HomePage">
      <Header />
      {!loading ? <GMap eventData={renderEvent} /> : <Loader />} 
      <Nav />
      <Footer />
    </div>
  );
}

export default App;