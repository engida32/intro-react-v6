import { useState ,useEffect} from "react";
import Pet from './Pet.js'

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
const SearchParams = () => {
    const [location, setLocation] = useState("Seattle, WA");
    const [animal, setAnimal] = useState("dog");
    const [breed, setBreed] = useState("");
    const breeds = [];
    // const location = "Seattle,WA";
    // function updateLocation(e) {
    //     setLocation(e.target.value)
    // }
    return <div className="search-params">
        <form>
            <label htmlFor="location">
                Location
                <input id="loaction"
                    onChange={(e) => setLocation(e.target.value)}
                    // onChange={updateLocation}
                    value={location} placeholder="Seattle,WA"
                />
            </label>
            <label htmlFor="animal">
                Animal
                <select
                    disabled={!ANIMALS.length}
                    id="animal"
                    value={animal}
                    onChange={e => setAnimal(e.target.value)}
                    onBlur={e => setAnimal(e.target.value)}
                >
                    <option />
                    {ANIMALS.map((animal) => (
                        <option key={animal} value={animal}>
                            {animal}
                        </option>

                    ))}

                </select>
            </label>

            <label htmlFor="breed">
                Breed
                <select
                    disabled={!breeds.length}
                    id="breed"
                    value={breed}
                    onChange={e => setBreed(e.target.value)}
                    onBlur={e => setBreed(e.target.value)}
                >
                    <option />
                    <option value="" />
                    {breeds.map(breeds => (
                        <option value={breed} key={breed}  >
                            {breed}
                        </option>

                    ))}

                </select>
            </label>
            <button> Submit</button>
        </form>

    </div>
}
export default SearchParams;