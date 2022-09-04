export const fetchItem = async () => {
    const URL = "https://items-api.vercel.app/api/item"; // my API
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data.item);
    return data.item;
}
