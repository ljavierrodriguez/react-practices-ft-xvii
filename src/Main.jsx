import React, { useState } from 'react';

import { Button } from './components/Button';
import List from './components/List';
import ListItem from './components/ListItem';
import Search from './components/Search';
import { FaSearch } from 'react-icons/fa';
import useSearch from './hooks/useSearch';

export default function Main() {

    const [languages, setLanguages] = useState([
        "Javascript",
        "Java",
        "PHP",
        "Python",
        "Scala",
        "Go",
        "Ruby",
        "C#",
        "Visual Basic",
        "F#", // No
        "C",
        "C++",
        "Perl",
        "Kotlin",
        "Objective-C",
        "Swift",
        "Julia", // No
        "R" // No
    ])

    const [show, setShow] = useState(false);

    const [showSearch, setShowSearch] = useState(false)

    /* const [search, setSearch] = useState(""); */

    const { search, setSearch} = useSearch(""); // Custom Hooks

    return (
        <>
            <Button className={"btn-info"} onClick={() => setShowSearch(!showSearch)}>
                <FaSearch />
            </Button>
            <hr />
            {
                showSearch && (
                    <>
                        <div className="d-flex justify-content-center my-5">
                            <Search placeholder="Search..." onChange={(e) => setSearch(e.target.value)}/>
                        </div>
                        <hr />
                    </>
                )
            }


            <h1>Hola desde React</h1>
            {
                show ? (
                    <Button className="btn-primary" onClick={() => setShow(!show)}>
                        <span>Mi Primer Boton</span>
                    </Button>
                ) : (
                    <Button className="btn-secondary" onClick={() => setShow(!show)}>
                        <span>Mi Segundo Boton</span>
                    </Button>
                )
            }




            <List className={"list-group w-25 m-3"}>
                {
                    languages.filter((lang) => lang.toLowerCase().includes(search.toLowerCase()) ).map((lang, index) => {
                        return (
                            <ListItem className={"list-group-item list-group-item-action" + (index % 2 === 0 ? " active" : "")}>
                                {lang}
                            </ListItem>
                        )
                    })
                }
                {/* <ListItem className={"list-group-item list-group-item-action"}>
                    Javascript
                </ListItem>
                <ListItem className={"list-group-item list-group-item-action"}>
                    Java
                </ListItem>
                <ListItem className={"list-group-item list-group-item-action"}>
                    PHP
                </ListItem>
                <ListItem className={"list-group-item list-group-item-action"}>
                    Python
                </ListItem> */}
            </List>
        </>
    )
}