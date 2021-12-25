import { useEffect, useState } from "react";
const localCache = {};
export default function useBreedList(animal) {
    const [breedList, setBreedList] = useState([]);
    const [status, setStatus] = useState("Unloaded");
    useEffect(() => {
        if (!animal) {
            setBreedList([]);
        }
        else if (localCache[animal]) {
            setBreedList(localCache[animal]);
        }
        else {
            reqeustBreedList()
        }

        async function reqeustBreedList() {
            setBreedList([]);
            setStatus("Laoding");
            const res = await fetch(
                `http://pets-v2.dev-apis.com/breeds?animal=${animal}`);
            const json = await res.json();
            localCache[animal] = json.breeds || [];
            setBreedList(localCache[animal]);
            setStatus("loaded");

        }
    }, [animal]);
    return [breedList, status]
}
