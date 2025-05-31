async function setValue(){
    const pincode = document.getElementById('pincode').value;
    try {
        const response = await fetch (`https://api.postalpincode.in/pincode/${pincode}`)
        const data = await response.json()

        if (data[0].Status ==="Success"){
            const postalcode = data[0].PostOffice[0];
            document.getElementById('area').value = postalcode.Name;
            document.getElementById('locality').value = postalcode.Block;
            document.getElementById('state').value = postalcode.State;
            document.getElementById('district').value = postalcode.District;
        }
        else{
            throw new Error("Invalid Pincode")
        }

    }
    catch(error){
        console.error("Error fetching data:",error);
    }
}