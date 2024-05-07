import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params: {
        key: "0b5b78acbaa94dc4aebd17843bfa30d1",
    },
});