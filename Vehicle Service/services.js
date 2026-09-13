const vehicleType = document.getElementById("vehicleType");
const vehicleModel = document.getElementById("vehicleModel");
const serviceResults = document.getElementById("serviceResults");

// VEHICLE MODELS

vehicleType.addEventListener("change", function () {

    vehicleModel.innerHTML =
        '<option value="">-- Select Vehicle Model --</option>';

    // Clear old results
    serviceResults.innerHTML = "";


    // CAR

    if (vehicleType.value === "car") {

        vehicleModel.innerHTML += `
            <option value="corolla">Toyota Corolla</option>
            <option value="prius">Toyota Prius</option>
            <option value="civic">Honda Civic</option>
            <option value="alto">Suzuki Alto</option>
        `;
    }


    // VAN

    else if (vehicleType.value === "van") {

        vehicleModel.innerHTML += `
            <option value="hiace">Toyota Hiace</option>
            <option value="kdh">Toyota KDH</option>
            <option value="caravan">Nissan Caravan</option>
            <option value="every">Suzuki Every</option>
        `;
    }


    // SUV

    else if (vehicleType.value === "suv") {

        vehicleModel.innerHTML += `
            <option value="fortuner">Toyota Fortuner</option>
            <option value="rav4">Toyota RAV4</option>
            <option value="crv">Honda CR-V</option>
            <option value="sportage">Kia Sportage</option>
        `;
    }


    // MOTORCYCLE

    else if (vehicleType.value === "motorcycle") {

        vehicleModel.innerHTML += `
            <option value="dio">Honda Dio</option>
            <option value="hornet">Honda Hornet</option>
            <option value="fz">Yamaha FZ</option>
            <option value="pulsar">Bajaj Pulsar</option>
        `;
    }


    // TRUCK

    else if (vehicleType.value === "truck") {

        vehicleModel.innerHTML += `
            <option value="isuzu-n">Isuzu N-Series</option>
            <option value="tata">Tata LPT</option>
            <option value="mitsubishi-canter">
                Mitsubishi Canter
            </option>
        `;
    }


    // BUS

    else if (vehicleType.value === "bus") {

        vehicleModel.innerHTML += `
            <option value="coaster">Toyota Coaster</option>
            <option value="rosa">Mitsubishi Rosa</option>
            <option value="county">Hyundai County</option>
        `;
    }

});

// SERVICE DATA

const services = {

    // CARS
    
    corolla: [

        {
            name: "Oil Change",
            description: "Engine oil replacement and basic inspection.",
            price: "Rs. 5,000",
            time: "1 Hour"
        },

        {
            name: "Brake Service",
            description: "Brake inspection and brake pad checking.",
            price: "Rs. 8,500",
            time: "2 Hours"
        },

        {
            name: "AC Service",
            description: "Air conditioning inspection and maintenance.",
            price: "Rs. 7,500",
            time: "2 Hours"
        },

        {
            name: "Full Vehicle Service",
            description: "Complete vehicle inspection and maintenance.",
            price: "Rs. 25,000",
            time: "3 - 4 Hours"
        }

    ],


    prius: [

        {
            name: "Hybrid System Service",
            description: "Hybrid system inspection and maintenance.",
            price: "Rs. 18,000",
            time: "2 Hours"
        },

        {
            name: "Oil Change",
            description: "Engine oil replacement and inspection.",
            price: "Rs. 5,500",
            time: "1 Hour"
        },

        {
            name: "Brake Service",
            description: "Brake inspection and maintenance.",
            price: "Rs. 9,000",
            time: "2 Hours"
        }

    ],


    civic: [

        {
            name: "Oil Change",
            description: "Engine oil replacement.",
            price: "Rs. 5,500",
            time: "1 Hour"
        },

        {
            name: "Brake Service",
            description: "Brake inspection and maintenance.",
            price: "Rs. 9,000",
            time: "2 Hours"
        },

        {
            name: "Engine Service",
            description: "Engine inspection and maintenance.",
            price: "Rs. 15,000",
            time: "3 Hours"
        }

    ],


    alto: [

        {
            name: "Oil Change",
            description: "Engine oil replacement.",
            price: "Rs. 4,000",
            time: "1 Hour"
        },

        {
            name: "Brake Service",
            description: "Brake inspection and cleaning.",
            price: "Rs. 6,500",
            time: "1.5 Hours"
        },

        {
            name: "Full Service",
            description: "Complete vehicle inspection.",
            price: "Rs. 18,000",
            time: "3 Hours"
        }

    ],

    // VANS
   
    hiace: [

        {
            name: "Engine Service",
            description: "Complete engine inspection and maintenance.",
            price: "Rs. 20,000",
            time: "3 Hours"
        },

        {
            name: "Oil Change",
            description: "Engine oil replacement.",
            price: "Rs. 7,000",
            time: "1 Hour"
        },

        {
            name: "Brake Service",
            description: "Brake inspection and maintenance.",
            price: "Rs. 12,000",
            time: "2 Hours"
        },

        {
            name: "Full Service",
            description: "Complete van inspection and maintenance.",
            price: "Rs. 30,000",
            time: "4 Hours"
        }

    ],


    kdh: [

        {
            name: "Engine Service",
            description: "Diesel engine inspection and maintenance.",
            price: "Rs. 22,000",
            time: "3 Hours"
        },

        {
            name: "Oil Change",
            description: "Engine oil and filter replacement.",
            price: "Rs. 7,500",
            time: "1 Hour"
        },

        {
            name: "Brake Service",
            description: "Brake system inspection.",
            price: "Rs. 13,000",
            time: "2 Hours"
        }

    ],


    caravan: [

        {
            name: "Oil Change",
            description: "Engine oil replacement and inspection.",
            price: "Rs. 7,000",
            time: "1 Hour"
        },

        {
            name: "AC Service",
            description: "Van air conditioning service.",
            price: "Rs. 9,000",
            time: "2 Hours"
        },

        {
            name: "Full Service",
            description: "Complete vehicle maintenance.",
            price: "Rs. 28,000",
            time: "4 Hours"
        }

    ],


    every: [

        {
            name: "Oil Change",
            description: "Engine oil replacement.",
            price: "Rs. 5,000",
            time: "1 Hour"
        },

        {
            name: "Brake Service",
            description: "Brake inspection and maintenance.",
            price: "Rs. 8,000",
            time: "2 Hours"
        }

    ],

    // SUVs
    
    fortuner: [

        {
            name: "Engine Service",
            description: "Engine inspection and maintenance.",
            price: "Rs. 20,000",
            time: "3 Hours"
        },

        {
            name: "Brake Service",
            description: "Complete brake inspection.",
            price: "Rs. 14,000",
            time: "2 Hours"
        },

        {
            name: "AC Service",
            description: "AC inspection and maintenance.",
            price: "Rs. 10,000",
            time: "2 Hours"
        },

        {
            name: "Full Service",
            description: "Complete SUV maintenance.",
            price: "Rs. 35,000",
            time: "4 Hours"
        }

    ],


    rav4: [

        {
            name: "Oil Change",
            description: "Engine oil replacement.",
            price: "Rs. 7,000",
            time: "1 Hour"
        },

        {
            name: "Brake Service",
            description: "Brake inspection and maintenance.",
            price: "Rs. 12,000",
            time: "2 Hours"
        },

        {
            name: "Full Service",
            description: "Complete vehicle maintenance.",
            price: "Rs. 30,000",
            time: "4 Hours"
        }

    ],


    crv: [

        {
            name: "Oil Change",
            description: "Engine oil replacement.",
            price: "Rs. 6,500",
            time: "1 Hour"
        },

        {
            name: "AC Service",
            description: "Air conditioning maintenance.",
            price: "Rs. 9,000",
            time: "2 Hours"
        },

        {
            name: "Brake Service",
            description: "Brake inspection.",
            price: "Rs. 11,000",
            time: "2 Hours"
        }

    ],


    sportage: [

        {
            name: "Oil Change",
            description: "Engine oil replacement.",
            price: "Rs. 6,500",
            time: "1 Hour"
        },

        {
            name: "Engine Service",
            description: "Engine inspection and maintenance.",
            price: "Rs. 17,000",
            time: "3 Hours"
        },

        {
            name: "Full Service",
            description: "Complete SUV service.",
            price: "Rs. 30,000",
            time: "4 Hours"
        }

    ],


   // MOTORCYCLES
   
    dio: [

        {
            name: "Engine Oil Change",
            description: "Engine oil replacement.",
            price: "Rs. 2,500",
            time: "30 Minutes"
        },

        {
            name: "Brake Service",
            description: "Brake inspection and adjustment.",
            price: "Rs. 2,000",
            time: "1 Hour"
        },

        {
            name: "Full Motorcycle Service",
            description: "Complete motorcycle inspection.",
            price: "Rs. 5,000",
            time: "2 Hours"
        }

    ],


    hornet: [

        {
            name: "Engine Oil Change",
            description: "Engine oil replacement.",
            price: "Rs. 3,000",
            time: "30 Minutes"
        },

        {
            name: "Brake Service",
            description: "Brake inspection and maintenance.",
            price: "Rs. 2,500",
            time: "1 Hour"
        },

        {
            name: "Full Service",
            description: "Complete motorcycle maintenance.",
            price: "Rs. 6,000",
            time: "2 Hours"
        }

    ],


    fz: [

        {
            name: "Engine Oil Change",
            description: "Engine oil replacement.",
            price: "Rs. 3,000",
            time: "30 Minutes"
        },

        {
            name: "Chain Service",
            description: "Chain cleaning, adjustment and lubrication.",
            price: "Rs. 2,000",
            time: "1 Hour"
        },

        {
            name: "Full Service",
            description: "Complete motorcycle maintenance.",
            price: "Rs. 6,000",
            time: "2 Hours"
        }

    ],


    pulsar: [

        {
            name: "Engine Oil Change",
            description: "Engine oil replacement.",
            price: "Rs. 2,800",
            time: "30 Minutes"
        },

        {
            name: "Brake Service",
            description: "Brake inspection and adjustment.",
            price: "Rs. 2,000",
            time: "1 Hour"
        },

        {
            name: "Full Service",
            description: "Complete motorcycle service.",
            price: "Rs. 5,500",
            time: "2 Hours"
        }

    ],


    // TRUCKS
    
    "isuzu-n": [

        {
            name: "Engine Service",
            description: "Diesel engine inspection and maintenance.",
            price: "Rs. 30,000",
            time: "4 Hours"
        },

        {
            name: "Brake Service",
            description: "Heavy vehicle brake inspection.",
            price: "Rs. 18,000",
            time: "3 Hours"
        },

        {
            name: "Oil Change",
            description: "Engine oil and filter replacement.",
            price: "Rs. 10,000",
            time: "1.5 Hours"
        }

    ],


    tata: [

        {
            name: "Engine Service",
            description: "Truck engine inspection.",
            price: "Rs. 28,000",
            time: "4 Hours"
        },

        {
            name: "Brake Service",
            description: "Heavy vehicle brake maintenance.",
            price: "Rs. 17,000",
            time: "3 Hours"
        },

        {
            name: "Full Service",
            description: "Complete truck maintenance.",
            price: "Rs. 45,000",
            time: "5 Hours"
        }

    ],


    "mitsubishi-canter": [

        {
            name: "Engine Service",
            description: "Diesel engine maintenance.",
            price: "Rs. 30,000",
            time: "4 Hours"
        },

        {
            name: "Oil Change",
            description: "Engine oil and filter replacement.",
            price: "Rs. 10,000",
            time: "1.5 Hours"
        },

        {
            name: "Brake Service",
            description: "Truck brake system inspection.",
            price: "Rs. 18,000",
            time: "3 Hours"
        }

    ],

    // BUSES
   
    coaster: [

        {
            name: "Engine Service",
            description: "Bus engine inspection and maintenance.",
            price: "Rs. 35,000",
            time: "5 Hours"
        },

        {
            name: "Brake Service",
            description: "Complete bus brake inspection.",
            price: "Rs. 22,000",
            time: "3 Hours"
        },

        {
            name: "AC Service",
            description: "Bus air conditioning maintenance.",
            price: "Rs. 15,000",
            time: "3 Hours"
        },

        {
            name: "Full Bus Service",
            description: "Complete bus inspection and maintenance.",
            price: "Rs. 55,000",
            time: "6 Hours"
        }

    ],


    rosa: [

        {
            name: "Engine Service",
            description: "Bus engine inspection and maintenance.",
            price: "Rs. 35,000",
            time: "5 Hours"
        },

        {
            name: "Brake Service",
            description: "Brake inspection and maintenance.",
            price: "Rs. 22,000",
            time: "3 Hours"
        },

        {
            name: "Full Service",
            description: "Complete bus maintenance.",
            price: "Rs. 50,000",
            time: "6 Hours"
        }

    ],


    county: [

        {
            name: "Engine Service",
            description: "Engine inspection and maintenance.",
            price: "Rs. 30,000",
            time: "4 Hours"
        },

        {
            name: "Oil Change",
            description: "Engine oil replacement.",
            price: "Rs. 10,000",
            time: "1.5 Hours"
        },

        {
            name: "Brake Service",
            description: "Bus brake system maintenance.",
            price: "Rs. 20,000",
            time: "3 Hours"
        }

    ]

};

// FILTER SERVICES

function filterServices() {

    const model = vehicleModel.value;

    serviceResults.innerHTML = "";


    // No model selected

    if (model === "") {

        serviceResults.innerHTML = `
            <div class="message">
                Please select a vehicle model first.
            </div>
        `;

        return;
    }


    // Get services for selected model

    const selectedServices = services[model];


    // Get selected model name

    const modelName =
        vehicleModel.options[vehicleModel.selectedIndex].text;


    serviceResults.innerHTML = `

        <h2 class="result-title">
            Available Services for ${modelName}
        </h2>

    `;


    // Display services

    selectedServices.forEach(function(service) {

        serviceResults.innerHTML += `

            <div class="service-card">

                <div class="service-info">

                    <h3>
                        ${service.name}
                    </h3>

                    <p>
                        ${service.description}
                    </p>

                    <p>
                        <strong>
                            Estimated Time:
                        </strong>

                        ${service.time}
                    </p>

                </div>


                <div class="price-section">

                    <p class="price-label">
                        Estimated Price
                    </p>

                    <p class="price">
                        ${service.price}
                    </p>

                    <button
                        class="book-button"
                        type="button">

                        Book Service

                    </button>

                </div>

            </div>

        `;

    });

}