export const startNewGame = async (gameName) => {
    try{
        const res = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/`, {
        method: "POST",
        body: JSON.stringify({
          name: gameName
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
    })

    if(!res.ok) throw new Error('Could not create game');

    const data = await res.json();

    return data;

    }catch(err){
        console.error(err.message);
    }
}

export const submitScore = async (gameId, scorerName, scorerPoints ) =>{
    try{
        const res = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`, {
        method: "POST",
        body: JSON.stringify({
            "user": scorerName,
	        "score": Number(scorerPoints)
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });

    if(!res.ok) throw new Error('Could not submit score');

    const data = await res.json();

    return data;
    }catch(err){
        console.error(err.message);
    }
}

export const getScores = async(gameId) => {
    try{
        const res = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`);
        if(!res.ok) throw new Error('Could not fetch results');
        const data = await res.json();
        return data;
    }catch(err){
        console.error(err.message);
    }
}

export const renderScores = (parEle, arr) => {
    let html = '';

    arr.forEach((val)=>{
        if(typeof val.user === 'string'){
            html += `<li>${val.user}: ${val.score}</li>`;
        }
    })

    parEle.innerHTML = html;
}