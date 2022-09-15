import { useState } from "react";

const useSearch = (inicialValue) => {
    const [search, setSearch] = useState(inicialValue);
    return {
        search, setSearch
    }
}

export default useSearch;