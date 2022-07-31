function onLoadCars() {
    let divmain = document.getElementById("div_main")

    divmain.innerHTML += `<h1>hvuhuc</h1>`

    const API = 'https://private-anon-9605e0f607-carsapi.apiary-mock.com/manufacturers';

    async function getDataCar() {
        try {
            divmain.innerHTML = `<img style=" display: flex;justify-content: center ; margin:auto auto;height: 20vh; "  src="https://media0.giphy.com/media/3o7bu3XilJ5BOiSGic/giphy.gif">`

            return await fetch(`${API}`)
                .then(response => response.json())
        } catch (error) {
            alert(error)
        }
        finally {
            divmain.innerHTML = " ";
        }
    }
    let arrayPhoto = ["https://media.istockphoto.com/photos/ford-mustang-mache-gt-on-a-street-picture-id1362982828?s=612x612",
        "https://media.istockphoto.com/photos/transparent-car-picture-id184119153?s=612x612",
        "https://media.istockphoto.com/photos/yellow-electric-sports-car-charging-from-cable-on-parking-spot-sea-picture-id1336106724?k=20&m=1336106724&s=612x612&w=0&h=si3okcrQwbCBossVOZNrcna3vhcNG9OQveAvHZhOdyQ=",
        "https://media.istockphoto.com/photos/electric-car-plugged-into-the-charging-station-picture-id155283411?k=20&m=155283411&s=612x612&w=0&h=r07huwTYyzZSIW8M7VAysv2drATvRKgh4CJ3I0d73Fg=",
        "https://media.istockphoto.com/photos/young-woman-charging-an-electric-vehicle-picture-id1138377924?s=612x612", "https://media.istockphoto.com/photos/ford-mustang-mache-gt-on-a-street-picture-id1362982828?s=612x612",
        "https://media.istockphoto.com/photos/transparent-car-picture-id184119153?s=612x612",
        "https://media.istockphoto.com/photos/yellow-electric-sports-car-charging-from-cable-on-parking-spot-sea-picture-id1336106724?k=20&m=1336106724&s=612x612&w=0&h=si3okcrQwbCBossVOZNrcna3vhcNG9OQveAvHZhOdyQ=",
        "https://media.istockphoto.com/photos/electric-car-plugged-into-the-charging-station-picture-id155283411?k=20&m=155283411&s=612x612&w=0&h=r07huwTYyzZSIW8M7VAysv2drATvRKgh4CJ3I0d73Fg=",
        "https://media.istockphoto.com/photos/young-woman-charging-an-electric-vehicle-picture-id1138377924?s=612x612", "https://media.istockphoto.com/photos/ford-mustang-mache-gt-on-a-street-picture-id1362982828?s=612x612",
        "https://media.istockphoto.com/photos/transparent-car-picture-id184119153?s=612x612",
        "https://media.istockphoto.com/photos/yellow-electric-sports-car-charging-from-cable-on-parking-spot-sea-picture-id1336106724?k=20&m=1336106724&s=612x612&w=0&h=si3okcrQwbCBossVOZNrcna3vhcNG9OQveAvHZhOdyQ=",
        "https://media.istockphoto.com/photos/electric-car-plugged-into-the-charging-station-picture-id155283411?k=20&m=155283411&s=612x612&w=0&h=r07huwTYyzZSIW8M7VAysv2drATvRKgh4CJ3I0d73Fg=",
        "https://media.istockphoto.com/photos/young-woman-charging-an-electric-vehicle-picture-id1138377924?s=612x612", "https://media.istockphoto.com/photos/ford-mustang-mache-gt-on-a-street-picture-id1362982828?s=612x612",
        "https://media.istockphoto.com/photos/transparent-car-picture-id184119153?s=612x612",
        "https://media.istockphoto.com/photos/yellow-electric-sports-car-charging-from-cable-on-parking-spot-sea-picture-id1336106724?k=20&m=1336106724&s=612x612&w=0&h=si3okcrQwbCBossVOZNrcna3vhcNG9OQveAvHZhOdyQ=",
        "https://media.istockphoto.com/photos/electric-car-plugged-into-the-charging-station-picture-id155283411?k=20&m=155283411&s=612x612&w=0&h=r07huwTYyzZSIW8M7VAysv2drATvRKgh4CJ3I0d73Fg=",
        "https://media.istockphoto.com/photos/young-woman-charging-an-electric-vehicle-picture-id1138377924?s=612x612", "https://media.istockphoto.com/photos/ford-mustang-mache-gt-on-a-street-picture-id1362982828?s=612x612",
        "https://media.istockphoto.com/photos/transparent-car-picture-id184119153?s=612x612",
        "https://media.istockphoto.com/photos/yellow-electric-sports-car-charging-from-cable-on-parking-spot-sea-picture-id1336106724?k=20&m=1336106724&s=612x612&w=0&h=si3okcrQwbCBossVOZNrcna3vhcNG9OQveAvHZhOdyQ=",
        "https://media.istockphoto.com/photos/electric-car-plugged-into-the-charging-station-picture-id155283411?k=20&m=155283411&s=612x612&w=0&h=r07huwTYyzZSIW8M7VAysv2drATvRKgh4CJ3I0d73Fg=",
        "https://media.istockphoto.com/photos/young-woman-charging-an-electric-vehicle-picture-id1138377924?s=612x612", "https://media.istockphoto.com/photos/ford-mustang-mache-gt-on-a-street-picture-id1362982828?s=612x612",
        "https://media.istockphoto.com/photos/transparent-car-picture-id184119153?s=612x612",
        "https://media.istockphoto.com/photos/yellow-electric-sports-car-charging-from-cable-on-parking-spot-sea-picture-id1336106724?k=20&m=1336106724&s=612x612&w=0&h=si3okcrQwbCBossVOZNrcna3vhcNG9OQveAvHZhOdyQ=",
        "https://media.istockphoto.com/photos/electric-car-plugged-into-the-charging-station-picture-id155283411?k=20&m=155283411&s=612x612&w=0&h=r07huwTYyzZSIW8M7VAysv2drATvRKgh4CJ3I0d73Fg=",
        "https://media.istockphoto.com/photos/young-woman-charging-an-electric-vehicle-picture-id1138377924?s=612x612", "https://media.istockphoto.com/photos/ford-mustang-mache-gt-on-a-street-picture-id1362982828?s=612x612",
        "https://media.istockphoto.com/photos/transparent-car-picture-id184119153?s=612x612",
        "https://media.istockphoto.com/photos/yellow-electric-sports-car-charging-from-cable-on-parking-spot-sea-picture-id1336106724?k=20&m=1336106724&s=612x612&w=0&h=si3okcrQwbCBossVOZNrcna3vhcNG9OQveAvHZhOdyQ=",
        "https://media.istockphoto.com/photos/electric-car-plugged-into-the-charging-station-picture-id155283411?k=20&m=155283411&s=612x612&w=0&h=r07huwTYyzZSIW8M7VAysv2drATvRKgh4CJ3I0d73Fg=",
        "https://media.istockphoto.com/photos/young-woman-charging-an-electric-vehicle-picture-id1138377924?s=612x612", "https://media.istockphoto.com/photos/ford-mustang-mache-gt-on-a-street-picture-id1362982828?s=612x612",
        "https://media.istockphoto.com/photos/transparent-car-picture-id184119153?s=612x612",
        "https://media.istockphoto.com/photos/yellow-electric-sports-car-charging-from-cable-on-parking-spot-sea-picture-id1336106724?k=20&m=1336106724&s=612x612&w=0&h=si3okcrQwbCBossVOZNrcna3vhcNG9OQveAvHZhOdyQ=",
        "https://media.istockphoto.com/photos/electric-car-plugged-into-the-charging-station-picture-id155283411?k=20&m=155283411&s=612x612&w=0&h=r07huwTYyzZSIW8M7VAysv2drATvRKgh4CJ3I0d73Fg=",
        "https://media.istockphoto.com/photos/young-woman-charging-an-electric-vehicle-picture-id1138377924?s=612x612"
    ]

    async function printData() {

        let i = 0;

        await getDataCar().then((result) => result.forEach(element => {
            divmain.innerHTML += ` <div class="card col-lg-3  my-3  mx-auto "    style="width: 18rem" id="div_cars">
            
                <img src=${arrayPhoto[i]}  style="height:200px" class="card-img-top" >

                  <p class="card-text">model: ${element["name"]}</p>
                  <p class="card-text">average horsepower:${element["avg_horsepower"]}</p>
                  <p class="card-text">price:${element["avg_price"]}</p>
                  <a href="#" class="btn btn-primary">BUY</a>
                
              </div>
               `
            i++;
        }))
    }
    printData()
}

