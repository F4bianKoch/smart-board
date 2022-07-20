import './styles/widgetGrid.css';
import ExampleWidget from './exampleWidget';
import WeatherWidget from './weatherWidget';
import TodoWidget from './todoWidget';


const WidgetGrid = () => {

  return (
    <div className="widget-grid">
      <div className="widget"><WeatherWidget /></div>
      <div className="widget"><TodoWidget/></div>
      <div className="widget"><ExampleWidget /></div>
      <div className="widget"><ExampleWidget /></div>
    </div>    
  );
}

export default WidgetGrid;