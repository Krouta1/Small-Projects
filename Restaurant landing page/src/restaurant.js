

const createRestaurantHomePage = () =>{
    //create a content
    const content = document.querySelector(".content");
    const pageContent = document.createElement('div')
    pageContent.classList.add('page-content')

    //create and append headline
    const headline = document.createElement('h1');
    headline.textContent = 'Welcome to our restaurant';
    pageContent.appendChild(headline);

    //create and appned copy element
    const copy = document.createElement('p');
    copy.textContent = 'We serve best food in town';
    pageContent.appendChild(copy)

    //create and append image of resaurant
    const image =document.createElement('img');
    image.src = "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80";
    image.height = '500'
    pageContent.appendChild(image)

    // append pageContent to page
    content.appendChild(pageContent)

}

export default createRestaurantHomePage;