import useInstruments from "../../Hooks/UseInstruments";
import Instruments from "../Instruments/Instruments";
import Banner from '../Banner/Banner'

const Home = () => {
    const [instruments] = useInstruments(); // Fetch data by calling function
    return (
        <div>
            <Banner></Banner>
            <div className="row mt-3 container mx-auto">
                {
                    instruments.slice(1, 5).map(instrument => <Instruments key={instrument.img} instrument={instrument}></Instruments>)
                }
            </div>
        </div>
    );
};

export default Home;