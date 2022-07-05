import './styles/widgetGrid.css';
import ExampleWidget from './exampleWidget';


const WidgetGrid = () => {

  return (
    <div className="widget-grid">
      <div className="widget"><ExampleWidget /></div>
      <div className="widget"><ExampleWidget /></div>
      <div className="widget"><ExampleWidget /></div>
      <div className="widget"><ExampleWidget /></div>
    </div>    
  );
}

export default WidgetGrid;