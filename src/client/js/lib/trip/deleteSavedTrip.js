const deleteSavedTrip = async(id)=>{

    
    try {
        const res = await fetch(`http://localhost:3000/deleteTrip?id=${id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json'
            },
        })
        const data = await res.json();
        return data;
    }
    catch(e){
        console.log(e);//Instead of rendering on the console, display the message as an error on the index.html
    }

}

module.exports =  { deleteSavedTrip };