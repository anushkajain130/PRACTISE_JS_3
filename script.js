function changeQuote()
{

    let quotes =
    [
        "A rose by any other name would smell as sweet." ,
        "All that glitters is not gold.",
        "Ask, and it shall be given you; seek, and you shall find." ,
        "He travels the fastest who travels alone" ,
        "All the world's a stage, and all the men and women merely players."
    ]

    let authors = 
    [
        "William Shakespeare",
        "William Shakespeare",
        "the Bible",
        "John Kennedy",
        "Thomas Edison"
    ]

    let a = Math.floor(Math.random()*quotes.length)
    document.getElementById("quote").innerHTML = `\" ${quotes[a]} \"`
    document.getElementById("author name").innerHTML = "- " + authors[a]
    
}