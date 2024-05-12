import { Button } from "@mui/material";
import { colours,headlightcolors, useCustomization,interiorcolors } from "../contexts/Customization";
import { Print } from "@mui/icons-material";
const Configurator = () => {
  const {
    car,
    setCar,
    accessory,
    setAccessory,
    carColour,
    setCarColour,
    carDetails,
    setCarDetails,
    headlightColor,
    setHeadlightColor,interior,setInterior,environment,setEnvironment
  } = useCustomization();
  


  
  return (
    <>
    <div className="configurator">
      <div className="configurator_section">
        <div className="configurator_section_title">Car Options</div>
        
      </div>
     {/*  <div className="configurator_section">
        <div className="configurator_section_title">Environments</div>
      
        <div className="configurator_section_values">
          <div
            className={`item ${environment === "env2" ? "item-active" : ""}`}
            onClick={() => setEnvironment('env2')}
          >
            <div className="item_option">Environment1</div>
          </div>
          <div
            className={`item ${environment === "env" ? "item-active" : ""}`}
            onClick={() => setEnvironment('env')}
          >
            <div className="item_option">Environment2</div>
          </div>
          <div
            className={`item ${environment === "env1" ? "item-active" : ""}`}
            onClick={() => setEnvironment('env1')}
          >
            <div className="item_option">Environment3</div>
          </div>
          
        </div>
      </div> */}
      <div className="configurator_section">
        <div className="configurator_section_title">Car Colour</div>
        <div className="configurator_section_values">
          {/* This code is rendering a list of color options for the user to select for the car. It is
          using the `map` function to iterate over the `colours` array and render a `div` element
          for each color option. The `key` attribute is set to the `index` of the current item in
          the array. The `className` attribute is dynamically setting the class of the `div` element
          based on whether the `colour` property of the current item matches the `colour` property
          of the `carColour` state variable. If the `colour` properties match, the `item-active`
          class is added to the `div` element, which highlights the selected option. The `onClick`
          attribute is setting the `carColour` state variable to the current item when the user
          clicks on the option. The `div` element also displays a color preview and the name of the
        color option. */}
          {colours.map((item, index) => (
            <div
              key={index}
              className={`item ${
                item === carColour ? "item-active" : ""
              }`}
              onClick={() => setCarColour(item)}
            >
              <div
                className="item_colour_preview"
                style={{
                  backgroundColor: item,
                }}
              />
              <div className="item_option">{item.name}</div>
            </div>
          ))}
          <input type="color" onChange={(e) => {console.log(e.target.value);setCarColour(e.target.value)}} />
        </div>
      </div>
      <div className="configurator_section">
        <div className="configurator_section_title">Interior Colour</div>
        <div className="configurator_section_values">
          {/* This code is rendering a list of color options for the user to select for the car. It is
          using the `map` function to iterate over the `colours` array and render a `div` element
          for each color option. The `key` attribute is set to the `index` of the current item in
          the array. The `className` attribute is dynamically setting the class of the `div` element
          based on whether the `colour` property of the current item matches the `colour` property
          of the `carColour` state variable. If the `colour` properties match, the `item-active`
          class is added to the `div` element, which highlights the selected option. The `onClick`
          attribute is setting the `carColour` state variable to the current item when the user
          clicks on the option. The `div` element also displays a color preview and the name of the
        color option. */}
          {interiorcolors.map((item, index) => (
            <div
              key={index}
              className={`item ${
                item.colour === interior.colour ? "item-active" : ""
              }`}
              onClick={() => setInterior(item)}
            >
              <div
                className="item_colour_preview"
                style={{
                  backgroundColor: item.colour,
                }}
              />
              <div className="item_option">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="configurator_section">
        <div className="configurator_section_title">Wheels</div>
      
        <div className="configurator_section_values">
          <div
            className={`item ${accessory === 1 ? "item-active" : ""}`}
            onClick={() => setAccessory(1)}
          >
            <div className="item_option">Wheel-1</div>
          </div>
          <div
            className={`item ${accessory === 0 ? "item-active" : ""}`}
            onClick={() => setAccessory(0)}
          >
            <div className="item_option">Wheel-2</div>
          </div>
        </div>
      </div>
      
      
    </div>
    <div className="controls">
      <p>To Look Around use Mouse</p>
      <p>To Move Around use Shift + Mouse</p>
    </div>
    </>
  );
};

export default Configurator;
