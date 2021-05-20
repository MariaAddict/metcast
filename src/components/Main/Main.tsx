import './Main.css';
import SearchForecast from '../SearchForecast/SearchForecast';


function Main() {
    return (
        <main className="main">
            <SearchForecast forecast='7days' />
            <SearchForecast forecast='day' />
        </main>
    );
}

export default Main;