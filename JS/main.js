function SwitchBetweenScreens(value) {
    switch (value) {
        case "home":
            onLoadHome();
            writeCityName()
                ;
            break;
        case "about":
            onLoadAbout()
            break;
        case "contact":
            onLoadContact()
            break;
        case "users":
            onLoadUsers()
            break;
        case "cars":
            onLoadCars()
            break;
        default:
            break;
    }


    let wearer = document.getElementById("p");

    async function getCityWether(cityName) {
        const API_KEY = "4ead01ae801c0d4d282ab045ee0e1abf";
        const BASIC_API = "https://api.openweathermap.org/data/2.5/";
        try {
            return await fetch(`${BASIC_API}weather?q=${cityName}&appid=${API_KEY}`)
                .then(result => result.json());
        }
        catch (error) { }
        finally { }
    }
    function writeCityName() {
        const cityName = "Rehovot";

        getCityWether(cityName).then((res) => {

            // console.log(res)
            for (const key in res) {
                if (key == "main") {

                    wearer.innerHTML = res[key][1];
                    // console.log(res[key])
                }
            }
        })
    }

}






