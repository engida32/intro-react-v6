import { useEffect, useState } from "react";
import Results from "./Result.js";
import useBreedList from "./useBreedList";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
const SearchParams = () => {
    const [location, setLocation] = useState("");
    const [animal, setAnimal] = useState("");
    const [breed, setBreed] = useState("");
    const [pets, setPets] = useState([]);
    const [breeds] = useBreedList(animal);



    useEffect(() => {
        requestPets();
    }, []);

    async function requestPets() {
        const res = await fetch(
            `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
        );
        const json = await res.json();
        console.log(json);
        setPets(json.pets);
    }



    // const location = "Seattle,WA";
    // function updateLocation(e) {
    //     setLocation(e.target.value)
    // }
    return <div className="search-params">
        <form onSubmit={e => {
            e.preventDefault();
            requestPets();


        }}>
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
                    {breeds.map(breed => (
                        <option value={breed} key={breed}  >
                            {breed}
                        </option>

                    ))}

                </select>
            </label>
            <button> Submit</button>
        </form>
        <Results pets={pets} />


    </div>
}
export default SearchParams;