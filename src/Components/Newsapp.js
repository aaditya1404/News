import React, { useEffect, useState } from 'react'
import Card from './Card'

const Newsapp = () => {
    const [search, setSearch] = useState("india");
    const [newsData, setNewsData] = useState(null)
    // const API_KEY = "c2bd08db4df14724a3490a800b0e434b";

    const getData = async () => {
        const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=c2bd08db4df14724a3490a800b0e434b`);
        const jsonData = await response.json();
        console.log(jsonData.articles);
        let dt = jsonData.articles.slice(0, 10)
        setNewsData(dt)

    }

    useEffect(() => {
        getData()
    }, [getData])

    const handleInput = (e) => {
        console.log(e.target.value);
        setSearch(e.target.value)

    }
    const userInput = (event) => {
        setSearch(event.target.value)
    }

    return (
        <div>
            <nav>
                <div>
                    <h1>Trendy News</h1>
                </div>
                <ul style={{ display: "flex", gap: "11px" }}>
                    <a href="https://news.google.com/home?hl=en-IN&gl=IN&ceid=IN:en" style={{ fontWeight: 600, fontSize: "17px" }}>All News</a>
                    <a href="https://news.google.com/home?hl=en-IN&gl=IN&ceid=IN:en" style={{ fontWeight: 600, fontSize: "17px" }}>Trending</a>

                </ul>
                <div className='searchBar'>
                    <input type='text' placeholder='Search News' value={search} onChange={handleInput} />
                    <button onClick={getData}>Search</button>
                </div>
            </nav>
            <div>
                <p className='head'>Stay Update with TrendyNews</p>
            </div>
            <div className='categoryBtn'>
                <button onClick={userInput} value="sports">Sports</button>
                <button onClick={userInput} value="politics">Politics</button>
                <button onClick={userInput} value="entertainment">Entertainment</button>
                <button onClick={userInput} value="health">Health</button>
                <button onClick={userInput} value="fitness">Fitness</button>
            </div>

            <div>
                {newsData ? <Card data={newsData} /> : null}

            </div>
        </div>
    )
}

export default Newsapp