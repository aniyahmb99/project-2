
const generateThumbNail = () => {
    return `

    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="thumbnail.css" />
        <title>Document</title>
      </head>
    
      <body>
    
        <header>
          <div class="bg-dark collapse show" id="navbarHeader">
            <div class="container">
              <div class="row">
                <div class="col-sm-8 col-md-7 py-4">
                    <h1 class="text-white">Select Your Card</h1>
                </div>
                <div class="col-sm-4 offset-md-1 py-4 ">
                  <div>
                    <h4 class="text-white">Links</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
    
        <main>
    
          <section class="py-5 text-center container text-card">
            <div class="row py-lg-5">
              <div class="col-lg-6 col-md-8 mx-auto">
                <p class="text instruction">Select the card that you would like to send below!</p>
              </div>
            </div>
          </section>
    
          <section class="album py-5 d-inline-flex">
          <div class="container flex-wrap">
          <div class="row" style="height: 500px; width: 500px">
            <div class="col">
              <div class="card shadow-sm">
    
                  <img src="../public/img/cards/MLK 1.PNG" class="img-thumbnail" alt="...">
                
                <div class="card-body">
                  <div class="d-flex align-items-center">
                    <div class="btn">
                      <button type="button" class="btn btn-md btn-outline-secondary">Select</button>
                    </div>
                  </div>
                </div>             
              </div>
            </div>
          </div>
        </div>
  
      
  
      
        <div class="container flex-wrap">
          <div class="row" style="height: 500px; width: 500px">
            <div class="col">
              <div class="card shadow-sm">
    
                <img src="../public/img/cards/MLK 2.PNG" class="img-thumbnail" alt="...">
                
                <div class="card-body">
                  <div class="d-flex align-items-center">
                    <div class="btn">
                      <button type="button" class="btn btn-md btn-outline-secondary">Select</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
    
      
        <div class="container flex-wrap">
          <div class="row" style="height: 500px; width: 500px">
            <div class="col">
              <div class="card shadow-sm">
    
                <img src="../public/img/cards/MLK 3.PNG" class="img-thumbnail" alt="..."> 
                
                <div class="card-body">
                  <div class="d-flex align-items-center">
                    <div class="btn">
                      <button id="selectBtn" type="button" class="btn btn-md btn-outline-secondary">Select</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
          </section>
          
      </main>
      </body>
      <script src="overlay.js"></script>
    </html>
    
    
    `;
  
};

module.exports = generateThumbNail;